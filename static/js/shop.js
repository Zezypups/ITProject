let popup = document.getElementById('mypopup'),
        popupToggle = document.getElementById('exchange'),
        popupClose = document.querySelector('.close');

        popupToggle.onclick = function() {
        popup.style.display="block";
        };

        popupClose.onclick = function () {
        popup.style.display="none";
        }
        //Сделать так чтобы при нажатии в любое место на экране или при
        // нажатии на esc закрывалось модальное окно 

      