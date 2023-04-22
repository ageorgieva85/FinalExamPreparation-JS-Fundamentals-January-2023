function needForSpeed(input){
let n = input.shift();
let firstPart = input.splice(0,n);
let secondPart = input.splice(0,input.length - 1);
let store = {};
let commandParser = {
    'Drive': drive,
    'Refuel': refuel,
    'Revert': revert,
}
firstPart.forEach(element => {
    let[car,km,fuel] = element.split("|");
    km = Number(km);
    fuel = Number(fuel);
    store[car] = { km, fuel}
});
function drive(store,car,km,fuel){
    fuel = Number(fuel);
    km = Number(km)
    let myCar = store[car];
    if(myCar.fuel < fuel){
        return 'Not enough fuel to make that ride';
    };
    myCar.km += km;
    myCar.fuel -= fuel;
    if(myCar.km >= 100000){
        delete store[car]
return `${car} driven for ${km} kilometers. ${fuel} liters of fuel consumed.
Time to sell the ${car}!`;
    }
    return `${car} driven for ${km} kilometers. ${fuel} liters of fuel consumed.`;
};
function refuel(store,car,fuel){
    let myCar = store[car]
    let newFuel = Number(fuel);
            let oldFuel = myCar.fuel;
            myCar.fuel = Math.min(75,(newFuel+oldFuel));
            return `${car} refueled with ${myCar.fuel - oldFuel} liters`;
};
function revert(store,car,km){
    let myCar = store[car];
    let newKm = Number(km);
            myCar.km -= newKm;
            if(myCar.km < 10000){
                myCar.km = 10000;
                return myCar.km
        };
        return `${car} mileage decreased by ${newKm} kilometers.`
    };
secondPart.forEach(element => {
    let[command,...tokens] = element.split(" : ");
    let func = commandParser[command];
    console.log(func(store,...tokens));
});

for (const key in store) {
    console.log(`${key} -> Mileage: ${store[key]['km']} kms, Fuel in the tank: ${store[key]['fuel']} lt.`);
}


}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )