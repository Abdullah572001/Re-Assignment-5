function getNumberValue(id) {
    const numberValue = parseFloat(document.getElementById(id).innerText);
    return numberValue;
}

function getClassHidden(hidden){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');


    document.getElementById(hidden).classList.remove('hidden');
}