const userEmail = prompt("Inserisci la tua mail: ");
const masterEmail = ["micheledong@gmail.com","mikedong@gmail.com","micdong@gmail.com"];
let granted = false;
for(i=0; i<masterEmail.length; i++){
    if(userEmail == masterEmail[i]){
        console.log("Access Granted! Congratz");
        granted = true;
    }
}if(granted == false){
    console.log("Access Denied!");
}