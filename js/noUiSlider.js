const priceSlider = document.getElementById('priceSlider');

if (priceSlider) {
    noUiSlider.create(priceSlider, {
        start: [1000, 8000],
        connect: true,
        range: {
            'min': 0,
            'max': 10000
        }
    });
    let input1 = document.querySelector('.filter__price1');
    let input2 = document.querySelector('.filter__price2');
    let inputs = [input1, input2];

    priceSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = parseInt(values[handle]);

    });

    input1.addEventListener('input', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
        priceSlider.noUiSlider.set([this.value, null]);
        console.log(inputs[0].value);
    });
    input2.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
        priceSlider.noUiSlider.set([null, this.value]);
    });


}
