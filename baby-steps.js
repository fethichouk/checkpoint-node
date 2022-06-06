

const tab=process.argv.slice(2)

let sum = 0
for (let i = 0; i < tab.length; i++) {
    
     sum += Number(tab[i]);
    
}
console.log(sum)  