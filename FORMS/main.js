function validateForm() {
    var name = document.forms['myForm']["fname"].value;

    if (name.trim() === "") {
        setError("nameError", "Name cannot be empty");
        return false;
    }

    console.log("Name:", name); // Log the value of the name field

    // Add more validation logic for other fields here

    return true;
}

