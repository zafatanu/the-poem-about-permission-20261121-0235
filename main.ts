// Writes the poem "Thermos" byte-for-byte to <outputDir>/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from 'node:fs';

const POEM = `Thermos
At the night bus stop, a woman asks,
"Keep this warm till he comes?"
I cradle her thermos in both hands.
The bus sighs past.
Her son arrives; she gives him the cup,
then puts her cold hands in mine.
I thought I was keeping the tea.
She was keeping me there.`;

const outputDir = process.env.OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, POEM);
