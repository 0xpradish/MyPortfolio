
let displayarr =[]

let changeslide=document.getElementById("nextbtn")

let displayItems1= `<p id="about-el" class="aboutclass">
          <span id="hello">Hello peeps 👋 , I'm</span><br>
        
           <span id="myname" >Pradish Pranam</span><br>
           <span id="whatido" >Full Stack Web Developer | Blockchain enthuist</span><br>
          
          <button id="contact-me-btn">Contact me</button>
          
        </p>`
displayarr.push(displayItems1)


let displayItems2= ` I am a third-year Artificial Intelligence student at Karpagam Academy of Higher Education.</br> In addition to my studies, I am very interested in blockchain technology and am constantly seeking opportunities to learn more about it.
// I play cricket and basketball too.`
displayarr.push(displayItems2)

let displayItems3= `<div class="projectsdisplay"><h1 id="the-grid">THE GRID</h1>    <h1 id="the-grid">SDG</h1><br> <br> </div>Publications <br> <br><p id="pub-el">Blockchain Technologies: Smart Contracts for Consumer Electronics Data Sharing and Secure Payment</p>`
displayarr.push(displayItems3)

let clicks=1

changeslide.addEventListener("click",function(){
    
         let aboutEl=document.getElementById("about-el")
         for(let i=0;i<displayarr.length;i++){
            if(clicks==i)
                aboutEl.innerHTML=displayarr[clicks]
         }
         

         
         clicks++
 })

let arrowptr= "<<--"
 if(clicks==2){
    changeslide.value = arrowptr
 }