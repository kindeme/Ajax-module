const btn =document.querySelector('.btn');
const info =document.querySelector('.info');
// 


function getData(url){
  const ajax = new XMLHttpRequest();
ajax.open('GET','text.txt',true);
ajax.onreadystatechange = function(){
  if(this.status === 200 && this.readyState ===4){
    info.textContent = this.responseText;
  }
};
ajax.send();
}
btn.addEventListener("click",function(){
  getData("name.txt");

})