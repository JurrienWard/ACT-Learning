#!/usr/bin/env python3
"""Mini server for ACT Genie with served Manim videos."""
from pathlib import Path
from http.server import HTTPServer, SimpleHTTPRequestHandler
import subprocess, os, urllib.parse

ANIM_DIR = Path("/home/jurrien/Projects/act-genie/animations")
PORT = 8900

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path.startswith("/video"):
            qs = urllib.parse.parse_qs(parsed.query)
            topic = qs.get("topic", [""])[0]
            src = ANIM_DIR / f"{topic}.mp4"
            if src.exists():
                self.send_response(200)
                self.send_header("Content-type", "video/mp4")
                self.send_header("Content-Length", str(src.stat().st_size))
                self.end_headers()
                with open(src, "rb") as f:
                    while True:
                        chunk = f.read(1024 * 1024)
                        if not chunk:
                            break
                        self.wfile.write(chunk)
                return
        super().do_GET()

    def log_message(self, format, *args):
        print(format % args)

if __name__ == "__main__":
    os.chdir(Path(__file__).parent)
    server = HTTPServer(("127.0.0.1", PORT), Handler)
    print(f"Serving ACT Genie on http://127.0.0.1:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
