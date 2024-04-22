const playerDiceNumber = Math.ceil(Math.random()*6);
const hostDiceNumber = Math.ceil(Math.random()*6);

console.log(`Pc got ${hostDiceNumber} and you got ${playerDiceNumber}`);

if(playerDiceNumber>hostDiceNumber){
    console.log("You Win!");
}else if(hostDiceNumber>playerDiceNumber){
    console.log("You Lost!");
}else{
    console.log("Please retry");
}