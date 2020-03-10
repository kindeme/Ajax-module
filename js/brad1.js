document.getElementById('button').addEventListener('click',loadData);

function loadData(){
  // Create an XHR Object 
  const xhr = new XMLHttpRequest();
  //  Open
  xhr.open("Get","text.txt", true);

  xhr.onload = function(){
    if(this.status === 200){
      document.getElementById('output').innerHTML =`<h1>${this.responseText}</h1>`;
    }
  }
  xhr.send();
}