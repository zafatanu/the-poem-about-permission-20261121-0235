// Writes the poem "Calendar" byte-for-byte to <outputDir>/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from 'node:fs';

const POEM = `Calendar
"Clear Friday," I tell my agent. "I can't face him."
It opens my brother's invite, then waits.
"Decline?" it asks.
I watch the hour I had kept for anger.
"Move it to the station cafe."
The pin moves. His name stays.
I still have to meet him.`;

const outputDir = process.env.OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, POEM);
