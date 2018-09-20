let count = 0;

function callController() {
    const root = document.getElementById('root');

    const request = new XMLHttpRequest();
    request.open("GET", 'http://localhost:5000/api/values');
    request.send();
    request.onreadystatechange = (e) => {
        if (request.readyState == 4 && request.status == 200){
            if (request.responseText) {
                count++;

                const data = request.responseText;

                root.innerHTML = "";

                const container = document.createElement('div');
                root.appendChild(container);
                const p = document.createElement('p');
                if (count % 2 === 0) {
                    p.textContent = `${data} has been clicked ${count} times`
                }
                else {
                    p.textContent = `Odd click number (${count})`
                    oddNumber;
                }
                container.appendChild(p);
            }
        }
    }
}

function reset() {
    count = 0;
    root.innerHTML = "";
    document.getElementById('customText').value = "";
}

function customCount() {
    let x = document.getElementById('customText').value;
    if(!isNaN(x)) {
        count = x;
    }
}

function oddNumber() {
    const container = document.createElement('div');
}