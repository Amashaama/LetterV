
const envelope =document.getElementById("envelope-container")

const letter=document.getElementById("letter-container");
const noBtn=document.querySelector(".no-btn");
const yesBtn=document.querySelector(".yes-btn");

const buttons= document.getElementById("letter-buttons");
const catImg= document.getElementById("cat");

envelope.addEventListener("click", ()=>{
    envelope.style.display= "none";
    letter.style.display="flex";

    setTimeout(()=>{
        document.querySelector(".letter-window").classList.add("open");
    },50);
})

let yesScale =1;

yesBtn.style.position="relative";
yesBtn.style.transformOrigin="center center"
yesBtn.style.transition="transform 0.3s ease"

noBtn.addEventListener("click", ()=>{

});

noBtn.addEventListener("mouseover",()=>{
  const btnRect = noBtn.getBoundingClientRect();
  const margin =10;

  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;


  const maxX =viewportWidth - btnRect.width -margin;
  const maxY = viewportHeight - btnRect.height -margin;
  const x =Math.max(margin,Math.random() * maxX);
  const y =Math.max(margin,Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.transform="none"

  noBtn.style.left=`${x}px`;
  noBtn.style.top=`${y}px`;

    yesScale +=2;


        yesBtn.style.position= "fixed";
        yesBtn.style.top="50%";
        yesBtn.style.left="50%";
        yesBtn.style.transform = `translate(-50%,-50%) scale(${yesScale})`;

});

yesBtn.addEventListener("click",()=>{
    document.querySelector(".letter-window").classList.add("final-text");
    document.getElementById("letter-title").innerHTML="YAY 💖";
    document.getElementById("final-text").style.display="block";
    document.getElementById("final-text").innerHTML="You just made my heart do backflips 🐱💘"
    catImg.src="resources/cat_dance.gif"
    buttons.style.display="none";
    document.getElementById("final-text").backgroundColor="rgba(55,240,240,0.5)";
})

document.addEventListener("mousemove",(e)=>{
    const heart = document.getElementById("cursor-heart");
    heart.style.left=`${e.clientX- 30}px`;
    heart.style.top=`${e.clientY-30}px`;
});
