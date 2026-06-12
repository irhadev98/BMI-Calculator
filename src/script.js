const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height=== '' || height <0 || isNaN(height) ) {
        result.innerHTML = 'Please Enter a Valid Height'
        return;
    }
     if (weight=== '' || weight <0 || isNaN(weight) ) {
        result.innerHTML = 'Please Enter a Valid Weight'
        return;
    } 
    const bmiresult = (weight / ((height * height) / 10000)).toFixed(1);

    if (bmiresult < 18.6) {
        result.innerHTML = `${bmiresult}<br>Underweight`;

    } else if (bmiresult >= 18.6 && bmiresult <= 24.9) {
        result.innerHTML = `${bmiresult}</br>Normal`

    } else if (bmiresult > 24.9) {
        result.innerHTML = `${bmiresult}</br>Overweight`
        
    } else {
        const bmiresult =  (weight / ((height * height) / 10000)).toFixed(1);
       //show the result
        result.innerHTML = `<span>${bmiresult}</span>`
    }

})