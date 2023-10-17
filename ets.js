const ajax = new XMLHttpRequest();
ajax.onload = function (){
    const data = JSON.parse(ajax.responseText);
    display(data);
};

const url = 'http://159.223.51.203:81/api/bio';
ajax.open("GET", url);
ajax.send();

function display(data){
    const.name = document.getElementById("name").value;
    name.textContent = data.name;
    const.id = document.getElementById("id").value;
    id.textContent = data.id;
    }