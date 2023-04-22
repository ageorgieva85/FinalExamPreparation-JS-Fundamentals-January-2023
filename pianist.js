function pianist(input){
let newInput = input.slice();
let num = newInput.shift();
let firstPart = newInput.splice(0,num);
let secondPart = newInput.splice(0,(newInput.length - 1));
let store = {};
firstPart.forEach(element => {
    let[name,composer,key] = element.split("|");
        store[name] = {
            key,
            composer,
        }
});

let commandParser = {
    "Add": add,
    "Remove": remove,
    "ChangeKey": changeKey,

}
function add(store,name,composer,key){
    if(!store.hasOwnProperty(name)){
        store[name] = {
            composer,
            key,
        }
    return `${name} by ${composer} in ${key} added to the collection!`;
    }
    return `${name} is already in the collection!`;
}
function remove(store,name){
    if(store.hasOwnProperty(name)){
        delete store[name];
        return `Successfully removed ${name}!`;
    }
    return `Invalid operation! ${name} does not exist in the collection.`;
}

function changeKey(store,name,newKey){
    if(store.hasOwnProperty(name)){
        store[name]['key'] = newKey;
        return `Changed the key of ${name} to ${newKey}!`
    }
    return `Invalid operation! ${name} does not exist in the collection.`
}

secondPart.forEach(element => {
    let[command,...tokens] = element.split("|");

    let func = commandParser[command];
    console.log(func(store,...tokens));
});

for (const key in store) {
    console.log(`${key} -> Composer: ${store[key]['composer']}, Key: ${store[key]['key']}`);
        
    }
}


pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )
  console.log(`----------------------------------------`);
  pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )