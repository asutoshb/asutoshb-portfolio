// DEMO ONLY - insecure patterns that Semgrep flags (do NOT ship this)

// 1. Code injection via eval() - reads untrusted input from the URL
function runFromHash() {
  return eval(location.hash.slice(1)); // semgrep: detect-eval-with-expression
}

// 2. Command injection - untrusted input passed to a shell
const { exec } = require("child_process");
function ping(host) {
  exec("ping -c 1 " + host); // semgrep: detect-child-process
}

// 3. XSS - assigning untrusted input to innerHTML
function render(userInput) {
  document.getElementById("out").innerHTML = userInput; // semgrep: insecure-innerhtml
}

// 4. Weak crypto - MD5 for hashing
const crypto = require("crypto");
function weakHash(data) {
  return crypto.createHash("md5").update(data).digest("hex"); // semgrep: weak-hash
}

module.exports = { runFromHash, ping, render, weakHash };
