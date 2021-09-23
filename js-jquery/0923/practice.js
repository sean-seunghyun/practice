let products = [
    {id: 0, price: 20000, title: 'Blossom Dress'},
    {id: 1, price: 50000, title: 'Springfield Shirt'},
    {id: 2, price: 10000, title: 'Black Monastery'}
]

products = products.map(function (item){
    let obj = {};
    obj.id = item.id;
    obj.price = item.price;
    obj.dollor = item.price/10000;
    obj.title = item.title;
    return obj;
});

console.log(products);

const cardGroup = $('.card-group');

cardGroup.html('');

products.forEach(function (item){
    let card = `
    <div class="card">
        <img src="https://via.placeholder.com/600">
        <div class="card-body">
            <h5 class="title">${item.title}</h5>
            <p>가격 : <span class="price">${item.price}</span></p>
            <p>달러 : $<span class="dollor">${item.dollor}</span></p>
            <button class="btn btn-danger">주문하기</button>
        </div>
    </div>
`;

    cardGroup.append(card);
})

$('.sort-price').click(e => {
    products.sort(function (a,b){
        return a.price-b.price;
    })
    cardGroup.html('');

    products.forEach(function (item){
        let card = `
    <div class="card">
        <img src="https://via.placeholder.com/600">
        <div class="card-body">
            <h5 class="title">${item.title}</h5>
            <p>가격 : <span class="price">${item.price}</span></p>
            <p>달러 : $<span class="dollor">${item.dollor}</span></p>
            <button class="btn btn-danger">주문하기</button>
        </div>
    </div>
`;

        cardGroup.append(card);
    })

})

$('.filter').click(e => {
    let underProducts = products.filter(function (item){
        return item.price <= 30000;
    })
    console.log(underProducts);
    cardGroup.html('');

    underProducts.forEach(function (item){
        let card = `
    <div class="card">
        <img src="https://via.placeholder.com/600">
        <div class="card-body">
            <h5 class="title">${item.title}</h5>
            <p>가격 : <span class="price">${item.price}</span></p>
            <p>달러 : $<span class="dollor">${item.dollor}</span></p>
            <button class="btn btn-danger">주문하기</button>
        </div>
    </div>
`;

        cardGroup.append(card);
    })

})