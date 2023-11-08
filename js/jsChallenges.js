//color of the day: Coral -- Ziqian Wang, Jiongyu Chen

function challenge1() {
    console.log("Function is being called!");
    let checkBox = document.getElementById("subscribe").checked;
    if (checkBox) {
        document.querySelector("#emailDiv").style.display = "block";
    } else {
        document.querySelector("#emailDiv").style.display = "none";
    }
};


let varCheckbox = document.getElementById("subscribe");
varCheckbox.addEventListener("click", function() {
    if (varCheckbox.checked) {
        document.querySelector("#emailDiv").style.display = "block";
    } else {
        document.querySelector("#emailDiv").style.display = "none";
    }});


let CheckBox = document.getElementById("sameAddress");
document.addEventListener("click", function(){
    if (CheckBox.checked) {
        document.getElementById("home").value = document.getElementById("bill").value;
        document.getElementById("home").disabled = true;
    } else {
        document.getElementById("home").disabled = false;
    }
})





function challenge3(){
    let varClassStandingBox = document.getElementsByName("standing");
    let varGradDateBox = document.getElementById("gradDate");

    varClassStandingBox.addEventListener("click", selectValidtor());

    function selectValidtor(){
        if(varClassStandingBox.checked == false){


        }
    }
    }









