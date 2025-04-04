const buttonSubmit=document.getElementById("buttonSubmit");
const buttonBack=document.getElementById("backButton");

buttonBack.onclick=function(){
    window.open("/", "_self");
}

buttonSubmit.addEventListener("click",function(event){
    event.preventDefault();
	const form = event.currentTarget.form;
	const formData = new FormData(form);
	
    const data = {
      name: formData.get('fname'),
      password: formData.get('fpass'),
      location: formData.get('floc')
    };
  
    fetch('/api/addConsumer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    .then(response => response.json())
    .then(data => {
        console.log("Recieved Data: ", data);
        window.open("/home?id="+data.id, "_self");
    })
    
    .catch(error => console.error("Error fetching data, "+error));
});