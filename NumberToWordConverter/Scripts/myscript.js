
//***** IIFE to attach click event handlers to the buttons 'Convert into Words' and 'Go Back' *****//

(function () {
    document.getElementById('convert').onclick = onSubmit;
    document.getElementById('return').onclick = onReturn;
})();


//***** Function called upon clicking the 'Convert into Words' button *****//

function onSubmit() {
    let xhr = new XMLHttpRequest();
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let url = 'http://' + window.location.host + '/api/conversion/' + name + '/' + number + '/';
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);

                let input = document.getElementById("input");
                let output = document.getElementById("output");

                document.getElementById('outStr').innerHTML = response.Name + '<br/>"' + response.Words + '"';

                input.classList.toggle('collapsed');
                output.classList.toggle('expanded');
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);
}


//***** Function called upon clicking the 'Go Back' button *****//

function onReturn() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    input.classList.toggle('collapsed');
    output.classList.toggle('expanded');
}
