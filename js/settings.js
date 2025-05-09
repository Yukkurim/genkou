
function getSetting(key) {
    return localStorage.getItem(key) || defaultSettings[key];
}

const defaultSettings = {
    pageSize: "400",
    useCookies: "true",
    showClock: "true"
};
