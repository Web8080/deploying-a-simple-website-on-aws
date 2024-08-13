function bookTaxi() {
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const carType = document.getElementById('carType').value;

    if (pickup && dropoff && date && time && carType) {
        alert(`Taxi booked!\nPickup: ${pickup}\nDropoff: ${dropoff}\nDate: ${date}\nTime: ${time}\nCar Type: ${carType}`);
    } else {
        alert('Please fill in all fields.');
    }
}
