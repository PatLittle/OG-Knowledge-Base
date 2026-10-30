import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
const base = '/OG-Knowledge-Base/';
const root = resolve('dist');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.png':'image/png','.md':'text/plain; charset=utf-8','.xml':'application/xml'};
createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    if (url.pathname === '/') { response.writeHead(302, {Location:base}); response.end(); return; }
    if (!url.pathname.startsWith(base)) throw Error('Outside site');
    let file = resolve(root, decodeURIComponent(url.pathname.slice(base.length)));
    if (!file.startsWith(root + '/') && file !== root) throw Error('Outside site');
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    response.writeHead(200, {'Content-Type':types[extname(file)] || 'application/octet-stream'});
    response.end(await readFile(file));
  } catch {
    response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
    response.end(await readFile(resolve(root, '404.html')));
  }
}).listen(8000, '127.0.0.1', () => console.log('Preview: http://localhost:8000' + base));
