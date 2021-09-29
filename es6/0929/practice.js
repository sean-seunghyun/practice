
let parseString = (strings, var1, var2) => {
    console.log(strings);
    console.log(var1, var2);
}
let replaceString = (strings, var1, var2) => {
    // console.log(strings);
    // console.log(var1, var2);
    console.log(`${strings[1]}${var1} ${strings[0]}${var2}`);
}
let replaceStr = (strings, var1, var2) => {
    console.log(strings, var1, var2);
    if(var1 === 0){
        var1 = '다팔렸어요';
    }
    console.log(`바지${var1} 양말${var2}`);
}


// const mother = '엄마';
// const father = '아빠';
// parseString`우리 가족은 ${mother}와 ${father}그리고 누나가 있습니다.`



let pants = 0;
let socks = 100;

replaceString`바지${pants} 양말${socks}`;
replaceStr`바지${pants} 양말${socks}`;