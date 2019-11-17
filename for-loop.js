for(var i = -20; i < 10; i++) {
    console.log(i);
}

for(var i=10; i<=40; i++) {
    if(i % 2 === 0)
    console.log(i);
}

console.log("print all odd numbers between 300 and 400")

for(var i = 300; i <= 400; i++) {
    if(i % 2 !==0)
    console.log(i);
}

console.log("print all numbers divisible by 5 and 3 between 5 and 50");

for(var i = 5; i <= 50; i++) {
    if(i % 5 === 0 && i % 3 === 0)
    console.log(i);
}