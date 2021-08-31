function checkVal(val){
    if (val !== undefined && val !== null)return true
    else return false
}
var1 = [1,2,3]
var2 = [100,2,1,10]
var3 = []
for (let i =0; i<var2.length;i++){
    if (checkVal(var2[i])&&!var1.includes(var2[i])) {
        var3.push(var2[i])
    }
    if (checkVal(var1[i])&&!var2.includes(var1[i])){
        var3.push(var1[i])
    }
}
console.log(var3)

//BEGGINER SERIES #3 SUM OF NUMBERS
function getSum( a,b )
{
   if(a === b){return a}
  else{
     if(a<b){
       sum = 0
     for(let i=a;i<=b;i++){
       sum += i
     }
     return sum
     }
     else{
       
     sum = 0
     for(let i=b;i<=a;i++){
       sum += i
     }
     return sum
   }
     }
}