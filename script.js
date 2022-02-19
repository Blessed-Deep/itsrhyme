window.addEventListener('DOMContentLoaded',() => { 

    
	   
    const pentrigger = document.getElementById("trigger");
    const searchicostick = document.getElementById("searchicostick");
    const searchICO = document.getElementById("searchICO");
    const stick1 = document.getElementById("stick1");
    const stick2 = document.getElementById("stick2");
    const RadioBtn = document.getElementById("RadioBtn");
    const OnOffICO = document.getElementById("OnOffICO");              
    const searchArea = document.getElementById("searchArea"); 
    const EditText = document.getElementById('EditText');
    
    const triggerOnOff =function(){ 
        if(pentrigger.classList.contains('on')){                        
                OffICO();
        } else {                        
            OnICO();
        }
    }
    pentrigger.addEventListener('click',triggerOnOff)
   
    const OffICO =function(){
        pentrigger.classList.remove("on");                        
        pentrigger.classList.toggle("off");

        searchicostick.classList.remove("icostickOn");
        searchicostick.classList.toggle("icostickOff");

        searchICO.classList.remove("searchicoOn");
        searchICO.classList.toggle("searchicoOff");

        stick1.classList.remove("s1AniOn");
        stick1.classList.toggle("s1AniOff");

        stick2.classList.remove("s2AniOn");
        stick2.classList.toggle("s2AniOff");

        RadioBtn.classList.remove("radioOn");
        RadioBtn.classList.toggle("radioOff");

        searchArea.classList.remove("searchAreaOn");
        searchArea.classList.toggle("searchAreaOff");

        EditText.classList.remove("EditTextOn");
        EditText.classList.toggle("EditTextOff");
    }

    const OnICO =function(){ 
            pentrigger.classList.remove("off");
            pentrigger.classList.toggle("on");

            searchicostick.classList.remove("icostickOff");
            searchicostick.classList.toggle("icostickOn");
           
            searchICO.classList.remove("searchicoOff");
            searchICO.classList.toggle("searchicoOn");

            stick1.classList.remove("s1AniOff");
            stick1.classList.toggle("s1AniOn");

            stick2.classList.remove("s2AniOff");
            stick2.classList.toggle("s2AniOn");

            RadioBtn.classList.remove("radioOff");
            RadioBtn.classList.toggle("radioOn");   

            searchArea.classList.remove("searchAreaOff");
            searchArea.classList.toggle("searchAreaOn");

            EditText.classList.remove("EditTextOff");
            EditText.classList.toggle("EditTextOn");
                       
    }
    OnOffICO.addEventListener('click', OnICO);
    
   
    (function(){
        var c = 0; 
        window.onresize = calWindowSize;
        window.onload = calWindowSize;
        function calWindowSize(){
            var myWidth = screen.width;
            
  
            if((myWidth>800) && c==0){
                c=1;
                OnICO();
            } else if(myWidth<=800 && c==1){
                c=0;
               OffICO();
            }
        }
    })();

    const grid = document.getElementById("grid");
    const list = document.getElementById("list");
    const cards = document.getElementById("cards");
    grid.addEventListener('click', function(){
        if(screen.width<=600){
            cards.setAttribute("style","grid-template-columns: repeat(2, 1fr);");
        } else{
            cards.setAttribute("style","grid-template-columns: repeat(4, 1fr);");
        }
        
    })
    list.addEventListener('click', function(){       
        cards.setAttribute("style","grid-template-columns: 1fr;");
    })
    
    window.onresize = function(){
        cards.removeAttribute("style","grid-template-columns");
    }


    // Load More Show Less
    const loadmore = document.getElementById("loadmore");
    const showless = document.getElementById("showless");
    
    let currentItems = 3;

    function countDiv(){
        const sizediv = document.querySelectorAll('.cards .cards-inner').length;
        const elementList = [...document.querySelectorAll('.cards .cards-inner')];
        let count=0;
        for (let i = 3; i <sizediv; i++) {
            if (elementList[i].style.display == 'block') {
                count=count+1;
            }
        }
        return count;
    }



    loadmore.addEventListener('click', (e) => {
        let count =countDiv();
        const sizediv = document.querySelectorAll('.cards .cards-inner').length;
        if(sizediv-3 == count+3){
            loadmore.style.color="grey";
        }
        const elementList = [...document.querySelectorAll('.cards .cards-inner')];
        for (let i = currentItems+count; i < currentItems+count + 3; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
       

    })
    showless.addEventListener('click', (e) => {
        const count =countDiv();        
        const elementList = [...document.querySelectorAll('.cards .cards-inner')];
        if(count>0){
            for(let i = count+2; i>=count ; i--){            
                elementList[i].style.display = 'none';    
            }
        }        
    })


})
