const data = [
    {
        name: "Tanya Sinclair",
        position: "UX Engineer",
        review:
          '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”' ,
        imgUrl: "./images/image-tanya.jpg",
      },

  {
    name: "John Tarkpor",
    position: " Junior Front-end Developer",
    review:
      '“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”',
    imgUrl: "./images/image-john.jpg",
  },
];

const review = document.getElementById("review");
const cutomerImg = document.getElementById("customer-img");
const position = document.getElementById("position");
const name = document.getElementById("name");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

var currentPage = 0



function changeCustomer(cusName,cusReview,cusPosition,cusImgUrl){

        name.innerText = cusName
        review.innerText = cusReview
        position.innerText = cusPosition
        cutomerImg.src = cusImgUrl
}

prevBtn.addEventListener('click',()=>{
    if(currentPage===0 ){
        currentPage = data.length - 1
        const {name,position,review,imgUrl} = data[currentPage]
        changeCustomer(name,review,position,imgUrl)
        

    }
    else{
        currentPage--
        const {name,position,review,imgUrl} = data[currentPage]
        changeCustomer(name,review,position,imgUrl)

    }
    console.log(currentPage)
})

nextBtn.addEventListener('click',()=>{
    if(currentPage===data.length -1 ){
        currentPage = 0
        const {name,position,review,imgUrl} = data[currentPage]
        changeCustomer(name,review,position,imgUrl)
        

    }
    else{
        currentPage++
        const {name,position,review,imgUrl} = data[currentPage]
        changeCustomer(name,review,position,imgUrl)

    }
})