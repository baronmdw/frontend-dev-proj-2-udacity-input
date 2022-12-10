function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value;
    // check if text was put into the form field
    const validInput = Client.checkForName(formText);

    if (validInput) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/test', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({inputText: formText}),
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('agreement').innerHTML = res.agreement;
            document.getElementById('confidence').innerHTML = res.confidence;
            document.getElementById('irony').innerHTML = res.irony;
            document.getElementById('subjectivity').innerHTML = res.subjectivity
        })
    }
}

export { handleSubmit }
