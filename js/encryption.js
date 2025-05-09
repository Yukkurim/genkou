
function encrypt(text) {
    return btoa(unescape(encodeURIComponent(text)));
}

function decrypt(encrypted) {
    return decodeURIComponent(escape(atob(encrypted)));
}
