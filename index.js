// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
    return messages;
  }

  function countDown(number) {
    if (number < 0) {
      console.log("Positive");
      return;
    }
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }