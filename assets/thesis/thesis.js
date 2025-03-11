setTimeout(() => {
    // Skip the post itself and load the thesis directly.
    window.location.replace("/");
    window.open("/assets/thesis/thesis.pdf", "_self");
}, 5000)