window.onload = function() {
    const conslider = document.getElementById('contributionRange');
    const conoutput = document.getElementById('contributionValue');
    const retslider = document.getElementById('retirementRange');
    const retoutput = document.getElementById('retirementValue');

    conoutput.innerHTML = conslider.value + '%';
    retoutput.innerHTML = retslider.value ; 

    conslider.oninput = function() {
        conoutput.innerHTML = this.value + '%';
    }
    retslider.oninput = function() {
        retoutput.innerHTML = this.value ;
    }
}