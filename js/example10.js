var userAgent = navigator.userAgent;

const el = document.querySelector("#browserInfo");

if (userAgent.includes('Firefox/')) {
    el.innerHTML = `Firefox v${userAgent.split('Firefox/')[1]}`;
} else if (userAgent.includes('Edg/')) {
    el.innerHTML = `Edg v${userAgent.split('Edg/')[1]}`;
} else if (userAgent.includes('Chrome/')) {
    el.innerHTML = `Chrome v${userAgent.split('Chrome/')[1].split(' ')[0]}`;
}
