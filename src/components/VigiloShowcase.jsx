import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Terminal, Copy, Check, Play, AlertTriangle, CheckCircle, Bug, Sparkles, ExternalLink, RefreshCw, Code2 } from 'lucide-react';
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
        name: "Improper Neutralization of Directives in Dynamically Evaluated Code ('Eval Injection')",
        severity: "CRITICAL",
        line: 3,
        advice: "Avoid eval(). Use ast.literal_eval() or a dedicated math parser like sympy/numexpr."
      }
    ]
  },
  {
    id: 'sqli',
    name: 'Raw SQL Query Concatenation',
    code: `def get_user_account(db, username: str):
    # Vulnerable direct SQL string interpolation
    query = f"SELECT * FROM users WHERE username = '{username}'"
    return db.execute(query).fetchall()`,
    findings: [
      {
        cwe: "CWE-89",
        name: "Improper Neutralization of Special Elements in SQL Command ('SQL Injection')",
        severity: "CRITICAL",
        line: 3,
        advice: "Use parameterized queries with prepared statements (e.g., cursor.execute('SELECT * FROM users WHERE username = %s', (username,)))"
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
      // Analyze the code dynamically based on keywords
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
          name: "Improper Neutralization of Special Elements in SQL Command ('SQL Injection')",
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
          name: "Improper Neutralization of Special Elements used in an OS Command ('Command Injection')",
          severity: "CRITICAL",
          line: code.split('\n').findIndex(l => l.includes('os.system')) + 1,
          advice: "Pass arguments as a list to subprocess.run(..., shell=False)."
        });
      }

      setScanResult(findings);
      setScanning(false);
    }, 450);
  };

  const copyPipCommand = () => {
    navigator.clipboard.writeText('pip install vigilo');
    setCopiedPip(true);
    setTimeout(() => setCopiedPip(false), 2000);
  };

  return (
    <section id="vigilo-showcase" className="py-24 px-4 relative z-10 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Flagship Open-Source Package</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Vigilo <span className="text-gradient-cyan">Security Scanner</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed"
          >
            A high-speed Python static analysis tool published on PyPI. Detects CWE vulnerabilities, syntax anti-patterns, and security defects at compile-time using AST traversal.
          </motion.p>
        </div>

        {/* PyPI Quick Install Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12 glass-panel p-4 rounded-2xl border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <FaPython className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">vigilo</span>
                <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                  v1.2.0 • PyPI
                </span>
              </div>
              <p className="text-xs text-gray-400">Python Static Security Scanner &amp; Diagnostic Tool</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex-1 sm:flex-none flex items-center justify-between gap-3 px-4 py-2 rounded-xl bg-slate-950/90 border border-white/10 font-mono text-xs text-cyan-300">
              <span>pip install vigilo</span>
              <button
                onClick={copyPipCommand}
                className="p-1 rounded text-gray-400 hover:text-cyan-400 transition-colors"
                title="Copy install command"
              >
                {copiedPip ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <a
              href="https://pypi.org/project/vigilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shrink-0"
              title="View on PyPI"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/Sanjiv215/VIGILO-Python-Package"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shrink-0"
              title="View GitHub Repository"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Interactive Scanner Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Code Editor & Samples */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel rounded-3xl border border-cyan-500/30 overflow-hidden shadow-2xl"
          >
            {/* Window header */}
            <div className="bg-slate-950 px-5 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-gray-400 ml-2">target_snippet.py</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunScan}
                  disabled={scanning}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/30 hover:bg-cyan-400 active:scale-95 transition-all disabled:opacity-50"
                >
                  {scanning ? (
                    <>
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      <span>Scanning AST...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-slate-950" />
                      <span>Run Vigilo Scan</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sample Selector Pills */}
            <div className="p-4 bg-slate-900/60 border-b border-white/10 flex flex-wrap gap-2">
              <span className="text-xs font-mono text-gray-400 self-center mr-1">Vulnerability presets:</span>
              {SAMPLE_SNIPPETS.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    selectedSample.id === sample.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'bg-slate-950/60 text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  {sample.name}
                </button>
              ))}
            </div>

            {/* Code Input Area */}
            <div className="p-4 bg-slate-950/95">
              <textarea
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
                rows={9}
                className="w-full bg-transparent font-mono text-xs sm:text-sm text-cyan-200 focus:outline-none leading-relaxed resize-none selection:bg-cyan-500 selection:text-slate-950"
                placeholder="# Type or paste Python code to scan for CWE vulnerabilities..."
              />
            </div>

            <div className="px-5 py-2.5 bg-slate-950/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-500">
              <span>AST Parsing Engine • Python 3.10+ AST</span>
              <span>Edit snippet or choose a preset above</span>
            </div>
          </motion.div>

          {/* Right: Real-time Diagnostics Output */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-panel p-6 rounded-3xl border border-cyan-500/30 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-mono text-sm font-bold text-white">Vigilo Diagnostics Report</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  AST Engine Live
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
                    className="py-12 flex flex-col items-center justify-center text-center space-y-3"
                  >
                    <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin" />
                    <p className="font-mono text-xs text-gray-300">Parsing Abstract Syntax Tree (AST)...</p>
                    <p className="font-mono text-[11px] text-gray-500">Matching against CWE security ruleset</p>
                  </motion.div>
                ) : scanResult && scanResult.length > 0 ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3 max-h-[340px] overflow-y-auto pr-1"
                  >
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono">
                      <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>Found {scanResult.length} security vulnerability in target snippet!</span>
                    </div>

                    {scanResult.map((finding, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-950/80 border border-red-500/30 space-y-2 text-xs"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono font-bold text-[11px] border border-red-500/30">
                            {finding.cwe}
                          </span>
                          <span className="text-[10px] font-mono text-gray-400">Line {finding.line}</span>
                          <span className="px-2 py-0.5 rounded bg-red-950 text-red-400 font-mono text-[10px] font-bold uppercase">
                            {finding.severity}
                          </span>
                        </div>

                        <h4 className="font-bold text-white leading-snug">{finding.name}</h4>
                        
                        <div className="pt-2 border-t border-white/5 text-gray-400 text-[11px] leading-relaxed">
                          <span className="text-cyan-400 font-mono font-semibold">Remediation: </span>
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
                    className="py-10 flex flex-col items-center justify-center text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-300 text-sm">No Vulnerabilities Detected</h4>
                      <p className="text-xs text-gray-400 mt-1">Code conforms to Vigilo AST security rules.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Highlights Feature Badges */}
              <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] font-mono text-gray-400">
                <div className="p-2 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CWE Mappings</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-1.5">
                  <Bug className="w-3.5 h-3.5 text-cyan-400" />
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
