
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

let projectarr=[]


let displayItems3= `<div class="myprojects">


<h1 id="gridtitle">THE GRID</h1>
<div>
<p id="gridinfo">The Grid is a metaverse built on the Polygon Blockchain that provides a virtual environment for business to list and sell their goods.
Using the grid,customers can explore products with VR glasses and purchase them using a web3wallet<br>
 
</p>

<a id="mygridlink"href="www.google.com">view grid</a>
 

</div>




</div>`

displayarr.push(displayItems3)



let displayItems4= `<div id="projects" class="myprojects">


<h1 id="gridtitle">THE SDG</h1>
<div>
<p id="gridinfo">The Grid is a metaverse built on the Polygon Blockchain that provides a virtual environment for business to list and sell their goods.
Using the grid,customers can explore products with VR glasses and purchase them using a web3wallet<br>
</p>
<a id="mygridlink"href="www.google.com">view sdg</a>
</div>
</div>`

let displayItems5= `<div id="projects" class="myprojects">


<h1 id="gridtitle">eDchain</h1>
<div>
<p id="gridinfo">The Grid is a metaverse built on the Polygon Blockchain that provides a virtual environment for business to list and sell their goods.
Using the grid,customers can explore products with VR glasses and purchase them using a web3wallet<br>
</p>
<a id="mygridlink"href="www.google.com">view eDchain</a>
</div>
</div>`


displayarr.push(displayItems5)

let displayItems6= `<div id="projects" class="myprojects">


<h1 id="gridtitle">Publications</h1>
<div>
<p id="gridinfo">Blockchain Technologies: Smart Contracts for Consumer Electronics Data Sharing and Secure Payment<br>
</p>
<a id="mygridlink"href="www.google.com">view paper</a>
</div>
</div>`


displayarr.push(displayItems6)

let clicks=1


changeslide.addEventListener("click",function(){
    
         let aboutEl=document.getElementById("about-el")
         for(let i=0;i<displayarr.length;i++){
            
            if(clicks==i)
                aboutEl.innerHTML=displayarr[clicks]
         }
         

         
         clicks++
 })


