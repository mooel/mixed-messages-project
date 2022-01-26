     //create an object called message     

const message = {
     
     // declare the mixed messages arrays
     
     feeling: ["sad", "happy", "angry", "surprised"],
     toDo: ["relax", "sleep", "get fresh air", "take a deep breath"],
     toDont: ["fight", "be nervous", "drink too much"],
     messStorage: [],
     
     //pick random message from array

    returnRandMessage(array) {
         return array[Math.floor(Math.random() * array.length)]
        },
     
     //store those random messages in one array

    storMessages(randMessage) {
        this.messStorage.push(randMessage)
    }
}

     //display the finnal message in order

let randMessage = `You are ${message.returnRandMessage(message.feeling)}?
You should ${message.returnRandMessage(message.toDo)}!
But please do not ${message.returnRandMessage(message.toDont)}.`

     //log the messages

console.log(randMessage);

     //store the messages

message.storMessages(randMessage);

