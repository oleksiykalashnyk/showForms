"use strict";


let formInfo = {};
let selectStart = document.getElementById("start_select");
let selectedForm = document.getElementById("new_form");


//получаем JSON с сервера
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        formInfo = JSON.parse(this.responseText);
    }

    //Заполняем select возможными вариантами форм
    for (let i = 1; i <= formInfo.length; i++) {
        let optionForSelect = document.createElement("option");
        optionForSelect.innerHTML = formInfo[i - 1].name;
        let att = document.createAttribute("value");
        att.value = i;
        optionForSelect.setAttributeNode(att);
        selectStart.append(optionForSelect);
    }

};



xmlhttp.open("GET", "data.json", true);
xmlhttp.send();





function showForms() {
    let x = document.getElementById("start_select").value;
    cleanForm();


    for (let i = 0; i < formInfo[x - 1].inputs.length; i++) {


        let newInput = document.createElement("input");


        newInput.classList.add("form-control");

        let idAtt = document.createAttribute("id");
        idAtt.value = formInfo[x - 1].inputs[i].type + i;
        newInput.setAttributeNode(idAtt);

        let typeAtt = document.createAttribute("type");
        typeAtt.value = formInfo[x - 1].inputs[i].type;
        newInput.setAttributeNode(typeAtt);

        let typePlaceholder = document.createAttribute("placeholder");
        typePlaceholder.value = formInfo[x - 1].inputs[i].placeholder;
        newInput.setAttributeNode(typePlaceholder);

        if (formInfo[x - 1].inputs[i].value !== "") {
            let valuedAtt = document.createAttribute("value");
            valuedAtt.value = formInfo[x - 1].inputs[i].value;
            newInput.setAttributeNode(valuedAtt);
        }

        if (formInfo[x - 1].inputs[i].required == 1) {
            let requiredAtt = document.createAttribute("required");
            newInput.setAttributeNode(requiredAtt);
        } else {
            if (formInfo[x - 1].inputs[i].hidden == 1) {
                let hiddenAtt = document.createAttribute("type");
                hiddenAtt.value = "hidden";
                newInput.setAttributeNode(hiddenAtt);
            }
        }

        if (formInfo[x - 1].inputs[i].hidden == 0) {
            let newLabelForInput = document.createElement("label");

            let labelForAtt = document.createAttribute("for");
            labelForAtt.value = formInfo[x - 1].inputs[i].type + i;
            newLabelForInput.setAttributeNode(labelForAtt);

            newLabelForInput.textContent = formInfo[x - 1].inputs[i].label;
            selectedForm.append(newLabelForInput);
            

        }

        selectedForm.append(newInput);

    }










    let newSubmit = document.createElement("input");
    let typeSub = document.createAttribute("type");
    typeSub.value = "Submit";
    newSubmit.setAttributeNode(typeSub);
    selectedForm.append(newSubmit);
    newSubmit.classList.add("btn");
    newSubmit.classList.add("btn-primary");


    document.getElementById("demo3").innerHTML =  "Вы находитесь в " + formInfo[x - 1].name;
}


function cleanForm() {
    let inputsInForm = selectedForm.querySelectorAll("input");
    for (let i = 0; i < inputsInForm.length; i++) {
        inputsInForm[i].remove();
    }
    let labelsInForm = selectedForm.querySelectorAll("label");
    for (let i = 0; i < labelsInForm.length; i++) {
        labelsInForm[i].remove();
    }
}