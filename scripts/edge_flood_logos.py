#!/usr/bin/env python3
"""Remove only background connected to the image border (8-connected flood fill).

Cleans baked 'transparency' checkerboard and flat gray margins without reaching
enclosed light areas (e.g. white inside a seal) when a dark ring blocks the path.

  python3 scripts/edge_flood_logos.py

Dependencies: Pillow.
"""
from __future__ import annotations

import sys
import tempfile
from collections import deque
from pathlib import Path

from PIL import Image


def is_passable(r: int, g: int, b: int) -> bool:
    """True for near-white and light grays; false for colored/dark content."""
    m, mmax = min(r, g, b), max(r, g, b)
    if mmax - m > 50:
        return False
    avg = (r + g + b) / 3
    return avg >= 175


def edge_flood_transparent(path: Path, out: Path) -> None:
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    px = im.load()
    visited = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        for y in (0, h - 1):
            r, g, b, a = px[x, y]
            if a and is_passable(r, g, b):
                if not visited[y][x]:
                    visited[y][x] = True
                    q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            r, g, b, a = px[x, y]
            if a and is_passable(r, g, b):
                if not visited[y][x]:
                    visited[y][x] = True
                    q.append((x, y))

    while q:
        x, y = q.popleft()
        for dx in (-1, 0, 1):
            for dy in (-1, 0, 1):
                if dx == 0 and dy == 0:
                    continue
                nx, ny = x + dx, y + dy
                if nx < 0 or ny < 0 or nx >= w or ny >= h:
                    continue
                if visited[ny][nx]:
                    continue
                r, g, b, a = px[nx, ny]
                if not a or not is_passable(r, g, b):
                    continue
                visited[ny][nx] = True
                q.append((nx, ny))

    for y in range(h):
        for x in range(w):
            if visited[y][x]:
                px[x, y] = (0, 0, 0, 0)

    im.save(out, "PNG", optimize=True)
    print(f"Wrote {out} ({w}x{h})")


def main() -> None:
    base = Path(__file__).resolve().parent.parent / "public" / "logos"
    jobs: list[tuple[str, str]] = [
        ("egis.png", "egis.png"),
        ("up-gov.png", "up-gov.png"),
        ("meinhardt.png", "meinhardt.png"),
        ("tata-power.png", "tata-power.png"),
    ]
    for src_name, dest_name in jobs:
        p = base / src_name
        if not p.exists():
            print(f"Skip (missing): {p}", file=sys.stderr)
            continue
        out = base / dest_name
        if p.resolve() == out.resolve():
            with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as t:
                tmp = Path(t.name)
            try:
                edge_flood_transparent(p, tmp)
                tmp.replace(out)
            finally:
                if tmp.exists():
                    tmp.unlink()
        else:
            edge_flood_transparent(p, out)


if __name__ == "__main__":
    main()
