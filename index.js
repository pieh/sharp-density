const sharp = require(`sharp`);

const input = `./full-set-up.jpg`;

(async () => {
  const metadata = await sharp(input).metadata();
  console.log(`Density:`, metadata.density);
})();
