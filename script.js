let btnNo=document.querySelector(".no")
let btnYes=document.querySelector(".yes")
let button=document.querySelector("button")
let img=document.querySelector("img")
let h1=document.querySelector("h1")
let counter=0;
let listOfMoving=[
    {
        h1Text:"Wait... are you sure? 😮",
        transelateX:"50px",
        transelateY:"75px",
        src:"https://media.tenor.com/KJ-ArgsmXwgAAAAj/milk-mocha-confused-milk-mocha-bear.gif",
    },
    {
        h1Text:"Please think about it again! 🥺",
        transelateX:"-50px",
        transelateY:"-50px",
        src:"goma-sad.gif",
    },
    {
        h1Text:"Hey! That's not fair! 😤",
        transelateX:"80px",
        transelateY:"100px",
        src:"https://media1.tenor.com/m/CDNXg0h92fMAAAAd/heh-huh.gif",
    },
    {
        h1Text:"Look at these tears, please don't do this! 😭",
        transelateX:"40px",
        transelateY:"-30px",
        src:"https://media1.tenor.com/m/9MFCL1k1gacAAAAd/cat-crying.gif",
    },
]
console.log(btnYes)
console.log(btnNo)
function dateFunction(counter){
btnNo.onclick=()=>{
    if(counter==listOfMoving.length){
        btnNo.style.display="none"
        h1.innerHTML="Okay, that's it! Now you have no choice! 😈"
        img.src="https://media.tenor.com/wGMzikyMbeEAAAAj/flower-for-you-cat.gif"
    }else{
        
        button.style.cssText
        btnNo.style.cssText=`transform: translate(${listOfMoving[counter].transelateX},${listOfMoving[counter].transelateY})`
        img.src=listOfMoving[counter].src
        h1.innerHTML=listOfMoving[counter].h1Text        
        dateFunction(counter=counter+1)
    }

}
    console.log(counter)
}
dateFunction(0)
btnYes.onclick=()=>{
    h1.innerHTML="Yay! I knew you'd say yes! See you soon! ❤️🍹"
    btnYes.style.display="none"
    img.src="http://reactiongifs.me/cdn-cgi/imagedelivery/S36QsAbHn6yI9seDZ7V8aA/cf509b15-338c-427e-526f-06f16a827500/w=200,h=354"
}
