let elm = document.getElementById("srcbtn");

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
        elm.style.display = "block";
    } else {
        elm.style.display = "none";
    }
});
elm.addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
});

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function() {
    myInput.focus()
})


(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()