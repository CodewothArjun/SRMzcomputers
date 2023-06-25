function quantityadd(){

let check2 = document.querySelector("#sum").innerHTML;
let displays = document.querySelector("#display").innerHTML;



if(check2 == "+"){

    let val= Number(displays)+ 1;
 document.querySelector("#display").innerHTML = val;

    
}

}

function quantitysub(){
let displays = document.querySelector("#display").innerHTML;

    let check1 = document.querySelector("#sub").innerHTML;

    if(check1 == "-"){
        if(displays >1){

        let val= Number(displays)- 1;
     document.querySelector("#display").innerHTML = val;
        }
        
      
    }

}