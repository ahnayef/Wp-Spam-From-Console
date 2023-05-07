# Whatsapp Spam From Console

### Table of Contents
 - [Overview](#overview)
 - [Usage](#usage)
 - [Customization](#customization)
   - [Changing the Message](#changing-the-message)
   - [Adjusting the Time Interval](#adjusting-the-time-interval)
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
const message = "Message"; //your message

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
```
> ⚠️ By default, the script will send the message every 500 milliseconds.



## Customization
You can customize the script by changing the message and the time interval between messages.

### Changing the Message
To change the message, change the value of `Message` in [line 1](README.md#28) to any other value.
```javascript
const message = "Your new message"; //change this message
```

### Adjusting the Time Interval
To change the time interval, change the value of `500` in [line 13](#L41) to any other value in milliseconds.

```javascript
}, 500); //change the time interval here
```

## Stopping the Script
To stop the script, refresh the page or close the tab. 🙄


## Notes

 - This script is for educational purposes only.
 - Use of this script may violate WhatsApp's terms of service.
 - Use at your own risk.
