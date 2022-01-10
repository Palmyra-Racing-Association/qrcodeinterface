const QRCodeInterface = require('./qrCodeInterface');

test('encode and decode data match', async() => {
  const initial = '47-14580-2022';
  const generator = new QRCodeInterface();
  const qrImg = await generator.getQrDataUrl(initial);
  const decoded = await generator.decode(qrImg);
  console.log(decoded);
  expect(decoded).toBe(initial);
});

test('encode throws an error', async() => {
  const generator = new QRCodeInterface();
  try {
    const qrImg = await generator.getQrDataUrl('');    
  } catch (error) {
    expect(error).toBeDefined();
  }

});


test('decode throws an error', async() => {
  const generator = new QRCodeInterface();
  try {
    const decoded = await generator.decode('');  
  } catch (error) {
    expect(error).toBeDefined();
  }
});