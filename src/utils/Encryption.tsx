import CryptoJS from "crypto-js";

export function encryptData(data, secretKey) {
    // Convert the data to a string (if it's not already)
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
}

export function decryptData(encryptedData, secretKey) {
    var bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
}
