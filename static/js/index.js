document
    .getElementById('submit')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const entrada = document.getElementById('input').value;
        alert(entrada);
    }) 