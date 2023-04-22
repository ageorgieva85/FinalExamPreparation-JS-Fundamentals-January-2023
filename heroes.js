function hiroes(input){
let num = Number(input.shift())
let firstPart = input.splice(0,num);
let secondPart = input.splice(0,input.length-1);
let heroes = {};

firstPart.forEach(element => {
    let[name,hp,mp] = element.split(" ");
     hp = Number(hp);
     mp = Number(mp);
    heroes[name] = {hp,mp}
    });

let coomandParser = {
    "CastSpell": CastSpell,
    "TakeDamage": TakeDamage,
    "Recharge": Recharge,
    "Heal": Heal

};
function CastSpell(heroes,heroName,neededMp,mana){
    let hero = heroes[heroName];
    neededMp = Number(neededMp);
    if(hero.mp >= neededMp){
        hero.mp -= neededMp;
        return `${heroName} has successfully cast ${mana} and now has ${hero.mp} MP!`;
    };
    return `${heroName} does not have enough MP to cast ${mana}!`;
};
function TakeDamage(heroes,heroName,damage,attacker){
    let hero = heroes[heroName];
    damage = Number(damage);
    hero.hp-=damage;
    if(hero.hp <= 0){
        delete heroes[heroName];
     return   `${heroName} has been killed by ${attacker}!`;   
};
    return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`;
};

function Recharge(heroes,heroName,amount){
    let hero = heroes[heroName];
    amount = Number(amount);
    let oldMp = hero.mp;
    hero.mp = Math.min(200, oldMp + amount);
    return `${heroName} recharged for ${hero.mp - oldMp} MP!`; 
};
function Heal(heroes,heroName,amount){
    let hero = heroes[heroName];
    amount = Number(amount);
    let oldHp = hero.hp;
    hero.hp = Math.min(100,oldHp + amount);
    return `${heroName} healed for ${hero.hp - oldHp} HP!`;
};

secondPart.forEach(element => {
    let[command,...tokens] = element.split(" - ");
    let func = coomandParser[command];
    console.log(func(heroes,...tokens));
});

for (const hero in heroes) {
    console.log(hero);
    console.log(` HP: ${heroes[hero]['hp']}`);
    console.log(` MP: ${heroes[hero]['mp']}`);
}

}
hiroes(["2",
"Solmyr 85 120",
"Kyrre 99 50",
"Heal - Solmyr - 10",
"Recharge - Solmyr - 50",
"TakeDamage - Kyrre - 66 - Orc",
"CastSpell - Kyrre - 15 - ViewEarth",
"End"])