import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Terminal, Copy, Check, Play, AlertTriangle, CheckCircle, ExternalLink, RefreshCw, Sparkles, Cpu, Bug } from 'lucide-react';
import { FaGithub, FaPython } from 'react-icons/fa';

const SAMPLE_SNIPPETS = [
  {
    id: 'eval',
    name: 'Arbitrary Eval Injection',
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
    name: 'Raw SQL Interpolation',
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
    name: 'Hardcoded Credentials',
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
    }, 350);
  };

  const copyPipCommand = () => {
    navigator.clipboard.writeText('pip install vigilo');
    setCopiedPip(true);
    setTimeout(() => setCopiedPip(false), 2000);
  };

  return (
    <section id="vigilo-showcase" className="py-8 sm:py-14 px-4 sm:px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-cyan-500/20 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full cortex-pill text-emerald-300 text-xs font-mono uppercase tracking-wider mb-2 border border-emerald-500/30 bg-emerald-500/10">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>PyPI Security Package // Engine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Vigilo AST Static Security Scanner
          </h2>
          <p className="text-zinc-400 mt-1 text-xs sm:text-sm font-mono">
            Realtime Abstract Syntax Tree (AST) analysis engine mapping CWE vulnerabilities inside the machine.
          </p>
        </div>

        {/* Quick Install Bar */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full cortex-pill font-mono text-xs text-cyan-300 border border-cyan-500/30">
            <span>pip install vigilo</span>
            <button
              onClick={copyPipCommand}
              className="p-1 rounded text-zinc-400 hover:text-cyan-300 transition-colors"
              title="Copy install command"
            >
              {copiedPip ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <a
            href="https://pypi.org/project/vigilo/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full cortex-card text-zinc-400 hover:text-emerald-300 transition-all text-xs"
            title="View on PyPI"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://github.com/Sanjiv215/VIGILO-Python-Package"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full cortex-card text-zinc-400 hover:text-cyan-300 transition-all text-xs"
            title="View GitHub Repository"
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Interactive Scanner Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* Left: Code Editor & Samples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 cortex-card rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#070b16]/90 relative"
        >
          {/* HUD Corner Brackets */}
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          {/* Header */}
          <div className="bg-[#050813] px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-300 font-semibold">target_security_test.py</span>
            </div>

            <button
              onClick={handleRunScan}
              disabled={scanning}
              className="px-4 py-1.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs flex items-center gap-1.5 shadow-[0_0_18px_rgba(0,255,157,0.4)] transition-all font-mono disabled:opacity-50"
            >
              {scanning ? (
                <>
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Scanning...</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-black" />
                  <span>Run AST Scan</span>
                </>
              )}
            </button>
          </div>

          {/* Sample Selector Pills */}
          <div className="p-3 bg-white/[0.02] border-b border-white/5 flex flex-wrap gap-1.5">
            <span className="text-[10px] font-mono text-zinc-500 self-center mr-1">Presets:</span>
            {SAMPLE_SNIPPETS.map((sample) => (
              <button
                key={sample.id}
                onClick={() => handleSelectSample(sample)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                  selectedSample.id === sample.id
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold shadow-[0_0_10px_rgba(0,255,157,0.2)]'
                    : 'cortex-pill text-zinc-400 hover:text-zinc-200 border-white/10'
                }`}
              >
                {sample.name}
              </button>
            ))}
          </div>

          {/* Code Input Area */}
          <div className="p-4 sm:p-5 bg-[#030610]/80">
            <textarea
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
              rows={7}
              className="w-full bg-transparent font-mono text-xs sm:text-sm text-cyan-200 focus:outline-none leading-relaxed resize-none selection:bg-cyan-500/30"
              placeholder="# Enter Python code to scan..."
            />
          </div>

          <div className="px-4 py-2 bg-[#050813] border-t border-cyan-500/15 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-cyan-300/80"><Cpu className="w-3 h-3 text-cyan-400" /> AST Python 3.12 Rules</span>
            <span className="text-emerald-400/80">Realtime AST Diagnostic</span>
          </div>
        </motion.div>

        {/* Right: Diagnostics Output */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 p-5 sm:p-6 cortex-card rounded-3xl border border-cyan-500/20 space-y-4 bg-[#070b16]/90 relative"
        >
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Diagnostics Output</h3>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full cortex-pill text-emerald-300 font-bold border border-emerald-500/30">
              Live AST Telemetry
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
              >\n                <RefreshCw className="w-5 h-5 text-cyan-400 animate-spin" />
                <p className="font-mono text-xs text-cyan-300">Parsing AST syntax tree nodes...</p>
              </motion.div>
            ) : scanResult && scanResult.length > 0 ? (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3 max-h-[290px] overflow-y-auto pr-1"
              >
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono shadow-[0_0_12px_rgba(239,68,68,0.15)]">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-red-400" />
                  <span>{scanResult.length} Vulnerability Detected</span>
                </div>

                {scanResult.map((finding, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#040711]/90 border border-red-500/20 space-y-1.5 text-xs font-mono"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono font-bold text-[10px]">
                        {finding.cwe}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">Line {finding.line}</span>
                      <span className="px-2 py-0.5 rounded cortex-pill text-zinc-300 font-mono text-[9px] uppercase border-white/10">
                        {finding.severity}
                      </span>
                    </div>

                    <h4 className="font-semibold text-white text-xs leading-snug">{finding.name}</h4>
                    
                    <div className="pt-1.5 border-t border-white/5 text-zinc-400 text-[11px] leading-relaxed">
                      <span className="text-cyan-400 font-mono">Remediation: </span>
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
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(0,255,157,0.3)]">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-300 text-xs font-mono">0 Vulnerabilities Detected</h4>
                  <p className="text-[11px] text-zinc-500 font-mono">AST matches clean security policy.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
