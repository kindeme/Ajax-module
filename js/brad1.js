document.getElementById('button').addEventListener('click',loadData);

function loadData(){
  // Create an XHR Object 
  const xhr = new XMLHttpRequest();
  //  Open
  xhr.open("Get","text.txt", true);

  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.responseText);
    }
  }
  xhr.send();
}