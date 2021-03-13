const myList = document.querySelector('#myList');

myList.addEventListener('click',function(e){
  var randomColor = 'rgb('+ Math.random()*256 +',' + Math.random()*256+ ',' +Math.random()*256 +')';
  e.target.style.color= randomColor;
});