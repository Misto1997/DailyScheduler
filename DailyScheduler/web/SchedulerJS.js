function addItems()
 {
    var input=document.getElementById('input');
    var item=input.value;
    var ul=document.getElementById('list');
    var textnode=document.createTextNode(item);
    
    if(item==='')
      {
         return false;
      }
    else
      {
         //created li
         var li=document.createElement('li');
        
         //created checkbox
         var checkbox=document.createElement('input');
         checkbox.type='checkbox';
         checkbox.setAttribute('id','check');
         checkbox.setAttribute('onclick','func()');
        
         //created label
         var label=document.createElement('label');
         label.setAttribute('id','txt');
         label.setAttribute('for','item');
        
         // adding these to webpage      
         li.appendChild(checkbox);
         label.appendChild(textnode);
         li.appendChild(label);
         ul.insertBefore(li,ul.childNodes[0]);
         input.value='';
         setTimeout(()=>{li.className='visual';},100)
        
      }
 }
 
function removeItems()
{
  var ul=list;
  ul.innerHTML='';
} 
function func()
{
    alert('yay! Job Done..');
}

