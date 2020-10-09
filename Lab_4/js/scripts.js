





let myFullName = "Cholpon Zamir"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
const myHeading = document.querySelector('.header');
myHeading.textContent = myFullName+("'s Lab 4");


// 2 Insert two paragraphs into the div with the class "content"



let paragraph1=document.createElement('p');

paragraph1.className=("content1");  //  Label each paragraph with a distinct class name

let paragraph2=document.createElement('p1');

paragraph2.className=("content1");

Cont=document.querySelector(".content")

Cont.append(paragraph1);

Cont.append(paragraph2);






// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
lengthOfMyName=(myFullName.length)-1;//delete the space between first and last
paragraph1.innerText="My name has "+lengthOfMyName+" characters";


// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

thirdCharacterOfMyName = myFullName.charAt(2);

paragraph2.innerText=thirdCharacterOfMyName.toUpperCase();
// 6 Add a new line to your second paragraph
//paragraph2.innerText="\n";
//paragraph2.after('\n LA');

paragraph2.innerText+="\n";

// 7 Return the final three characters of your last name to that new line
finalThreeLastName=myFullName.substr(-3);

paragraph2.innerText+=finalThreeLastName;
// 8 Substring your first and last name into two separate variables
var firstName= myFullName.substr(-5);
var lastName= myFullName.substr(0,7);

// 9 Add the total length of your first and last names together
totalNameCharacters=firstName.length+lastName.length;

// 10 Display that total next to your name in your header



myHeading.textContent += (" "+totalNameCharacters);
