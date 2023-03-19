function hideNotification() {
    document.querySelector('#notification').style.display = 'none';
}

window.addEventListener('load', () => {
    if (document.querySelector('#notification')) {
        setTimeout(() => {
            hideNotification();
        }, 2500);
    }
});