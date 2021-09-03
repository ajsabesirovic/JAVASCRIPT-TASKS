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



// function digital_root(n) {
//     n = n.toString()
//     sum = 0
//     for(let i = 0;i<n.length;i++){
//       sum += Number(n[i])
//     }
//     if(sum>9){
//       sum1 = 0
//       sum = sum.toString()
      
//       for(let i = 0;i<sum.length;i++){sum1 += Number(sum[i])}
//       if sum1
//       return sum1 }
//     else{return sum}
//   }

// console.log(digital_root(493193))


// function humanReadable(seconds) {
  
//     hh = Math.floor(seconds/3600)
//     mm = Math.floor((seconds-hh*3600)/60)
//     ss = Math.floor((seconds-(hh*3600)+(mm/60)))
//     if(hh<10){hh='0'+hh}
//     if(mm<10){mm='0'+mm}
//     if(ss<10){ss='0'+ss}

//     return `${hh}:${mm}:${ss}`
// }

// console.log(humanReadable(4))
// function findSq(br){
//     for(let i = 1;)
// }



lista = ['ryu','ken','chun-li','cammy','guile','sakura','sagat','juri']
lista.pop()
h = lista.length
lista.splice(h,0,'ajsa','aisa')
lista.forEach(element => {
    return `${element} (${element.indexOf()})`
});

