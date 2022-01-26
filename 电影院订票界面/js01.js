const movieSelect = document.getElementById('movie');
const number = document.getElementById('number');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const total = document.getElementById('total')
const allseats = document.getElementById('AllSeats')




let ticketPrice = movieSelect.value;

updateUI();
updateCount();

function updateUI(){
    const selectedSeatsIndexs = JSON.parse(localStorage.getItem('selectedSeatsIndexs0'));

    if(selectedSeatsIndexs !==null && selectedSeatsIndexs.length > 0){
        seats.forEach((seat, index) => {
            if (selectedSeatsIndexs.indexOf(index) > -1) {
            seat.classList.add('selected');
          };
        });
        };

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex0')
    movieSelect.selectedIndex = selectedMovieIndex;
};



function updateCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsIndexs = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats0', JSON.stringify(selectedSeats));
    localStorage.setItem('selectedSeatsIndexs0', JSON.stringify(selectedSeatsIndexs));

    const selectedSeatsNumber = selectedSeats.length;

    number.innerText = selectedSeatsNumber;
    total.innerText = selectedSeatsNumber * ticketPrice;

    localStorage.setItem('selectedMovieIndex0', movieSelect.selectedIndex)
    localStorage.setItem('selectedMoviePrice0', movieSelect.value)

};

allseats.addEventListener('click', function(e){
    if(
        e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected');
        updateCount();
    }
    
    
    });

movieSelect.addEventListener('change', e => {
        ticketPrice = e.target.value;
        localStorage.setItem('selectedMovieIndex0', e.target.selectedIndex);
        localStorage.setItem('selectedMoviePrice0', e.target.value);
        ;
        updateCount();
      });

updateCount();

