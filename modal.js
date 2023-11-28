var triggers = document.getElementsByClassName("trigger"),
    triggerArray = Array.from(triggers).entries(),
    closeButton = document.getElementsByClassName("btn-close"),
    modals = document.getElementsByClassName("modal"),
    modalContent = document.getElementsByClassName("modal-content"),
    modalShow = false;

for (let [index, trigger] of triggerArray) {

    const toggleModal = () => {
        if(modals[index].classList.contains("show-modal")){
            modalShow = false;
        }
        else {
            modalShow = true;
        }   
        modals[index].classList.toggle("show-modal");
    }

    trigger.addEventListener("click", toggleModal);
    modals[index].addEventListener("click", toggleModal);  
    closeButton[index].addEventListener("click", toggleModal);

    const modalContentClicked = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
    
    modalContent[index].addEventListener("click", modalContentClicked);
}