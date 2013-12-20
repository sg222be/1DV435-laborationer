
var table= document.querySelector(".Table");
var button = document.querySelector(".hide");

button.onclick = function() {

    if(table.className === 'hidden'){
        table.setAttribute("class", "show");
    }
    else{
        table.setAttribute("class", "hidden");
    }
    var isHidden = table.style.display == 'none';
    table.style.display = isHidden ? 'block' : 'none';
    
    
    
    };