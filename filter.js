const friends = ['sakiba', 'rakibws', 'hasanssa', 'rokibul', 'tashin', 'ratul', 'komol', 'hossain', 'tuhin', 'khalid']

// const result = friends.filter(fr => fr.length % 2 === 1)
const result = friends.find(fr => fr.length % 2 === 0)
console.log(result);