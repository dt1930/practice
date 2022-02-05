//STEP 1: Created html elements using the wireframe
//STEP 2: CSS Styling to all the elements
//STEP 3: Adding functionality to buttons
    //a. 



window.addEventListener('load',function(){
    console.log("Loaded");
    let counter=1;
    document.getElementById("counter-display").innerHTML=counter
    let button_first=document.getElementById("sun");
    let button_second=document.getElementById("mon");
    let button_third=document.getElementById("tue");
    let button_fourth=document.getElementById("wed");
    let button_fifth=document.getElementById("thu");
    let button_sixth=document.getElementById("fri");
    let button_seventh=document.getElementById("sat");
    let increase_counter_button=document.getElementById("increase-button");
    let decrease_counter_button=document.getElementById("decrease-button");
    let save_button=document.getElementById("save-button")
    increase_counter_button.addEventListener('click',function(){
        if (counter<7){counter++};
        document.getElementById("counter-display").innerHTML=counter;
    });
    decrease_counter_button.addEventListener('click',function(){
        if (counter>1){counter--};
        document.getElementById("counter-display").innerHTML=counter;
    });
    let listItemSun=document.createElement('div');
    let listItemMon=document.createElement('div');
    let listItemTue=document.createElement('div');
    let listItemWed=document.createElement('div');
    let listItemThu=document.createElement('div');
    let listItemFri=document.createElement('div');
    let listItemSat=document.createElement('div');
    let sun="", mon="", tue="", wed="", thu="", fri="", sat="";
    let text_input=document.getElementById("text-area");
    save_button.addEventListener('click',function(){
        if (counter==1){
            sun=sun+text_input.value+'|*|';
            listItemSun.innerHTML=sun;
        }
        else if (counter==2){
            mon=mon+text_input.value+'|*|';
            listItemMon.innerHTML=mon;
        }
        else if (counter==3){
            tue=tue+text_input.value+'|*|';
            listItemTue.innerHTML=tue;
        }
        else if (counter==4){
            wed=wed+text_input.value+'|*|';
            listItemWed.innerHTML=wed;
        }
        else if (counter==5){
            thu=thu+text_input.value+'|*|';
            listItemThu.innerHTML=thu;
        }
        else if (counter==6){
            fri=fri+text_input.value+'|*|';
            listItemFri.innerHTML=fri;
        }
        else{
            sat=sat+text_input.value+'|*|';
            listItemSat.innerHTML=sat;
        }
        text_input.value="";
    });
    let callSun=false, callMon=false, callTue=false, callWed=false, callThu=false, callFri=false, callSat=false;
    buttons_all=document.getElementsByClassName("container-second__daycard");
    button_first.addEventListener('click',first_button);
    button_second.addEventListener('click',second_button);
    button_third.addEventListener('click',third_button);
    button_fourth.addEventListener('click',fourth_button);
    button_fifth.addEventListener('click',fifth_button);
    button_sixth.addEventListener('click',sixth_button);
    button_seventh.addEventListener('click',seventh_button);
    function first_button(){
        if (callSun==false){
            document.getElementById('wrapper__container-second__sun').style.display="";
            document.getElementById('wrapper__container-second__sun').appendChild(listItemSun)
            document.getElementById('wrapper__container-second__mon').style.display="none";
            document.getElementById('wrapper__container-second__tue').style.display="none";
            document.getElementById('wrapper__container-second__wed').style.display="none";
            document.getElementById('wrapper__container-second__thu').style.display="none";
            document.getElementById('wrapper__container-second__fri').style.display="none";
            document.getElementById('wrapper__container-second__sat').style.display="none";
            callSun=true;
        }
        else{
            document.getElementById('wrapper__container-second__sun').style.display="none";
            callSun=false;
        }
    }
    function second_button(){
        if (callMon==false){
            document.getElementById('wrapper__container-second__mon').style.display="";
            document.getElementById('wrapper__container-second__mon').appendChild(listItemMon)
            document.getElementById('wrapper__container-second__tue').style.display="none";
            document.getElementById('wrapper__container-second__wed').style.display="none";
            document.getElementById('wrapper__container-second__thu').style.display="none";
            document.getElementById('wrapper__container-second__fri').style.display="none";
            document.getElementById('wrapper__container-second__sat').style.display="none";
            document.getElementById('wrapper__container-second__sun').style.display="none";
            callMon=true;
        }
        else{
            document.getElementById('wrapper__container-second__mon').style.display="none";
            callMon=false;
        }
    }
    function third_button(){
        if (callTue==false){
            document.getElementById('wrapper__container-second__tue').style.display="";
            document.getElementById('wrapper__container-second__tue').appendChild(listItemTue)
            document.getElementById('wrapper__container-second__wed').style.display="none";
            document.getElementById('wrapper__container-second__thu').style.display="none";
            document.getElementById('wrapper__container-second__fri').style.display="none";
            document.getElementById('wrapper__container-second__sat').style.display="none";
            document.getElementById('wrapper__container-second__sun').style.display="none";
            document.getElementById('wrapper__container-second__mon').style.display="none";
            callTue=true;
        }
        else{
            document.getElementById('wrapper__container-second__tue').style.display="none";
            callTue=false;
        }
    }
    function fourth_button(){
        if (callWed==false){
            document.getElementById('wrapper__container-second__wed').style.display="";
            document.getElementById('wrapper__container-second__wed').appendChild(listItemWed)
            document.getElementById('wrapper__container-second__thu').style.display="none";
            document.getElementById('wrapper__container-second__fri').style.display="none";
            document.getElementById('wrapper__container-second__sat').style.display="none";
            document.getElementById('wrapper__container-second__sun').style.display="none";
            document.getElementById('wrapper__container-second__mon').style.display="none";
            document.getElementById('wrapper__container-second__tue').style.display="none";
            callWed=true;
        }
        else{
            document.getElementById('wrapper__container-second__wed').style.display="none";
            callWed=false;
        }
    }
    function fifth_button(){
        if (callThu==false){
            document.getElementById('wrapper__container-second__thu').style.display="";
            document.getElementById('wrapper__container-second__thu').appendChild(listItemThu)
            document.getElementById('wrapper__container-second__fri').style.display="none";
            document.getElementById('wrapper__container-second__sat').style.display="none";
            document.getElementById('wrapper__container-second__sun').style.display="none";
            document.getElementById('wrapper__container-second__mon').style.display="none";
            document.getElementById('wrapper__container-second__tue').style.display="none";
            document.getElementById('wrapper__container-second__wed').style.display="none";
            callThu=true;
        }
        else{
            document.getElementById('wrapper__container-second__thu').style.display="none";
            callThu=false;
        }
    }
    function sixth_button(){
        if (callFri==false){
            document.getElementById('wrapper__container-second__fri').style.display="";
            document.getElementById('wrapper__container-second__fri').appendChild(listItemFri)
            document.getElementById('wrapper__container-second__sat').style.display="none";
            document.getElementById('wrapper__container-second__sun').style.display="none";
            document.getElementById('wrapper__container-second__mon').style.display="none";
            document.getElementById('wrapper__container-second__tue').style.display="none";
            document.getElementById('wrapper__container-second__wed').style.display="none";
            document.getElementById('wrapper__container-second__thu').style.display="none";
            callFri=true;
        }
        else{
            document.getElementById('wrapper__container-second__fri').style.display="none";
            callFri=false;
        }
    }
    function seventh_button(){
        if (callSat==false){
            document.getElementById('wrapper__container-second__sat').style.display="";
            document.getElementById('wrapper__container-second__sat').appendChild(listItemSat)
            document.getElementById('wrapper__container-second__sun').style.display="none";
            document.getElementById('wrapper__container-second__mon').style.display="none";
            document.getElementById('wrapper__container-second__tue').style.display="none";
            document.getElementById('wrapper__container-second__wed').style.display="none";
            document.getElementById('wrapper__container-second__thu').style.display="none";
            document.getElementById('wrapper__container-second__fri').style.display="none";
            callSat=true;
        }
        else{
            document.getElementById('wrapper__container-second__sat').style.display="none";
            callSat=false;
        }
    }










})