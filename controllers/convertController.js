exports.convert = (req, res) => {

    const { unit, value, ...rest } = req.query;
    const response = calculate({ value, unit });
    res.json(response);
}

exports.convertPost = (req, res) => {

    const { unit, value, ...rest } = req.body;
    const response = calculate({ value, unit });
    res.json(respose);
}

function calculate({ value, unit = 'c' }) {
    const kelvinFromCelsius = parseInt(value) + 273;
    const fahrenheitFromCelsius = (value * 1.8) + 32;
    const celsiusFromFahrenheit = (value - 32) / 1.8;
    const kelvinFromFahrenheit = (value + 459.67) * (5 / 9);
    const celsiusFromKelvin = parseInt(value) - 273;
    const fahrenheitFromKelvin = (value * (5 / 9)) - 459.67;
    switch (unit) {
        case 'c':
            return{
                "sourceUnit": unit,
                "value": value,
                "kelvinFromCelsius": kelvinFromCelsius.toFixed(2),
                "fahrenheitFromCelsius": fahrenheitFromCelsius.toFixed(2)
            };
        case 'f':
            return{
                "sourceUnit": unit,
                "value": value,
                "celsiusFromFahrenheit": celsiusFromFahrenheit.toFixed(2),
                "kelvinFromFahrenheit": kelvinFromFahrenheit.toFixed(2)
            };
        case 'k':
            return{
                "sourceUnit": unit,
                "value": value,
                "celsiusFromKelvin": celsiusFromKelvin.toFixed(2),
                "fahrenheitFromKelvin": fahrenheitFromKelvin.toFixed(2)
            };
    }
}