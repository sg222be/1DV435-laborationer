
var omvandla= document.querySelector(".submitButton"); //Knapp


var USDr =0.15;
var EURr =0.11;

omvandla.onclick = function() {
    var belopp = document.querySelector("#valuta");    //Belopp kronor
    if (belopp.value<=0 || isNaN(belopp.value)) {
            
       alert("Ange giltlig summa.");
            
                    
                 
    }       
    else { 
        calculate(belopp.value)
    }        
}
          



function calculate(belopp) {
    var EUR= belopp*EURr;
    var USD= belopp*USDr;
    
    var list=document.querySelector("#resultat");
    
    var li= document.createElement('li');
    
    var text= belopp+" sek är "+USD+" dollar och "+EUR+" euro."; 
    var line= document.createTextNode(text);
    
    li.appendChild(line);
    
    list.insertBefore (li, list.firstChild);
    
}
