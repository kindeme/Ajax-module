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

   // filter example
   let display = ' ' ;
   const specialItems = data.cartItems.filter(function(item){
    return item.price >1;
  })

specialItems.cartItems.forEach(function(item){
  display += `<div class="item> 
  <p>item id:${item.id}</p>
  <p>item name:${item.name}</p>
  <p>item price:${item.price}</p>
  </div> `;
  itemInfo.innerHTML = display;

});
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