function multify(x, y){
    return x*y;
}
console.log(multify(2,5));
console.log(multify(6,3));


let result = (num) => num*num;
console.log(result(5));


let age =  Number(prompt('나이를 입력해 주세요')) 
if (age>=20) {
    console.log('성인');
} 
else if(age>=17){
    console.log('고등학생');
}
else if(age>=14){
    console.log('중학생');
}
else if(age>=8){
    console.log('초등학생');
}
else if(age>=0){
    console.log('유아');
}




