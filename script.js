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

            


            
        } else {                        
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
    }
    pentrigger.addEventListener('click',triggerOnOff)

    const OnICO =function(){ 
            //   Here an Exception can occure i will fix it later 
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
    OnOffICO.addEventListener('click', OnICO)
    OnICO();
   
})
