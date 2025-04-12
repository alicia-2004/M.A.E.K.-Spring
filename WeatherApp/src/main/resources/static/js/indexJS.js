const buttonSubmit=document.getElementById("submitButton");
const buttonRegister=document.getElementById("registerButton");

buttonRegister.onclick = function(){
    window.open("signUp", "_self");
}

buttonSubmit.onclick = function(){
    const consumerName=document.getElementById("fname").value;
    const pass=document.getElementById("fpass").value;
    if(consumerName=="" || pass==""){
        alert("Please fill in all fields.");
        return;
    } else{
        fetch("/api/getAllConsumers")
        .then(response => response.json())
        .then(data => {
            console.log("Recieved Data: ", data);
            verifyLogin(data, consumerName, pass);
        })
        .catch(error => console.error("Error fetching data, "+error));
    }
    
};

function verifyLogin(items, consumerName, pass){
    let found=false;
    items.forEach(item =>{
        if(item.name==consumerName && item.password==pass){
            window.open("home?id="+item.id, "_self");
            found=true;
            return;
        }
    });

    if(!found){
        alert("Wrong username or password.");
        location.reload(true);
    }
}
