
const message = {
     feeling: ["sad", "happy", "angry", "surprised"],
     toDo: ["relax", "sleep", "get fresh air", "take a deep breath"],
     toDont: ["fight", "be nervous", "drink too much"],
     messStorage: [],

    returnRandMessage(array) {
         return array[Math.floor(Math.random() * array.length)]
        },

    storMessages(randMessage) {
        this.messStorage.push(randMessage)
    }
}

let randMessage = `You are ${message.returnRandMessage(message.feeling)}?
You should ${message.returnRandMessage(message.toDo)}!
But please do not ${message.returnRandMessage(message.toDont)}.`

console.log(randMessage);
message.storMessages(randMessage);

