document.addEventListener('DOMContentLoaded', function() {
    const optionButtons = document.querySelectorAll('.option-btn');
    const forms = document.querySelectorAll('.calculation-form');
    const resultDiv = document.querySelector('.result');
    const resultValue = document.getElementById('resultValue');

    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            optionButtons.forEach(btn => btn.classList.remove('active'));
            forms.forEach(form => form.classList.remove('active'));
            resultDiv.classList.remove('active');

            this.classList.add('active');
            const formId = this.getAttribute('data-form');
            document.getElementById(formId).classList.add('active');
        });
    });

    optionButtons[0].click();

    function calculateGCV_Bomb(waterMass, waterEquivalent, temperatureRise, fuelMass) {
        
        return ((waterMass * temperatureRise) + (waterEquivalent * temperatureRise)) / fuelMass;
        
    }

    function correctionFor_BOMBGCV(waterMass, waterEquivalent, temperatureRise, fuelMass, acidCorrection, coolingCorrection, fusewireCorrection) {
        return (((waterMass + waterEquivalent) * (temperatureRise + coolingCorrection)) - (acidCorrection + fusewireCorrection)) /  fuelMass;
    }

    function calculate_BOMBNCV(GCV, hydrogenPercentage) {
        return GCV - (0.09  * hydrogenPercentage * 587);
    }

    function calculate_BOYSGCV(waterMass, temperatureRise, fuelVolume) {
        return (waterMass * temperatureRise) / fuelVolume;
    }

    function calculateNCV_Boys(waterMass,   temperatureRise, steamMass, latentHeat, fuelVolume) {
        return ((waterMass * temperatureRise) - (steamMass * latentHeat)) / fuelVolume;
    }

    function calculate_BoysNCV_GCV(  GCV, steamMass, latentHeat, fuelVolume) {
        return GCV - ((steamMass * latentHeat) / fuelVolume);
    }

    document.getElementById('form1').addEventListener('submit', function(e) {
        e.preventDefault();
        const waterMass = parseFloat(document.getElementById('waterMass1').value);
        const waterEquivalent = parseFloat(document.getElementById('waterEquivalent1').value);


        const temperatureRise = parseFloat(document.getElementById('temperatureRise1').value);


        const fuelMass = parseFloat(document.getElementById('fuelMass1').value);

        const result = calculateGCV_Bomb(waterMass, waterEquivalent, temperatureRise, fuelMass);

        showResult(result.toFixed(2) + " cal/g");
    });

    document.getElementById('form2').addEventListener('submit', function(e) {
        e.preventDefault();
        const waterMass = parseFloat(document.getElementById('waterMass2').value);
        const waterEquivalent = parseFloat(document.getElementById('waterEquivalent2').value);
        const temperatureRise = parseFloat(document.getElementById('temperatureRise2').value);
        const fuelMass = parseFloat(document.getElementById('fuelMass2').value);
        const acidCorrection = parseFloat(document.getElementById('acidCorrection').value);
        const coolingCorrection = parseFloat(document.getElementById('coolingCorrection').value);
        const fusewireCorrection = parseFloat(document.getElementById('fusewireCorrection').value);

        const result = correctionFor_BOMBGCV(
            waterMass, waterEquivalent, temperatureRise, fuelMass, 
            acidCorrection, coolingCorrection, fusewireCorrection
        );
        showResult(result.toFixed(2) + " cal/g");
    });

    document.getElementById('form3').addEventListener('submit', function(e) {
        e.preventDefault();
        const GCV = parseFloat(document.getElementById('gcv3').value);
        const hydrogenPercentage = parseFloat(document.getElementById('hydrogenPercentage').value);

        const result = calculate_BOMBNCV(GCV, hydrogenPercentage);
        showResult(result.toFixed(2) + " cal/g");
    });

    document.getElementById('form4').addEventListener('submit', function(e) {
        e.preventDefault();
        const waterMass = parseFloat(document.getElementById('waterMass4').value);
        const temperatureRise = parseFloat(document.getElementById('temperatureRise4').value);
        const fuelVolume = parseFloat(document.getElementById('fuelVolume4').value);

        const result = calculate_BOYSGCV(waterMass, temperatureRise, fuelVolume);
        showResult(result.toFixed(2) + " Kcal/m³");
    });

    document.getElementById('form5').addEventListener('submit', function(e) {
        e.preventDefault();
        const waterMass = parseFloat(document.getElementById('waterMass5').value);
        const temperatureRise = parseFloat(document.getElementById('temperatureRise5').value);
        const steamMass = parseFloat(document.getElementById('steamMass5').value);
        const latentHeat = parseFloat(document.getElementById('latentHeat5').value);
        const fuelVolume = parseFloat(document.getElementById('fuelVolume5').value);

        const result = calculateNCV_Boys(waterMass, temperatureRise, steamMass, latentHeat, fuelVolume);
        showResult(result.toFixed(2) + " Kcal/m³");
    });

    document.getElementById('form6').addEventListener('submit', function(e) {
        e.preventDefault();
        const GCV = parseFloat(document.getElementById('gcv6').value);
       
        const steamMass = parseFloat(document.getElementById('steamMass6').value);
       
       
        const latentHeat = parseFloat(document.getElementById('latentHeat6').value);
        const fuelVolume = parseFloat(document.getElementById('fuelVolume6').value);

        const result = calculate_BoysNCV_GCV(GCV, steamMass, latentHeat, fuelVolume);
        showResult(result.toFixed(2) + " Kcal/m³");
    });

    function showResult(value) {
        resultValue.textContent = value;
        resultDiv.classList.add('active');
        
        setTimeout(() => {
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    const allInputs = document.querySelectorAll('input[type="number"]');
    allInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });

    document.querySelectorAll('.reset-btn').forEach(button => {
        button.addEventListener('click', function() {
            resultDiv.classList.remove('active');
        });
    });

    const interactiveElements = document.querySelectorAll('.btn, .option-btn');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});
