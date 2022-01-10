const QRCodeInterface = require('./qrCodeInterface');

const generateQR = async text => {
  try {
    const generator = new QRCodeInterface();
    const qrImg = await generator.getQrDataUrl('47-14580-2022');
    console.log(qrImg);
    const decoded = await generator.decode(qrImg);
    console.log(decoded);
  } catch (err) {
    console.error(err)
  }
}

generateQR().then();