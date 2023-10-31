//Definations for dictionary
const yes = {
    name: "yes", 
    partofspeech: "noun", 
    definitions: "1. Used to give an affirmative response. Used as a response to someone addressing one or otherwise trying to attract one's attention.",
    definition2: "2. Not Found"
}

const panacea = {
    name: "panacea", 
    partofspeech: "noun", 
    definitions: "1. An answer or solution for all problems or difficulties.", 
    definition2: "2. Not Found"
}

const concatenation = {
    name: "concatenation", 
    partofspeech: "noun", 
    definitions: "1. A series of interconnected or interdependent things or events.",
    definition2: "2. Not Found"
}

const saw = {
    name: "saw",
    partofspeech: "verb",
    definitions: "1. Cut (something) using a saw. Make rapid to-and-fro motions in cutting something or in playing a stringed instrument.", 
    definition2: "2. Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."
}

const found = {
    name: "found", 
    partofspeech: "adjective", 
    definitions: "1. Having been discovered by chance or unexpectedly. (of a ship) Equipped; Supplied.", 
    definition2: "2. (of a ship) Equipped; Supplied."
}

const crane = {
    name: "crane", 
    partofspeech: "verb", 
    definitions: "1. Stretch out one's body or neck in order to see something. ", 
    definition2: "2. Move (a heavy object) with a crane."
}

const minute = {
    name: "minute",
    partofspeech: "noun", 
    definitions: "1. A period of time equal to sixty seconds or a sixtieth of an hour.", 
    definition2: "2. A sixtieth of a degree of angular measurement (symbol: ')"
}

const grotesque = {
    name: "grotesque", 
    partofspeech: "adjective", 
    definitions: "1. Comically or repulsively ugly or distorted.", 
    definition2: "2. Not Found"
}

const label = {
    name: "label", 
    partofspeech: "noun", 
    definitions: "1. A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it.", 
    definition2: "2. Not Found"
}

const debacle = {
    name: "debacle", 
    partofspeech: "noun",
    definitions: "1. A sudden and ignominious failure; a fiasco.", 
    definition2: "2. Not Found"

}

// Array of definations
const obj_list = [yes, panacea, concatenation, saw, found, crane, minute, grotesque, debacle];


//Declared items for the projects
const input = document.getElementById("search");
const searchButton = document.getElementById("searchbtn");
const def = document.getElementById("def");
const def2 = document.getElementById("def2");
const word = document.getElementById("name");
const part = document.getElementById("part");
const fail = document.getElementById("fail");
const div = document.getElementById("results");
//Set the display 
let display = false 



//Search Functions
function Search() {
   
    serTerm = input.value; 
    //Takes in the uers input
    if (display) {
        word.innerText = "Name:  "
        part.innerText = "Part:  "
        def.innerText = "  "
        def2.innerText = "  "
    }
    //Reset when you search a new word and clear the screen 
    
    for(var a = 0; a < obj_list.length; a++){ // Checks the array to find word 
        if(obj_list[a].name  === serTerm.toLowerCase()){ // Accepts both upper and lower case search
            word.innerText = "Name: " + obj_list[a].name;
            part.innerText = "Part: " + obj_list[a].partofspeech;
            def.innerText =  "  " + obj_list[a].definitions;
            def2.innerText = "  " + obj_list[a].definition2;
            //Shows the user the results
            display = true;
            return;
        } 
        // Checks word that user enter and checks array and defintions. If word is found will output to screen
     
    }
    word.innerText  +=  " Word is not in dictionary";
    part.innerText  +=  " Word is not in dictionary";
    def.innerText  +=  " Word is not in dictionary";
    def2.innerText  +=  " Word is not in dictionary";
    //Alert the user if word they search is not found in Dictionary
    word.style.fontWeight = 200;
    part.style.fontWeight = 200;
    def.style.fontWeight = 200;
    def2.style.fontWeight = 200;
    //Sets the fontweight to 200 when it outputs results to user

}


//Make search button work when user clicks on it. 
searchButton.addEventListener("click", Search)