// Writes the poem "Recipe Card" byte-for-byte to <outputDir>/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from 'node:fs';

const POEM = `Recipe Card
Mother asks me to read the faded card.
Her hands hover over the pot; mine reach
for salt before the line tells me.
"How much?" I ask.
She turns it over, blank side up,
and slides it through the flour.
I came to feed her.
She leaves the next line for my hand.`;

const outputDir = process.env.OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, POEM);
