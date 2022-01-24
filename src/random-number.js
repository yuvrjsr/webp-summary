const randomNumber = (n)=>{
    const randomNumber = Math.floor(Math.random()*n)
    return randomNumber;    
}
// console.log(randomNumber(3));
module.exports = randomNumber;