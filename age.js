var age = Number(prompt("What is your age?"));
if(age < 0) {
    console.log("Grow up!");
}

if(age === 21) {
    console.log("Come on in! Happy Birthday!");
}

if(age % 2 !==0) {
    console.log("Aren't you an odd one!");
}

if(age > 20 && age < 120) {
    console.log("Come on in!");
}

if(age %Math.sqrt(age) ===0) {
    console.log("You are square, get out!");
}