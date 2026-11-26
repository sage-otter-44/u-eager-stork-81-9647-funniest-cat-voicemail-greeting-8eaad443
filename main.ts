import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest voicemail greeting a cat would record.
// Built from parts so each beat can be tuned: the greeting, the
// concrete cat scene (knocking the wine glass off the table), then
// the twist at the very end — the message comes after the crash,
// and only if the cat feels like it.
const parts = [
  "You've reached Miso.",
  "I'm knocking your wine glass off the table —",
  "leave a message after the crash, if I feel like it.",
];
const greeting = parts.join(" ");

// Self-check: the gate allows 1–120 characters, one line, UTF-8.
if (greeting.length < 1 || greeting.length > 120) {
  throw new Error(`greeting is ${greeting.length} characters, must be 1–120`);
}
if (greeting.includes("\n")) {
  throw new Error("greeting must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), greeting, "utf8");
