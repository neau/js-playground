function calculateFuel() {
    var fuelConsumption = 5.0; // Liters/100km
    var distance = 910;
    var fuelCost = 2.18; // lev / liter

    var literPerKM = (fuelConsumption / 100).toFixed(2);
    console['log']('Литър на километър: \t' + literPerKM + ' л/км');

    var levPerLiter = (literPerKM * fuelCost).toFixed(2);
    console['log']('Лева за един литър: \t' + levPerLiter + ' лв.');

    var totalCost = distance * levPerLiter;
    console['log']('Разстояние: \t\t' + distance + ' км.');
    console['log']('Разстояние * разход: \t' + totalCost + ' лв.');
    
}
calculateFuel();