const btnEL = document.querySelector(".btn");

btnEL.addEventListener("mouseover",(event)=>{
   const y =  console.log(event.pageY - btnEL.offsetTop);
   const x =  console.log(event.pageX - btnEL.offsetTop);
   btnEL.style.setProperty("--xPos",x+"px");
   btnEL.style.setProperty("--yPos",x+"px");
})
