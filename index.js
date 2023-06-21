window.addEventListener('DOMContentLoaded', startFunction);

const likeButton = document.getElementsByClassName("button1")
/*let
*var
*/


function startFunction () {
    likeButton.addEventListener('click', changeStyle)
}

function changeStyle() {
    subscribeButton.style.background = "black";
}

//description