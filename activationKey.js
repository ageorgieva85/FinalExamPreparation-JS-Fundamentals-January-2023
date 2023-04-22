function activationKeys(input){
let key = input.shift();

let command = input.shift();

while(command !== 'Generate'){
    let currentCommand = command.split('>>>')
    let toDo = currentCommand[0];

    switch(toDo){
        case 'Contains':
            let subs = currentCommand[1];
        if(key.includes(subs)){
            console.log(`${key} contains ${subs}`);
            break;
        }else{
            console.log("Substring not found!");
        }break;
    
        case "Flip":
            let action = currentCommand[1];
            let start = Number(currentCommand[2]);
            let end = Number(currentCommand[3]);
        if(action === "Upper"){
        let firstt = key.substring(start,end).toUpperCase();
        let secondd = key.substring(start,end);
        key = key.replace(secondd,firstt)
        console.log(key);
       break;
        }else{
        let firstt = key.substring(start,end).toLowerCase();
        let secondd = key.substring(start,end);
        key = key.replace(secondd,firstt);
        console.log(key);
        }
    break;
    case "Slice":
        let firstIndex = Number(currentCommand[1]);
        let secondIndex = Number(currentCommand[2]);
        let newK = key.substring(firstIndex,secondIndex);
        key = key.replace(newK,"")
        console.log(key);

}

    command = input.shift();
}
console.log(`Your activation key is: ${key}`);

}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])