$(document).ready(function(){

     var onSearchdata = false;
     var home = document.getElementById("home")
     var trigram = document.getElementById('trigram')
     var sideNav = document.querySelector('.sideNav')
     var content = document.querySelector('.whole')
     var mainCont = document.querySelector('.mainContent')
     var homeCont = document.querySelector('.homeContent')
     var drop = document.querySelector('.drop')
     var content = document.querySelector(".content")
     var search = document.querySelector(".baricon")
     trigram.addEventListener('click',function(){
          sideNav.classList.toggle("sidenavMod");
          homeCont.classList.toggle("dnone");
          mainCont.classList.toggle("dgrid");
     })
     var Query = document.getElementById("search")
document.querySelector('#drop').addEventListener('click',function(){
     drop.classList.toggle("dgrid");
})
     const KEY = "AIzaSyAEwKgnL3EOj_T_Ee80T-Adm828tq3H2XA";
     var query = "Random";
     var URL = 'https://www.googleapis.com/youtube/v3/search'
     
     var options = 
         {
                 part : "snippet",
                 q : query,
                 maxResults : 48,
                 key : KEY
         }
         search.addEventListener('click',()=>{
          content.innerHTML=" ";
          options.q = Query.value;
          Query.value = ""
          onSearchdata = true
          searchCall()
         })
         Query.addEventListener("keyup",(e)=>{
          if(e.keyCode===13){
               content.innerHTML=" ";
              options.q = Query.value;
              Query.value = ""
              onSearchdata = true
              searchCall()
          }
     })
     call();
     function call(){
         $.get(URL,options,function(data){
         for (d of data.items){
          var div = document.createElement("div")
          div.id=d.id.videoId;
          var div1 = document.createElement("div");
          var div2 = document.createElement("div");
          var img2 = document.createElement("img");
          var p = document.createElement("p")
          var p1 = document.createElement("p")
          img2.src = "images/account_circle_black_24dp.svg"
          div2.appendChild(img2)
          div2.classList.add("b")
          var div3 = document.createElement("div");
          div1.appendChild(div2)
          div1.classList.add("a")
          div3.classList.add("c")
          div1.appendChild(div3)
          div.classList.add("videoContent")
          var image = document.createElement("img");
          image.id = "imageElement"
          image.alt = ":) its an image"
          image.src = d.snippet.thumbnails.high.url;
          div.appendChild(image)
          div.appendChild(div1)
          content.appendChild(div)
          var h5 = document.createElement("h6")
          h5.innerText = d.snippet.title; 
          div3.appendChild(h5)
          p.innerHTML = d.snippet.channelTitle;
          p1.innerHTML = d.snippet.publishTime.slice(0,10);
          div3.appendChild(p)
          div3.appendChild(p1)
          
         }
         var imm = document.querySelectorAll("#imageElement")
         for(i of imm){
          i.addEventListener('click',(e)=>{
                    content.innerHTML = "";
                   console.log(e.target.parentNode.id)
                   playVideo(e.target.parentNode.id)
          })
         }
         
         })
         function playVideo(id){
               var iframe = document.createElement("iframe");
               iframe.src = `https://www.youtube.com/embed/${id}`
               console.log(id);
               content.appendChild(iframe)

         }
        
     }
     
  function searchCall(){
            $.get(URL,options,function(data){
                 console.log(data)
         for (d of data.items){
       
       var div = document.createElement("div")
       var div1 = document.createElement("div")
       div1.id=d.id.videoId;
       var image = document.createElement("img");
       var image2 = document.createElement("img");
       var span = document.createElement('span')
       image2.src = "images/account_circle_black_24dp.svg";
       var h = document.createElement('h')
       var p = document.createElement('p')
       var p1 = document.createElement('p')
       var p2 = document.createElement('p')
       content.appendChild(div1)
       div1.classList.add("OnsearchContent")
       div.classList.add("OnsearchContentWhole")
       image.id = "imageElement"
       image.alt = ":) its an image"
       image.src = d.snippet.thumbnails.high.url;
       div1.appendChild(image)
       span.innerHTML = d.snippet.channelTitle
       h.innerHTML=d.snippet.title;
       p.innerHTML = d.snippet.publishTime.slice(0,10);
       p1.appendChild(image2);
       p1.appendChild(span);
       p2.innerHTML = d.snippet.description;
       div.appendChild(h)
       div.appendChild(p)
       div.appendChild(p1)
       div.appendChild(p2)
       div1.appendChild(div)
       
  }
  var imm = document.querySelectorAll("#imageElement")
         for(i of imm){
          i.addEventListener('click',(e)=>{
                    content.innerHTML = "";
                   console.log(e.target.parentNode.id)
                   playVideo(e.target.parentNode.id)
          })
         }

})
function playVideo(id){
     var iframe = document.createElement("iframe");
     iframe.src = `https://www.youtube.com/embed/${id}`
     console.log(id);
     content.appendChild(iframe)

}

  }
  home.addEventListener('click',()=>{
       content.innerHTML=" ";
     call();
})

window.addEventListener('scroll',()=>{
     if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){
          if(onSearchdata){
               searchCall()
          }
          else{
               call()
          }
      
     }
})
var button = document.querySelectorAll("#button")
for (b of button){
     b.addEventListener('click',(e)=>{
          content.innerHTML=" ";
          options.q = e.target.innerText
          call();
     })
}


     })
