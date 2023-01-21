var swiper = new Swiper(".mySwiper", {});

// Get a reference to an element
var square = document.querySelector('body');

// Create a manager to manager the element
var manager = new Hammer.Manager(square);

// Create a recognizer
var DoubleTap = new Hammer.Tap({
    event: 'doubletap',
    taps: 2
});

// Add the recognizer to the manager
manager.add(DoubleTap);

// Subscribe to desired event
manager.on('doubletap', function (e) {
    alert('oi')
});


$('#slide1').on('click', 'span',function(){
    // alert(this.innerText)
    modal.show()
})

var myModalEl = document.getElementById('myModal')
var modal = bootstrap.Modal.getOrCreateInstance(myModalEl) 