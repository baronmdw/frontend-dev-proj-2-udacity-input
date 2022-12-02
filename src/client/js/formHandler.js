function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

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

export { handleSubmit }
