import fs from 'fs';
import zlib from 'zlib';

function makePng(width: number, height: number, drawPixel: (x: number, y: number, w: number, h: number) => [number, number, number, number]): Buffer {
  const rowSize = 1 + width * 4;
  const raw = Buffer.alloc(height * rowSize);
  for (let y = 0; y < height; y++) {
    raw[y * rowSize] = 0; // Filter: None
    for (let x = 0; x < width; x++) {
      const offset = y * rowSize + 1 + x * 4;
      const [r, g, b, a] = drawPixel(x, y, width, height);
      raw[offset] = r;
      raw[offset + 1] = g;
      raw[offset + 2] = b;
      raw[offset + 3] = a;
    }
  }
  const compressed = zlib.deflateSync(raw);

  function crc32(buf: Buffer): number {
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) {
        c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      }
      table[i] = c;
    }
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function chunk(type: string, data: Buffer): Buffer {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const t = Buffer.from(type, 'ascii');
    const crc = crc32(Buffer.concat([t, data]));
    const c = Buffer.alloc(4);
    c.writeUInt32BE(crc, 0);
    return Buffer.concat([len, t, data, c]);
  }

  const header = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8-bit
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    header,
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

// Draw a crisp Suraksha Vault shield and lock icon on dark background
function drawSurakshaIcon(x: number, y: number, w: number, h: number, isMaskable = false): [number, number, number, number] {
  // Normalize coords -1 to 1
  const scale = isMaskable ? 0.75 : 0.88;
  const cx = w / 2;
  const cy = h / 2;
  const nx = ((x - cx) / (w / 2)) / scale;
  const ny = ((y - cy) / (h / 2)) / scale;

  // Background is deep dark navy #060A12
  const bgR = 6, bgG = 10, bgB = 18;

  // Check shield polygon / shape
  // Top: flat or arched between x in [-0.65, 0.65], y between -0.7 and 0.6
  const inShieldBounds = ny >= -0.75 && ny <= 0.85 && Math.abs(nx) <= 0.75;
  let inShield = false;
  if (inShieldBounds) {
    if (ny < 0) {
      inShield = Math.abs(nx) <= 0.72;
    } else {
      // Taper down to point (0, 0.82)
      const taperWidth = 0.72 * (1 - (ny / 0.85) * 0.95);
      inShield = Math.abs(nx) <= taperWidth;
    }
  }

  // Shield border glow
  const borderDist = Math.abs(nx);
  const isShieldBorder = inShield && (
    (ny > -0.75 && ny < -0.65) ||
    (ny < 0 && Math.abs(nx) >= 0.62) ||
    (ny >= 0 && Math.abs(nx) >= (0.72 * (1 - (ny / 0.85) * 0.95) - 0.1))
  );

  // Lock body & shackle
  // Shackle: arc between y: [-0.45, -0.15], x in [-0.25, 0.25]
  const inShackleArc = nx * nx + (ny + 0.15) * (ny + 0.15);
  const isShackle = inShackleArc <= 0.22 * 0.22 && inShackleArc >= 0.11 * 0.11 && ny <= -0.15;

  // Lock box: [-0.3, 0.3] x [-0.15, 0.35]
  const isLockBox = Math.abs(nx) <= 0.28 && ny >= -0.15 && ny <= 0.35;

  // Keyhole
  const inKeyCircle = (nx * nx + (ny - 0.05) * (ny - 0.05)) <= 0.06 * 0.06;
  const inKeySlot = Math.abs(nx) <= 0.035 && ny >= 0.05 && ny <= 0.22;
  const isKeyhole = inKeyCircle || inKeySlot;

  if (isKeyhole) {
    // Keyhole interior dark
    return [4, 8, 14, 255];
  }

  if (isLockBox || isShackle) {
    // Glowing neon green #00FF87
    return [0, 255, 135, 255];
  }

  if (isShieldBorder) {
    // Border neon green
    return [0, 230, 120, 255];
  }

  if (inShield) {
    // Inner shield dark emerald
    return [9, 25, 20, 255];
  }

  // Soft glowing outer aura around shield
  const distFromCenter = Math.sqrt(nx * nx + ny * ny);
  if (distFromCenter < 1.1) {
    const aura = Math.max(0, 1 - distFromCenter / 1.1) * 0.25;
    return [
      Math.round(bgR + aura * 0),
      Math.round(bgG + aura * 255),
      Math.round(bgB + aura * 135),
      255
    ];
  }

  return [bgR, bgG, bgB, 255];
}

console.log('Generating PNG assets...');

const icon192 = makePng(192, 192, (x, y, w, h) => drawSurakshaIcon(x, y, w, h, false));
fs.writeFileSync('public/pwa-192x192.png', icon192);

const icon512 = makePng(512, 512, (x, y, w, h) => drawSurakshaIcon(x, y, w, h, false));
fs.writeFileSync('public/pwa-512x512.png', icon512);

const iconMaskable = makePng(512, 512, (x, y, w, h) => drawSurakshaIcon(x, y, w, h, true));
fs.writeFileSync('public/pwa-maskable-512x512.png', iconMaskable);

const appleIcon = makePng(180, 180, (x, y, w, h) => drawSurakshaIcon(x, y, w, h, false));
fs.writeFileSync('public/apple-touch-icon.png', appleIcon);

console.log('PWA PNG assets successfully written to /public!');
