function imitationGame2(input){

    let message = input.shift();

    let decrypted = {
        "ChangeAll":(message,substring,replacment)=>{
            // while (message.includes(substring)) {
            //    message = message.replace(substring, replacment);
            // }
            message = message.split(substring).join(replacment);
            return message;
       
        },
        "Move":(message,num)=>{
            num = Number(num);
            let firstPart = message.substring(0,num);
            let secondPart = message.substring(num);
            return message = secondPart+firstPart;

        },
        'Insert':(message,index,value)=>{
            index = Number(index);
            let firstPart = message.substring(0,index);
            let secondPart = message.substring(index);
            return message = firstPart + value + secondPart;
        },

    }

input.forEach(element => {
    let[command,...tokens] = element.split("|");
    let oldMessage = message;
    if(command !== "Decode"){
    message = decrypted[command](message,...tokens);
    
}else{
    console.log(`The decrypted message is: ${message}`);
}
});

}
imitationGame2([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
  'Insert|9|?',
  'Decode',
])

  