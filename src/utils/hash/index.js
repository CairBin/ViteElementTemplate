import crypto from 'crypto-js'

const Md5Encryption = (value) => {
    return crypto.MD5(value).toString()
}

const Sha256Encryption = (value) => {
    return crypto.SHA256(value).toString()
}


export default {
    Md5Encryption,
    Sha256Encryption
}