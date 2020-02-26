document.querySelector(".get-jokes").addEventListener("click",getJokes);
function getJokes(e){
  e.preventDefault();
  const number =documnet.querySelector('input[type="number"').value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET",`http://api.icndb.com/jokes/${number}`,true);

xhr.onload = function(){
  if(thisstatus == 200){
    const response = JSON.parse(this.responseText);
    let output ="";
    if(response.type ==="success"){
      output +=``
      response.value.forEach(function(joke){
        output+=`<li>${joke.joke}</li>`;

      });
    }else{
      output+=`<li>Something went wrong</li>`;
    }
    document.querySelector('.jokes').innerHTML = output;
  }
}

xhr.send();
}