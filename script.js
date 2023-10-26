//Definations for dictionary

const yes = {
    name: "yes", 
    partofspeech: "noun", 
    definitions: "Used to give an affirmative response." + "Used as a response to someone addressing one or otherwise trying to attract one's attention."
}

const panacea = {
    name: "panacea", 
    partofspeech: "noun", 
    definitions: "An answer or solution for all problems or difficulties."
}

const concatenation = {
    name: "concatenation", 
    partofspeech: "noun", 
    definitions: "A series of interconnected or interdependent things or events."
}

const saw = {
    name: "saw",
    partofspeech: "verb",
    definitions: "Cut (something) using a saw." + "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."
}

const found = {
    name: "found", 
    partofspeech: "adjective", 
    definitions: "Having been discovered by chance or unexpectedly." + "(of a ship) Equipped; Supplied."
}

const crane = {
    name: "crane", 
    partofspeech: "verb", 
    definitions: "Stretch out one's body or neck in order to see something." + "Move (a heavy object) with a crane."
}

const minute = {
    name: "minute",
    partofspeech: "noun", 
    definitions: "A period of time equal to sixty seconds or a sixtieth of an hour." + "A sixtieth of a degree of angular measurement (symbol: ʹ)"
}

const grotesque = {
    name: "grotesque", 
    partofspeech: "adjective", 
    definitions: "Comically or repulsively ugly or distorted."
}

const label = {
    name: "label", 
    partofspeech: "noun", 
    definitions: "A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."
}

const debacle = {
    name: "debacle", 
    partofspeech: "noun",
    definitions: "A sudden and ignominious failure; a fiasco."
}

let words = [yes, panacea, concatenation, saw, found, crane, minute, grotesque, label, debacle ]
console.log("DEBUG Current Word Bank: " + yes(name))