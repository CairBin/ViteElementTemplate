import { ElMessage } from "element-plus";

var isJSON = function (str) {

    if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        return true;
    } else {
        return false;
    }

}

const valEmail = (rule, value, callback) => {
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regEmail.test(value)) {
        callback()
    }
    else
        callback(new Error("Invalid email"))
}

const valURL = (rule, value, callback) => {
    const regURL = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
    if (regURL.test(value))
        callback()
    else
        callback(new Error("Invalid URL"))
}

const valPositiveInt = (rule, value, callback) => {
    const regN = /(^[1-9]\d*$)/
    if (regN.test(value))
        callback
    else
        callback(new Error('Invalid number'))
}

const valJSON = (rule, value, callback) => {
    if (isJSON(value))
        callback()
    else
        callback(new Error('Invalid contents'))
}


const checkFormFormat = (formRef, callback) => {
    if (!formRef) return
    formRef.validate((valid, fields) => {
        if (valid)
            callback()
        else
            ElMessage({ type: 'error', message: 'Format error' })
    })
}

export default {
    valEmail,
    valURL,
    valPositiveInt,
    valJSON,
    checkFormFormat
}