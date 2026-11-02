// Scans collection/<item>/ folders and writes data/products.json
// Each folder: photos (jpg/png/webp), videos (mp4/webm/mov), optional info.json
// Cover = cover.* if present, else first photo. Video poster = <name>.poster.jpg
import fs from 'node:fs'; import path from 'node:path';
const ROOT = 'collection', IMG = /\.(jpe?g|png|webp|avif)$/i, VID = /\.(mp4|webm|mov|m4v)$/i, POSTER = /\.poster\.(jpe?g|png|webp)$/i;
const MAX = 25 * 1024 * 1024; // Cloudflare Pages per-file limit
const nat = (a, b) => a.localeCompare(b, undefined, { numeric: true });
const url = (...p) => p.map(encodeURIComponent).join('/');
const out = [];
for (const dir of fs.existsSync(ROOT) ? fs.readdirSync(ROOT).sort(nat) : []) {
  const d = path.join(ROOT, dir); if (!fs.statSync(d).isDirectory()) continue;
  const files = fs.readdirSync(d).sort(nat);
  let info = {}; if (files.includes('info.json')) info = JSON.parse(fs.readFileSync(path.join(d, 'info.json'), 'utf8'));
  for (const f of files) if (fs.statSync(path.join(d, f)).size > MAX) console.warn(`WARNING: ${d}/${f} is over 25MB - Cloudflare Pages will reject it. Compress it.`);
  const imgs = files.filter(f => IMG.test(f) && !POSTER.test(f));
  const cover = imgs.find(f => /^cover\./i.test(f)) || imgs[0];
  const ordered = cover ? [cover, ...imgs.filter(f => f !== cover)] : [];
  const videos = files.filter(f => VID.test(f)).map(f => {
    const base = f.replace(/\.[^.]+$/, ''), poster = files.find(x => x.startsWith(base + '.poster.'));
    return { src: url(ROOT, dir, f), ...(poster && { poster: url(ROOT, dir, poster) }) };
  });
  out.push({ id: dir, name_en: dir, name_zh: dir, category: 'other', price: 0, desc_en: '', desc_zh: '', material: '', origin: '', year: '', condition: '', featured: false,
    ...info, image: ordered[0] ? url(ROOT, dir, ordered[0]) : '', images: ordered.map(f => url(ROOT, dir, f)), videos });
}
out.sort((a, b) => (a.order ?? 1e9) - (b.order ?? 1e9));
fs.mkdirSync('data', { recursive: true });
fs.writeFileSync('data/products.json', JSON.stringify(out, null, 1));
console.log(`Wrote data/products.json: ${out.length} items, ${out.reduce((n, p) => n + p.videos.length, 0)} videos`);
