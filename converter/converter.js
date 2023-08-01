
function calc(){
    let temp;

    if(document.getElementById('cbutton').checked){
        temp = document.getElementById('textbox').value;
        temp = Number(temp);
        temp = tofahrenheit(temp);
        document.getElementById('templabel').innerHTML = temp + '°f'
    }
    else if(document.getElementById('fbutton').checked){
        temp = document.getElementById('textbox').value;
        temp = Number(temp);
        temp = tokelvin(temp);
        document.getElementById('templabel').innerHTML = temp + '°k'
    }
    else{
        document.getElementById('templabel').innerHTML = "selecione uma temperatura"
    }
    
}


function tofahrenheit(tempo){
    return  tempo * 1.8 + 32;
}

function tokelvin(temp){
    return  temp + 273.15
}