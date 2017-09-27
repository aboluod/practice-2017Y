
var btn = document.querySelector('#btn-modal'),
    modal = document.querySelector('#event-layer'),
    modalCt = document.querySelector('#event-layer .event-con');

btn.addEventListener('click', function(e){
    e.stopPropagation();
    showModal(modal);
});

modalCt.addEventListener('click', function(e){
   e.stopPropagation();
   if( hasClass(e.target, 'close') || hasClass(e.target, 'btn-cancel') ){
       hideModal(modal);
   } 
});

document.body.addEventListener('click', function(){
    hideModal(modal);
});

function showModal(modal){
    modal.style.display = 'block';
}
function hideModal(modal){
    modal.style.display = 'none';
}
function hasClass (ele, cls){
    return !!ele.className.match(new RegExp('\\b'+cls+'\\b'));
}