// Generates a simple coloured placeholder image as a data URI, so the site
// works without any image files. Replace these with real images by putting
// files in client/public/images and using paths like '/images/me-1.jpg'.
export function placeholder(label, color = '#4a90a4', width = 900, height = 520) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="${color}"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      font-family="Arial, Helvetica, sans-serif" font-size="40" fill="white">${label}</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
