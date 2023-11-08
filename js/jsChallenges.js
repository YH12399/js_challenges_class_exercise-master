function challeenge1 {
    console.log("Function is being called!");
    let checkBox = document.getElementById("subscribe").checked;
    if (checkBox) {
        document.querySelector("#emailDiv").style.display = "block";
    } else {
        document.querySelector("#emailDiv").style.display = "none";
    }
}

