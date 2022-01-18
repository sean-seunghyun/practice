const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);

        // 보이기 시작하면 더이상 안보여줘도 됨
        if(entry.isIntersecting) observer.unobserve(entry.target);
    })
    console.log(entries);
    },{
    threshold: 0.5,
    // rootMargin: "100px" //shrink container, positive일때 미리 로딩을 해놓게 해놓음.
    }
)


const lastCardObserver = new IntersectionObserver(entries =>{
    const lastCard = entries[0];
    if(!lastCard.isIntersecting) return;
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector(".card:last-child"));
}, {
    rootMargin: "100px"
})


function loadNewCards(){
    for(let i=0; i<10; i++){
        const card = document.createElement("div");
        card.textContent = "New Card";
        card.classList.add("card");
        observer.observe(card);
        cardContainer.append(card);
    }
}

lastCardObserver.observe(document.querySelector(".card:last-child"))

cards.forEach(card =>{

observer.observe(card);
})
