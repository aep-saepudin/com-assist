
var items = {
    datas : []
}

var current = {
    item:null
}

var loc_item = localStorage.getItem('items')

if (Boolean(loc_item)){
    items = JSON.parse(loc_item)
}

var myModalEl = document.getElementById('myModal')
var modal = bootstrap.Modal.getOrCreateInstance(myModalEl) 

var modalInsertEl = document.getElementById('modal-insert')
var modalInsert = bootstrap.Modal.getOrCreateInstance(modalInsertEl)

var swiper = new Swiper(".mySwiper", {});

var square = document.querySelector('.mySwiper');
square.addEventListener('dblclick', (event) => {
    modalInsert.show()
});


$('#slide1').on('click', 'span',function(){

    current.item = this.innerText
    modal.show()
})

$('#insert-btn').click(function(){
    const item = $('#input-name').val()
    items.datas.push({name:item})
        
    localStorage.setItem('items', JSON.stringify(items));
    renderHome();
    modalInsert.hide()
})


$('#delete-btn').click(function(){
    
    const filtered = items.datas.filter(v => v.name !== current.item.replace('#',''))
    console.log(filtered, current.item)
    items.datas = filtered
    localStorage.setItem('items', JSON.stringify(items));
    renderHome();
    modal.hide()

})

function renderHome(){

    $('#item-container').empty();
    items.datas.forEach(el => {
        $('#item-container').append(`<span class="badge rounded-pill bg-primary fs-3">#${el.name}</span>`);
    })

}

renderHome();