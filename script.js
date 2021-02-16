sendStartupEvents();
var events = [];

function sendStartupEvents() {
    this.sendMessage({
        type: "initialized",
        data: null
    }), this.sendMessage({
        type: "sizeChange",
        data: {
            height: 1
        }
    })
}

function sendMessage(e, s = "*") {
    window.parent !== window ? window.parent.postMessage(e, s) : window.Android ? window.Android.sendMessage(JSON.stringify(e)) : window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.upscaleHandler ? window.webkit.messageHandlers.upscaleHandler.postMessage(JSON.stringify(e)) : console.log("no send method detected")
}
window.addEventListener("message", (e => {
    events.push(e.data)
}), !1);