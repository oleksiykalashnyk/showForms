"use strict";


let iputInfo = {},
    selectStart = document.getElementById("start_select"),
    selectedForm = document.getElementById("new_form"),

    checkSelect = () => {
        let selected = selectStart.options[selectStart.selectedIndex];
        let extra = selected.getAttribute('data-json');
        iputInfo = JSON.parse(extra);
    },

    showForms = () => {
        checkSelect();

        let allDivs = selectedForm.querySelectorAll("div");
        allDivs.forEach(item => {
            // item.setAttribute("hidden", "hidden");
            item.style.display = "none";
        });

        for (let i = 1; i <= iputInfo.length; i++){
            let showInput = selectedForm.querySelector("#"+ iputInfo[i-1].id);
            showInput.style.display = "block";
            console.log(showInput);

            // showInput.setAttribute("hidden", "");
            // showInput.style.display = "block";
        }

    };




showForms();