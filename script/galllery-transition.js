let count = 1;

document.getElementById("radio1").checked = true;

setInterval (nextImage,5000);

// baast substituir o número 5 pelo número de slides que se deseja adicionar
function nextImage(){
  count++;

  if(count > 6){count = 1;};
  
  document.getElementById("radio" + count).checked =true;
}