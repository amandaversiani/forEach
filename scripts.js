var arrayNum = [10,45,78,90,60];
document.getElementById("foreach01").addEventListener('click', function(){
    arrayNum.forEach(function(num){
        //alert(num);
        document.createElement("li");
        ClipboardItem.innerHTML = num;
        document.getElementById("listaNum").appendChild(item);
    });
});

document.getElementById("map01").addEventListener('click', funcition(){
    var dobro = arrayNum.map(function(num){
        return num * 2;
    })
    dobro.forEach(function(num2){
        alert('o dobro de ' + num + ' é ' + num2 );
    })
});