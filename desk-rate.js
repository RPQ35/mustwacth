var baruin=document.getElementsByClassName("movief");
var title;
var rating;
var desc;
var des_pan=document.getElementById('desc_pan');
var title_pan=document.getElementById("title-pan")

Array.from(baruin).forEach(function(item) {
    item.addEventListener('click', function() {
        let value=this.getAttribute('data-value')
        console.log(value)

        if (value==1){
            anime1();
            title_pan.innerText=title;
            des_pan.innerText=desc;
            
        }
        else if (value==2){
            anime2();
            title_pan.innerText=title;
            des_pan.innerText=desc;
            
        }
        else if (value ==3){
            
        }
        else if (value ==4){
            
        }
        else if (value ==5){
            
        }
        else if (value ==6){
            
        }
        else if (value ==7){
            
        }
        else if (value ==8){
            
        }
        else if (value ==9){
            
        }
        else if (value ==10){
            
        }
        else if (value ==11){
            
        }
        else if (value ==12){
            
        }
        else if (value ==13){
            
        }
        else if (value ==14){
            
        }
        else if (value ==15){
            
        }
        else if (value ==16){
            
        }
        else if (value ==17){
            
        }
        else if (value ==18){
            
        }
        else if (value ==19){
            
        }
        else if (value ==20){
            
        }
        else if (value ==21){
            
        }
        else if (value ==22){
            
        }
        else if (value ==23){
            
        }
        else if (value ==24){
            
        }
    });
});


function anime1(){
     title="Bluelock";
     desc="anime bola tapi graphic presentasi";
     rating ="3"
}

function anime2(){
    title="Bleach";
    desc="battle dengan story yang terus menerus menyebar";
    rating ="4"
}