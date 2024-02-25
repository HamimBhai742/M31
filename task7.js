const pepole = [
    { name: 'Mina', age: 34 },
    { name: 'Gita', age: 32 },
    { name: 'Tina', age: 14 },
    { name: 'Rina', age: 27 },
]

// const pepoleAge = pepole.reduce(n => n.age)
// console.log(pepoleAge);

function ageSum(pepoles){
    let ageSum=0;
    for(const pepole of pepoles){
        // console.log(pepole.age);
        const age=pepole.age
        ageSum=ageSum+age;
    
    }
    console.log(ageSum);
}
ageSum(pepole)