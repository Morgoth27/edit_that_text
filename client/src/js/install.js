const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.heldPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

//  a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const eventPopup = window.heldPrompt;
    if (!eventPopup) { return }
    eventPopup.prompt();

    window.heldPrompt = undefined;
    // delete(heldPrompt)

    butInstall.classList.toggle('hidden', true);
});

// an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.heldPrompt = undefined;
    delete(heldPrompt)
});
