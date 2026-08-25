// The deployable site is the prebuilt `dist/` directory; the hashed source
// images live at the repo root. This copies every image the built HTML asks
// for into `dist/images/`, so a page can never ship pointing at a file that
// isn't published.
import { readdir, readFile, copyFile, mkdir, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const imagesDir = join(dist, "images");

const exists = (p) => access(p).then(() => true, () => false);

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

const referenced = new Set();
for (const file of await htmlFiles(dist)) {
  const html = await readFile(file, "utf8");
  for (const [, name] of html.matchAll(
    /\/images\/([A-Za-z0-9_.-]+\.(?:png|jpe?g|webp|gif|svg|avif))/g,
  )) {
    referenced.add(name);
  }
}

await mkdir(imagesDir, { recursive: true });

let copied = 0;
const missing = [];
for (const name of [...referenced].sort()) {
  if (await exists(join(imagesDir, name))) continue;
  if (await exists(join(root, name))) {
    await copyFile(join(root, name), join(imagesDir, name));
    copied++;
  } else {
    missing.push(name);
  }
}

console.log(
  `Images: ${referenced.size} referenced, ${copied} copied into dist/images.`,
);

if (missing.length) {
  console.error(`Missing image sources:\n  ${missing.join("\n  ")}`);
  process.exit(1);
}
