export function use(input = "") {
  const text = String(input);
  const len = text.length;

  return {
    scan: {
      len,
      phi: /Φ|φ/.test(text),
      ax: /AX|XA/.test(text),
      p: text.match(/\b(?:P4|P0|P1|P2|Pe)\b/g) ?? []
    },
    orbit: /φ∞/.test(text) ? "MA³"
      : /φ²/.test(text) ? "UC"
      : /φ/.test(text) ? "BIR"
      : /Φ/.test(text) ? "IKI"
      : null,
    operator: /\bXA\b/.test(text) ? "XA"
      : /\bAX\b/.test(text) ? "AX"
      : null,
    run: ["P4", "P0", "P1", "P2", "Pe"]
      .find(token => new RegExp(`\\\\b${token}\\\\b`).test(text)) ?? null,
    math: {
      X: len % 7,
      Y: len % 11,
      Z: len % 13,
      MASS: len * 3,
      POS: len % 12
    }
  };
}
