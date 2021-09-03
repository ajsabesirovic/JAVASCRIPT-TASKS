// function wordSplitter(string){
//     for(let i = 0; i<string.length; i++){
//         if (((string[i].charCodeAt()>=32 && string[i].charCodeAt()<=47)
//         ||(string[i].charCodeAt()>=58 && string[i].charCodeAt()<=63)
//         ||(string[i].charCodeAt()>=123 && string[i].charCodeAt()<=126)
//         ||(string[i].charCodeAt()>=91 && string[i].charCodeAt()<=95))&&(string[i]!=='.'&&string[i]!=='-')){
//             string = string.replace(string[i],' ')
//         }}
//         string = string.split(' ')
//         for(let i = 0; i<string.length; i++){
//             if(string[i]===''){
//             string.splice(i,1)
//         }
//     }
//     return string
//   }

// console.log(wordSplitter('alsd34:5:'))

// /[^0-9a-zA-Z.]/g

var1 = 'alsd3-.4:5:'

fnd = var1.match(/[^0-9a-zA-Z.-]/g)

console.log(fnd)