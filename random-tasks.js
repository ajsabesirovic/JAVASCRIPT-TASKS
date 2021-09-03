lista = ['ryu','ken','chun-li','cammy','guile','sakura','sagat','juri']
lista.pop()
h = lista.length
lista.splice(h,0,'ajsa','aisa')
lista.forEach(element => {
    return `${element} (${element.indexOf()})`
});

