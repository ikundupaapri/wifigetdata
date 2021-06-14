$(document).ready(() => {
  webSocket.onmessage = function onMessage(message) {

      const messageData = JSON.parse(message.data);
      console.log(messageData);
      console.log("hi this is my log");
  }
});


