// function checkVal(val){
//     if (val !== undefined && val !== null)return true
//     else return false
// }
// var1 = [1,2,3]
// var2 = [100,2,1,10]
// var3 = []
// for (let i =0; i<var2.length;i++){
//     if (checkVal(var2[i])&&!var1.includes(var2[i])) {
//         var3.push(var2[i])
//     }
//     if (checkVal(var1[i])&&!var2.includes(var1[i])){
//         var3.push(var1[i])
//     }
// }
// console.log(var3)



lista = ['ryu','ken','chun-li','cammy','guile','sakura','sagat','juri']
lista.pop()
h = lista.length
lista.splice(h,0,'ajsa','aisa')
lista.forEach(element => {
    return `${element} (${element.indexOf()})`
});

