
let displayarr =[]

let changeslide=document.getElementById("nextbtn")

let displayItems1= `<p id="about-el" class="aboutclass">
          <span id="hello">Hello peeps 👋 , I'm</span><br>
        
           <span id="myname" >Pradish Pranam</span><br>
           <span id="whatido" >Full Stack Web Developer | Blockchain enthuist</span><br>
          
          <button id="contact-me-btn">Contact me</button>
          
        </p>`
displayarr.push(displayItems1)


let displayItems2= `<div class="aboutmeclass"> <p id="about-me">I am a third-year Artificial Intelligence student at Karpagam Academy of Higher Education. In addition to my studies, I am very interested in blockchain technology and am constantly seeking opportunities to learn more about it.
I play cricket and basketball too.</p> 
<ul>
<li>Java</li>
<li>C</li>
<li>Javascript</li>
<li>CSS</li>
<li>HTML</li>
<li>MySQL</li>
<li>Blockchain</li>
</ul>
</div>
`
displayarr.push(displayItems2)

let displayItems3= `<div class="myprojects">


<h1 id="gridtitle">THE GRID</h1>

<p id="gridinfo">The Grid is a metaverse built on the Polygon Blockchain that provides a virtual environment for business to list and sell their goods.
Using the grid,customers can explore products with VR glasses and purchase them using a web3wallet<br>
 <a id="mygridlink"href="www.google.com">click me to view grid</a>
</p>




</div>`
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