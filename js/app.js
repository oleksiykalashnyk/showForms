"use strict";


let iputInfo = {},
    selectedAllInput,
    selectStart = document.getElementById("start_select"),
    selectedForm = document.getElementById("new_form"),

    //Get data  and show first inputs
    checkSelect = () => {
        let selected = selectStart.options[selectStart.selectedIndex];
        let extra = selected.getAttribute('data-json');
        iputInfo = JSON.parse(extra);
    },

    //Check select change and show inputs
    showForms = () => {
        checkSelect();

        //Clean all inputs and set required "false"
        let allDivs = selectedForm.querySelectorAll("div");
        allDivs.forEach(item => {
            item.style.display = "none";
            selectedAllInput = item.querySelector('input');
            if (selectedAllInput != null) {
                selectedAllInput.required = false;
            }
        });

        //Show all inputs where hidden "0" and set requireds if required "1"
        for (let i = 1; i <= iputInfo.length; i++) {
            let showInput = selectedForm.querySelector("#" + iputInfo[i - 1].id);
            let inputInDiv = showInput.querySelector('input');

            xxx.push(showInput);
            
            if(iputInfo[i - 1].hidden == 0){
                showInput.style.display = "block";
            }else{
                iputInfo[i - 1].required = 0;
            }

            if (iputInfo[i - 1].required == 1) {
                inputInDiv.required = true;
                showInput.style.display = "block";
            }
        }
    };

var xxx =[];
showForms();