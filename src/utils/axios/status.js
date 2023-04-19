const statusFilter = (code) => {
    let message = ''
    switch (code) {
        case 400:
            message = 'Requestion error(400)'
            break
        case 401:
            message = 'Unauthorized(401)'
            break
        case 403:
            message = 'Access denied(403)'
        case 404:
            message = 'Not found(404)'
            break
        case 408:
            message = 'Timeout(408)'
            break
        case 500:
            message = 'Server error(500)'
            break
        case 501:
            message = 'Service error(501)'
            break
        case 502:
            message = 'Network error(502)'
            break
        case 504:
            message = 'Network timeout(504)'
            break
        case 505:
            message = 'Unsupported HTTP version(505)'
            break
        default:
            message = 'Connection error'
    }

    return `${message}.Please check the network or contact the administrator.`
}


export default {
    statusFilter
}