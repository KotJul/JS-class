// формф где есть текст и автор 
const form = document.forms[0];
form.addEventListener('submit', function (event) {
    const message = {
        /*данные которые мы отправляем на сервер*/
        time: new Date(),
        text: this.elements.name.value,
        /*name взят из импута который отвечает за введение текста*/
        author: 'Juli',
    }
    fetch('http://192.168.0.200:3000/messages ', {
            method: 'POST',
            body: JSON.stringify(message),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(mesg => {
            console.log(mesg);
        })
    event.preventDefault();
})
setInterval(() => {
            fetch('http://192.168.0.200:3000/messages', {
                    method: 'GET',
                })
                .then(response => response.json())
               

        },5000)