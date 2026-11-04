// RepoGo local static launcher, 2026-11-05. GPL-3.0-or-later.
// Serves the upstream Vite build without installing a package manager or dev dependencies.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'dist');
const port = Number(process.env.PORT || 4824);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json' };
const server = http.createServer((req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname); }
  catch { res.writeHead(400); res.end(); return; }
  let target = path.resolve(root, `.${pathname}`);
  if (target !== root && !target.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  if (target === root || ['/', '/qrcode-generator', '/list-converter', '/text-statistics', '/text-stats', '/about'].includes(pathname)) target = path.join(root, 'index.html');
  fs.stat(target, (error, stat) => {
    if (error || !stat.isFile()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream', 'Content-Length': stat.size, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    if (req.method === 'HEAD') { res.end(); return; }
    fs.createReadStream(target).on('error', () => res.destroy()).pipe(res);
  });
});
server.listen(port, '127.0.0.1', () => console.log(`本地工具页面：http://127.0.0.1:${port}/`));
for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => server.close(() => process.exit(0)));
