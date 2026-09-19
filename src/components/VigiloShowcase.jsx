import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Terminal, Copy, Check, Play, AlertTriangle, CheckCircle, Bug, Sparkles, ExternalLink, RefreshCw } from 'lucide-react';
import { FaGithub, FaPython } from 'react-icons/fa';

const SAMPLE_SNIPPETS = [
  {
    id: 'eval',
    name: 'Arbitrary Code Execution',
    code: `def calculate_user_input(user_formula: str):
    # Insecure dynamic evaluation of untrusted expression
    result = eval(user_formula)
    return {"status": "ok", "value": result}`,
    findings: [
      {
        cwe: "CWE-95",
        name: "Improper Neutralization in Dynamically Evaluated Code ('Eval Injection')",
        severity: "CRITICAL",
        line: 3,
        advice: "Avoid eval(). Use ast.literal_eval() or safe expression parsers."
      }
    ]
  },
  {
    id: 'sqli',
    name: 'Raw SQL Injection Concatenation',
    code: `def get_user_account(db, username: str):
    # Vulnerable direct SQL string interpolation
    query = f"SELECT * FROM users WHERE username = '{username}'"
    return db.execute(query).fetchall()`,
    findings: [
      {
        cwe: "CWE-89",
        name: "Improper Neutralization of SQL Elements ('SQL Injection')",
        severity: "CRITICAL",
        line: 3,
        advice: "Use parameterized queries with prepared statements (e.g. %s bindings)."
      }
    ]
  },
  {
    id: 'secret',
    name: 'Hardcoded API Credential',
    code: `class CloudClient:
    API_KEY = "sk_live_99812491a82f8194b19401"
    
    def connect(self):
        return authenticate(self.API_KEY)`,
    findings: [
      {
        cwe: "CWE-798",
        name: "Use of Hard-coded Credentials",
        severity: "HIGH",
        line: 2,
        advice: "Load API tokens from environment variables using os.getenv() or a secret manager."
      }
    ]
  },
  {
    id: 'safe',
    name: 'Clean Secure Code',
    code: `import os
import hmac
import hashlib

def verify_signature(data: bytes, signature: str, secret: str) -> bool:
    expected = hmac.new(secret.encode(), data, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)`,
    findings: []
  }
];

export default function VigiloShowcase() {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_SNIPPETS[0]);
  const [customCode, setCustomCode] = useState(SAMPLE_SNIPPETS[0].code);
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState(SAMPLE_SNIPPETS[0].findings);
  const [copiedPip, setCopiedPip] = useState(false);

  const handleSelectSample = (sample) => {
    setSelectedSample(sample);
    setCustomCode(sample.code);
    setScanResult(sample.findings);
  };

  const handleRunScan = () => {
    setScanning(true);
    setScanResult(null);

    setTimeout(() => {
      const findings = [];
      const code = customCode;

      if (code.includes('eval(')) {
        findings.push({
          cwe: "CWE-95",
          name: "Improper Neutralization in Dynamically Evaluated Code ('Eval Injection')",
          severity: "CRITICAL",
          line: code.split('\n').findIndex(l => l.includes('eval(')) + 1,
          advice: "Avoid eval(). Use ast.literal_eval() or safe expression parsers."
        });
      }
      if (code.includes('f"SELECT') || code.includes("f'SELECT") || (code.includes('execute(') && code.includes('+'))) {
        findings.push({
          cwe: "CWE-89",
          name: "Improper Neutralization of SQL Elements ('SQL Injection')",
          severity: "CRITICAL",
          line: code.split('\n').findIndex(l => l.includes('SELECT') || l.includes('execute')) + 1,
          advice: "Use parameterized queries with prepared statement bindings."
        });
      }
      if (code.includes('API_KEY = "') || code.includes("PASSWORD = '") || code.includes('SECRET = "') || code.includes('sk_live_')) {
        findings.push({
          cwe: "CWE-798",
          name: "Use of Hard-coded Credentials",
          severity: "HIGH",
          line: code.split('\n').findIndex(l => l.includes('API_KEY') || l.includes('sk_live') || l.includes('SECRET')) + 1,
          advice: "Store secrets in environment variables or cloud secret managers."
        });
      }
      if (code.includes('os.system(') || code.includes('subprocess.Popen(..., shell=True)')) {
        findings.push({
          cwe: "CWE-78",
          name: "Improper Neutralization in OS Command ('Command Injection')",
          severity: "CRITICAL",
          line: code.split('\n').findIndex(l => l.includes('os.system')) + 1,
          advice: "Pass arguments as a list to subprocess.run(..., shell=False)."
        });
      }

      setScanResult(findings);
      setScanning(false);
    }, 400);
  };

  const copyPipCommand = () => {
    navigator.clipboard.writeText('pip install vigilo');
    setCopiedPip(true);
    setTimeout(() => setCopiedPip(false), 2000);
  };

  return (
    <section id="vigilo-showcase" className="py-24 px-4 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-2"
          >
            02 / Open Source Security Tool
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Vigilo <span className="text-zinc-400">Security Scanner</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mt-3 text-sm sm:text-base leading-relaxed"
          >
            A high-speed Python static analysis tool published on PyPI. Detects CWE vulnerabilities and code correctness issues at compile-time using AST traversal.
          </motion.p>
        </div>

        {/* PyPI Quick Install Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 glass-card p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
              <FaPython className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm font-mono">vigilo</span>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  PyPI Package • 4★
                </span>
              </div>
              <p className="text-xs text-zinc-400">Python Static Security Scanner &amp; Diagnostic Tool</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <div className="flex-1 sm:flex-none flex items-center justify-between gap-3 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-white/10 font-mono text-xs text-zinc-300">
              <span>pip install vigilo</span>
              <button
                onClick={copyPipCommand}
                className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
                title="Copy install command"
              >
                {copiedPip ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <a
              href="https://pypi.org/project/vigilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/20 transition-all text-xs shrink-0"
              title="View on PyPI"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/Sanjiv215/VIGILO-Python-Package"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/20 transition-all text-xs shrink-0"
              title="View GitHub Repository"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Interactive Scanner Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Code Editor & Samples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel rounded-2xl border border-white/10 overflow-hidden bg-zinc-950/80"
          >
            {/* Window header */}
            <div className="bg-zinc-900/60 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="text-xs font-mono text-zinc-400 ml-2">target_snippet.py</span>
              </div>

              <button
                onClick={handleRunScan}
                disabled={scanning}
                className="px-3 py-1 rounded-full bg-white text-zinc-950 font-semibold text-xs flex items-center gap-1.5 shadow-sm hover:bg-zinc-200 transition-all font-mono disabled:opacity-50"
              >
                {scanning ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Scanning...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-zinc-950" />
                    <span>Run Scan</span>
                  </>
                )}
              </button>
            </div>

            {/* Sample Selector Pills */}
            <div className="p-3 bg-zinc-950/40 border-b border-white/10 flex flex-wrap gap-1.5">
              <span className="text-[11px] font-mono text-zinc-500 self-center mr-1">Presets:</span>
              {SAMPLE_SNIPPETS.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-all ${
                    selectedSample.id === sample.id
                      ? 'bg-white/15 text-white border border-white/20'
                      : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-white/5'
                  }`}
                >
                  {sample.name}
                </button>
              ))}
            </div>

            {/* Code Input Area */}
            <div className="p-4 bg-zinc-950/95">
              <textarea
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
                rows={9}
                className="w-full bg-transparent font-mono text-xs sm:text-sm text-zinc-200 focus:outline-none leading-relaxed resize-none selection:bg-white/20"
                placeholder="# Type or paste Python code to scan for CWE vulnerabilities..."
              />
            </div>

            <div className="px-4 py-2 bg-zinc-950 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span>AST Parsing Engine • Python 3.10+ AST</span>
              <span>Edit snippet or choose a preset</span>
            </div>
          </motion.div>

          {/* Right: Diagnostics Output */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 bg-zinc-950/80">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-zinc-400" />
                  <h3 className="font-mono text-xs font-semibold text-white">Diagnostics Report</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  AST Engine Active
                </span>
              </div>

              {/* Status Indicator */}
              <AnimatePresence mode="wait">
                {scanning ? (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 flex flex-col items-center justify-center text-center space-y-2"
                  >
                    <RefreshCw className="w-6 h-6 text-zinc-400 animate-spin" />
                    <p className="font-mono text-xs text-zinc-300">Parsing Syntax Tree...</p>
                  </motion.div>
                ) : scanResult && scanResult.length > 0 ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3 max-h-[320px] overflow-y-auto pr-1"
                  >
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-red-950/30 border border-red-500/20 text-red-300 text-xs font-mono">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-red-400" />
                      <span>Found {scanResult.length} security vulnerability</span>
                    </div>

                    {scanResult.map((finding, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-zinc-900/80 border border-white/10 space-y-1.5 text-xs"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 font-mono font-bold text-[10px] border border-red-500/25">
                            {finding.cwe}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">Line {finding.line}</span>
                          <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[9px] uppercase">
                            {finding.severity}
                          </span>
                        </div>

                        <h4 className="font-semibold text-white leading-snug text-xs">{finding.name}</h4>
                        
                        <div className="pt-1.5 border-t border-white/5 text-zinc-400 text-[11px] leading-relaxed">
                          <span className="text-zinc-200 font-mono font-medium">Fix: </span>
                          {finding.advice}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="clean"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 flex flex-col items-center justify-center text-center space-y-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-300 text-xs">No Vulnerabilities Detected</h4>
                      <p className="text-[11px] text-zinc-500 mt-0.5">Code passed all AST checks.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Highlights Feature Badges */}
              <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-400">
                <div className="p-2 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-zinc-300" />
                  <span>CWE Mappings</span>
                </div>
                <div className="p-2 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center gap-1.5">
                  <Bug className="w-3 h-3 text-zinc-300" />
                  <span>AST Linter</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
