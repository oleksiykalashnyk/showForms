"use strict";

let serverJSON = '[{"inputs":[{"idInput":"11","hidden":1,"required":1},{"idInput":"12","hidden":0,"required":0},{"idInput":"11","hidden":0,"required":0},{"idInput":"12","hidden":0,"required":0}]},{"inputs":[{"idInput":"21","hidden":1,"required":0},{"idInput":"22","hidden":0,"required":1}]}]';

let formInfo = JSON.parse(serverJSON),
    selectStart = document.getElementById("start_select"),
    selectedForm = document.getElementById("new_form");



console.log(formInfo);



function showForms() {
    let x = document.getElementById("start_select").value;


    for (let i = 0; i < formInfo[x - 1].inputs.length; i++) {

        let idInput = formInfo[x - 1].inputs[i].idInput,
            hiddenInput = +formInfo[x - 1].inputs[i].hidden,
            requiredInput = +formInfo[x - 1].inputs[i].required,
            inputEdit = document.getElementById(idInput);

        if (requiredInput == 1) {
            hiddenInput = 0;
            inputEdit.setAttribute("required", "");
        } else {
            inputEdit.removeAttribute("required", "");
        }

        if (hiddenInput == 1) {
            inputEdit.setAttribute("type", "hidden");
        } else {
            inputEdit.removeAttribute("type", "hidden");
        }


    }





    document.getElementById("demo3").innerHTML = "Вы находитесь в " + x + " выборе";
}