
     const DecreaseBtn=  document.getElementById("DecrementBtn");
     const ResetBtn=  document.getElementById("ResetBtn");
     const IncreaseBtn=  document.getElementById("IncrementBtn");
     const CountLabel = document.getElementById("CountLabel"); 
     
     let count= 0; 

     IncreaseBtn.onclick= function(){
        count++;
        CountLabel.textContent=count;
    }

    DecreaseBtn.onclick=function() {
        count--;
        CountLabel.textContent=count;
    }

    ResetBtn.onclick=function () {
       count=0;
       CountLabel.textContent="0";
    }; 


        