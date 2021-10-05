
function count([...str]){
    let obj = {};
    str.forEach(a => {
        if(! obj[a] > 0){
         obj[a] = 1;
        }
        else{
            obj[a] += 1;
        }
    })
    console.log(obj);
}

count('aacbbb');
