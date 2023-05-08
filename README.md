# Whatsapp Spam From Console

### Table of Contents
 - [Overview](#overview)
 - [Usage](#usage)
 - [Stopping the Script](#stopping-the-script)
 - [Notes](#notes)
    


## Overview
  This script allows you to spam a WhatsApp chat from the browser console.   


## Usage

1. Go to [web.whatsapp.com](https://web.whatsapp.com)
2. Select a chat
3. Press <kbd>Ctrl+Shift+I</kbd> to open the browser console.
4. Go to the `Console` tab.
5. Paste the code below and press enter 


```javascript
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
            let btn = document.querySelector('#main [data-testid="send"]');
            btn.click();
        }, 100)
    }, interval)


} else {
    alert("Select a chat")
}
```
> ⚠️ interval should be greater than 500ms




## Stopping the Script
To stop the script, refresh the page or close the tab. 🙄


## Notes

 - This script is for educational purposes only.
 - Use of this script may violate WhatsApp's terms of service.
 - Use at your own risk.
