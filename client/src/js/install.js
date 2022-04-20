const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

//  a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const eventPopup = window.deferredPrompt;
    if (!eventPopup) { return }
    eventPopup.prompt();

    window.deferredPrompt = null;
    // delete(deferredPrompt)

    butInstall.classList.toggle('hidden', true);
});

// an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    // delete(deferredPrompt)
});
