setInterval(() => {

    const message = "Nevermind";

    const area = document.querySelector('#main div[contenteditable="true"]');

    area.focus();
    document.execCommand('insertText', false, message)
    dispatchEvent(new Event('change', { bubbles: true }))

    setTimeout(() => {
        let btn = document.querySelector('#main [data-testid="send"]');

        btn.click();
    }, 100)

}, 500)
