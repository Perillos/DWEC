let textParent = prompt("Escribe un texto entre parentesis");

let res

if (textParent.indexOf("(") === -1) {
    
    res = "";

} else if (textParent.indexOf(")") === -1) {

    let posFist = textParent.indexOf("(") + 1;
    res = textParent.slice(posFist);

} else {

    let posFist = textParent.indexOf("(") + 1;
    let posSecon = textParent.indexOf(")");
    res = textParent.slice(posFist, posSecon);

}




// res = textParent.slice(posFist, posSecon);
// console.log(posSecon);

console.log(res);