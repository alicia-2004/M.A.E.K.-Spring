const buttonSubmit=document.getElementById("submitButton");
const buttonRegister=document.getElementById("registerButton");

buttonRegister.onclick = function(){
    window.open("signUp", "_self");
}

buttonSubmit.onclick = function(){
    const consumerName=document.getElementById("fname").value;
    const pass=document.getElementById("fpass").value;
    fetch("/api/getAllConsumers")
        .then(response => response.json())
        .then(data => {
            console.log("Recieved Data: ", data);
            verifyLogin(data, consumerName, pass);
        })
        .catch(error => console.error("Error fetching data, "+error));
};

function verifyLogin(items, consumerName, pass){
    items.forEach(item =>{
        if(item.name==consumerName && item.password==pass){
            window.open("home?id="+item.id, "_self");
            return;
        }
    });
}