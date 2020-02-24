const btn =document.querySelector('.btn');
const cartInfo = document.querySelector('.cartInfo');
const itemInfo = document.querySelector('.itemInfo');

// 
btn.addEventListener("click",function(){
  getData("cart.json");
});

function getData(url){

  const ajax = new XMLHttpRequest();
 ajax.open('GET',url,true);


ajax.onload = function(){
  if(this.status ==200){
   const data = JSON.parse(this.responseText);
   cartInfo.innerHTML = `<p> ${data.cartInfo.name}</p>
                        <p> ${data.cartInfo.store}</p>`;
  let displa














    
  }else{
    this.onerror();
  }
}
//  when it is error
ajax.onerror = function(){
  console.log('there was a mistake');
}

ajax.send();
};

btn.addEventListener("click",function(){
  getData("text.txt");
});