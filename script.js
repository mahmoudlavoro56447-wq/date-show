let btnNo=document.querySelector(".no")
let btnYes=document.querySelector(".yes")
let button=document.querySelector("button")
let img=document.querySelector("img")
let h1=document.querySelector("h1")
let counter=0;
let listOfMoving=[
    {
        transelateX:"50px",
        transelateY:"75px",

    },
    {
        transelateX:"-50px",
        transelateY:"-50px",
    },
    {
        transelateX:"80px",
        transelateY:"100px",
    },
    {
        transelateX:"40px",
        transelateY:"-30px",
    },
    {
        transelateX:"40px",
        transelateY:"180px",
    },
]
console.log(btnYes)
console.log(btnNo)
function dateFunction(counter){
btnNo.onclick=()=>{
    if(counter==listOfMoving.length){
        btnNo.style.display="none"
    }else{
        
        button.style.cssText
        btnNo.style.cssText=`transform: translate(${listOfMoving[counter].transelateX},${listOfMoving[counter].transelateY})`
        // ;
        dateFunction(counter=counter+1)
    }

}
    console.log(counter)
}
dateFunction(0)
btnYes.onclick=()=>{
    h1.innerHTML="so we will go when i tell you ❤️"
    btnYes.style.display="none"
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeq__ZOiiiPQhCGsGO9S47co2jY4gpfOC_7P2ZBnZDMQ&s=10"
}
