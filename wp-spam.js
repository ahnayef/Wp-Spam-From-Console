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



const message = "Message"; //message

const area = document.querySelector('#main div[contenteditable="true"]');

if (area) {

    setInterval(() => {
        area.focus();
        document.execCommand('insertText', false, message)
        dispatchEvent(new Event('change', { bubbles: true }))
        setTimeout(() => {
            let btn = document.querySelector('#main [data-testid="send"]');
            btn.click();
        }, 100)
    }, 500); //after every 500ms


} else {
    alert("Select a chat")
}
