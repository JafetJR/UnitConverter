//Function to fill the select using the values in the Array 'values_len'
function Fill_Values(selected_unit = "length"){
    selected_last_opt.setAttribute("class", "nav-link");
    let current_units = document.getElementById(selected_unit);
    current_units.setAttribute("class", "nav-link active");
    selected_last_opt = current_units;
    
    //Clean selects
    while(conv_from.length > 0){conv_from.remove(0)}
    while(conv_to.length > 0){conv_to.remove(0)}
    
    let units_for_selects = Object.keys(units[selected_unit]);

    for(let i = 0 ; i < units_for_selects.length ; i++){
        const opt_from = document.createElement('option');
        const opt_to = document.createElement('option');
        opt_from.value = i;
        opt_from.text = ''+units_for_selects[i]+'';
        opt_to.value = i;
        opt_to.text = ''+units_for_selects[i]+'';

        conv_from.appendChild(opt_from);
        conv_to.appendChild(opt_to);
    }
}

function Converted_Unit_Btm(unit, select_opt_from, select_opt_to){    
    unit = parseInt(unit, 10);
    let ans = document.getElementById("Answer");
    let result = units[selected_last_opt.id][select_opt_from][select_opt_to] * unit;
    result = result +  ' ' + units[selected_last_opt.id][select_opt_to]['sign'];
    unit = unit + ' ' + units[selected_last_opt.id][select_opt_from]['sign'];
    ans.innerText = `Result of your calculation\n ${unit} = ${result}`;

    document.getElementById("result").style.display = "block";
}

function Reset_Btn(){
    unit.value = '';
    conv_from.value = 0;
    conv_to.value = 0;
    //Not display the form.
    document.getElementById("result").style.display = 'none';
}