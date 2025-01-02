function route(event){
    event = event || window.event;
    event.preventDefault();

    const oldTagSelected = document.querySelector(".selected");
    
    if(oldTagSelected){
        oldTagSelected.classList.remove("selected");
    }

    event.target.classList.add('selected');
}