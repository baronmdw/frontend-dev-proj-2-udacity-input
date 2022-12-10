function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        window.alert("Welcome, Captain!")
    }
    if(inputText=="") {
        window.alert("No Input given!")
        return false;
    }
    return true;
}

export { checkForName }
