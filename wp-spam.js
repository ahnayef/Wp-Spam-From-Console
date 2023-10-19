// setInterval(() => {

//     const message = "Message"; //message

//     const area = document.querySelector('#main div[contenteditable="true"]');

//     if (area) {

//         area.focus();
//         document.execCommand('insertText', false, message)
//         dispatchEvent(new Event('change', { bubbles: true }))
//         setTimeout(() => {
//                 let btn = document.querySelector('#main [data-testid="send"]');
//                 btn.click();
//             }, 100)


//     }else if(!area){
//         alert("Select a chat")
//     }

// }, 500) //after every 500ms



const message = prompt("Enter your message:") //message
const interval = prompt("Enter interval in millisecond (min 500ms):") //interval

const area = document.querySelector('#main div[contenteditable="true"]');

if (area && message && interval) {

    if (interval < 500) {
        alert("Interval should be greater than 500ms")
        return;
    }

    setInterval(() => {
        area.focus();
        document.execCommand('insertText', false, message)
        dispatchEvent(new Event('change', { bubbles: true }))
        setTimeout(() => {
            let btn = document.querySelector('#main [data-icon="send"]');
            btn.click();
        }, 100)
    }, interval)


} else {
    alert("Select a chat")
}
