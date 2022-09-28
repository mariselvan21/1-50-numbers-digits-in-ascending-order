function ascendingNumber(num){
    var str=num.toString();
    var num1=[...str];
    var num2=[...num1].sort();
    if(num1.join()==num2.join()){
        return true;
    }
    else {
        return false;
    }
}
// console.log((ascendingNumber(21)));
var ascendingNumbers=[];
var index=0;
for(i=0;i<=50;i++){
    if(ascendingNumber(i)==true){
        ascendingNumbers[index]=i;
        index++;
    }
}
console.log(ascendingNumbers);