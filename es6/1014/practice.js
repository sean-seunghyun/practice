let 신체정보 = {
    body: {
        height: 190,
        weight: 70
    },
    size: ["상의 Large", "바지 30인치"],
};

// const { height, weight } = 신체정보.body;
// const [ topSize, bottomSize ] = 신체정보.size;
// console.log(height, weight, topSize, bottomSize);


let {
    body:{
    height,
    weight
},
size: [topSize, bottomSize]} = 신체정보;

console.log(height, weight, topSize, bottomSize);