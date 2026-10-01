const h = require('http');
const f = require('fs');
const p = require('path');
h.createServer((q, s) => {
  let u = decodeURIComponent(q.url.split('?')[0]);
  if (u === '/') u = '/index.html';
  const fp = p.join(__dirname, u);
  f.readFile(fp, (e, d) => {
    if (e) { s.writeHead(404); s.end('nf'); return; }
    const m = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml' };
    s.writeHead(200, { 'Content-Type': m[p.extname(fp)] || 'application/octet-stream' });
    s.end(d);
  });
}).listen(8123, () => console.log('server up on 8123'));
