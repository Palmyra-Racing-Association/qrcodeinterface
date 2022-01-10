# qrcodeinterface
An interface for working with QR codes.  

This wraps a few different libraries, and eliminates the need to work with different libraries and functions.  It provides the simplicity of being able to do all of the interactions in one place.

## a note about examples
All of the examples in here have working code in the `index.js` file.

## examples

### encoding data as a QR code
You can encode data as a QR code using the following code:
```
const generator = new QRCodeInterface();
const qrImg = await generator.getQrDataUrl('47-14580-2022');
console.log(qrImg);
```

### decoding a base64 QR code to text data

```
const generator = new QRCodeInterface();
const qrImg = await generator.getQrDataUrl('47-14580-2022');
const decoded = await generator.decode(qrImg);
console.log(decoded);
```