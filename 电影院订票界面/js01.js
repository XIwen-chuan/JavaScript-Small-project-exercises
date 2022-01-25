const movieSelect = document.getElementById('movie');
const number = document.getElementById('number');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const total = document.getElementById('total')
const allseats = document.getElementById('AllSeats')




let ticketPrice = movieSelect.value;

function updateUI(){
    const selectedSeats = document.querySelectorAll('.row .selected');
    const selectedSeatsIndexs = selectedSeats.map(seat => selectedSeats.indexOf(seat));
    const selectedSeatsNumber = selectedSeats.length;

    number.innerText = selectedSeatsNumber;
    total.innerText = selectedSeatsNumber * ticketPrice;



};

allseats.addEventListener('click', function(e){
    if(
        e.target.classlist.contains('seat')&&
        !e.target.classlist.contains('occupied')
    ){
        e.target.classlist.toggle('selected');
    }
    
    updateUI();
    }, false );

movieSelect.addEventListener('change', e => {
        ticketPrice = +e.target.value;
        updateUI();
      });


