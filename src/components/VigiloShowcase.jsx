import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Terminal, Copy, Check, Play, AlertTriangle, CheckCircle, Bug, Sparkles, ExternalLink, RefreshCw } from 'lucide-react';
import { FaGithub, FaPython } from 'react-icons/fa';
import WindowFrame from './MacOS/WindowFrame';

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
    <section id="vigilo-showcase" className="py-10 sm:py-16 px-3 sm:px-4 relative z-10 max-w-5xl mx-auto">
      <WindowFrame title="Vigilo.app — Python Static Security Scanner (PyPI)" icon={Shield}>
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              PyPI Security Tool
            </span>
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
              Vigilo Security Scanner
            </h2>
            <p className="text-zinc-400 mt-1 text-xs sm:text-sm leading-relaxed">
              Compile-time AST security analysis detecting CWE vulnerabilities in Python codebases.
            </p>
          </div>

          {/* Quick Action Install Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center justify-between gap-2.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/10 font-mono text-[11px] sm:text-xs text-zinc-300">
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
              className="p-1.5 sm:p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all text-xs"
              title="View on PyPI"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/Sanjiv215/VIGILO-Python-Package"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all text-xs"
              title="View GitHub Repository"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Interactive Scanner Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start perspective-container">
          
          {/* Left: Code Editor & Samples */}
          <motion.div
            style={{ transformOrigin: '50% -40px', transformPerspective: 1000 }}
            initial={{ opacity: 0, rotateX: 10, y: 25 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-xl border border-white/15 overflow-hidden bg-zinc-950/95 shadow-xl hover:border-emerald-500/30 transition-all"
          >
            {/* Window header */}
            <div className="bg-zinc-900/90 px-3.5 py-2.5 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                <span className="text-xs font-mono text-zinc-300">target_snippet.py</span>
              </div>

              <button
                onClick={handleRunScan}
                disabled={scanning}
                className="px-3.5 py-1.5 rounded-md bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all font-mono disabled:opacity-50 hover:scale-105 active:scale-95"
              >
                {scanning ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Scanning AST...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-zinc-950" />
                    <span>Run AST Scan</span>
                  </>
                )}
              </button>
            </div>

            {/* Sample Selector Pills */}
            <div className="p-2.5 bg-zinc-900/60 border-b border-white/10 flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono text-zinc-400 self-center mr-1">Presets:</span>
              {SAMPLE_SNIPPETS.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                    selectedSample.id === sample.id
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5 hover:border-white/15'
                  }`}
                >
                  {sample.name}
                </button>
              ))}
            </div>

            {/* Code Input Area */}
            <div className="p-4 bg-zinc-950">
              <textarea
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
                rows={8}
                className="w-full bg-transparent font-mono text-xs sm:text-sm text-zinc-200 focus:outline-none leading-relaxed resize-none selection:bg-emerald-500/30"
                placeholder="# Type or paste Python code to scan for CWE vulnerabilities..."
              />
            </div>

            <div className="px-3.5 py-2 bg-zinc-950/90 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span>AST Parsing Engine • Python 3.12 AST</span>
              <span>Edit snippet or choose preset above</span>
            </div>
          </motion.div>

          {/* Right: Diagnostics Output */}
          <motion.div
            style={{ transformOrigin: '50% -40px', transformPerspective: 1000 }}
            initial={{ opacity: 0, rotateX: 10, y: 25 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-5 rounded-xl bg-zinc-900/70 border border-white/15 space-y-3.5 shadow-xl"
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <h3 className="font-mono text-xs font-semibold text-white">Diagnostics Report</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                Live AST Matcher
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
                  className="py-8 flex flex-col items-center justify-center text-center space-y-2"
                >
                  <RefreshCw className="w-5 h-5 text-zinc-400 animate-spin" />
                  <p className="font-mono text-xs text-zinc-300">Parsing AST nodes...</p>
                </motion.div>
              ) : scanResult && scanResult.length > 0 ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2.5 max-h-[290px] overflow-y-auto pr-1"
                >
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-red-950/30 border border-red-500/20 text-red-300 text-xs font-mono">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-red-400" />
                    <span>{scanResult.length} Security Finding(s)</span>
                  </div>

                  {scanResult.map((finding, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-zinc-950 border border-white/10 space-y-1 text-xs"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-red-500/15 text-red-400 font-mono font-bold text-[10px]">
                          {finding.cwe}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">Line {finding.line}</span>
                        <span className="px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300 font-mono text-[9px] uppercase">
                          {finding.severity}
                        </span>
                      </div>

                      <h4 className="font-medium text-white text-xs leading-snug">{finding.name}</h4>
                      
                      <div className="pt-1 border-t border-white/5 text-zinc-400 text-[11px] leading-relaxed">
                        <span className="text-zinc-200 font-mono">Remediation: </span>
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
                  className="py-6 flex flex-col items-center justify-center text-center space-y-2"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-emerald-300 text-xs">No Vulnerabilities Detected</h4>
                    <p className="text-[11px] text-zinc-500">AST matches clean code policy.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </WindowFrame>
    </section>
  );
}
