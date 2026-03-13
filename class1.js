
const sym1 = Symbol(4)
console.log(sym1);
const sym2 = Symbol(4)
console.log(sym2);
if(sym1 == sym2){
    console.log("sym1 and sym2 are equal");
}   else{
    console.log("sym1 and sym2 are not equal");
}