const instractor = [
    { name: 'nahid', age: 34, position: 'seniour' },
    { name: 'sakib', age: 47, position: 'seniour' },
    { name: 'talha', age: 33, position: 'seniour' },
    { name: 'borun', age: 43, position: 'jeniour' },
]

const seniourins = instractor.filter(n => n.position === 'seniour')
console.log(seniourins);