var nodeList = document.querySelectorAll(".gallery-album-img");
var get_img_modal = document.getElementById("modal-img");
var src_Value = "";
var count;

for ( let i = 0; i < nodeList.length; i++) {
  nodeList[i].addEventListener('click', function() {

      src_Value = nodeList[i].getAttribute('src');
      get_img_modal.setAttribute('src',src_Value);
      document.getElementById("inp-modal").checked = true;  
      count = i;
      document.body.style.overflow = "hidden"; //unloadScrollBars
      
  });
}

 function restore_overflow() {
  document.body.style.overflow = "visible"; //reloadScrollBars
 }

function btn_next_photo() {
  count++;
  src_Value = "";
  get_img_modal.setAttribute('src',src_Value);

  if (count < nodeList.length) {
  src_Value = nodeList[count].getAttribute('src');
  get_img_modal.setAttribute('src', src_Value);
  }
  else {
    count=0;
    src_Value = nodeList[count].getAttribute('src');
    get_img_modal.setAttribute('src', src_Value);
  }

}

function btn_prev_photo() {
  count--;
  src_Value = "";
  get_img_modal.setAttribute('src',src_Value);

  if (count > -1) {
  src_Value = nodeList[count].getAttribute('src');
  get_img_modal.setAttribute('src', src_Value);
  }
  else {
    count= nodeList.length;
    count--;
    src_Value = nodeList[count].getAttribute('src');
    get_img_modal.setAttribute('src', src_Value);
  }
}

