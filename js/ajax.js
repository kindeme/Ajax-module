const btn =document.querySelector('.btn');
const info =document.querySelector('.info');
// 

function getData(url){

  const ajax = new XMLHttpRequest();

ajax.open('GET','text.txt',true);

//  old method
// ajax.onreadystatechange = function(){
//   if(this.status === 200 && this.readyState ===4){
//     info.textContent = this.responseText;
//   }
// };

ajax.onload = function(){
  if(this.status ==200){
    info.textContent = this.responseText;
  }else{
    console.log(this.statusText);
  }
}
//  when it is error
ajax.onerror = function(){
  console.log('there was an error');
}

ajax.send();
};

btn.addEventListener("click",function(){
  getData("text.txt");
});