// getting elements from HTML doc
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowmodal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
//function to open model
const openModel = function(){
    console.log("Button Clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//function to remove modal
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<btnShowmodal.length ; i++)
    btnShowmodal[i].addEventListener('click',openModel)

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

// adding event listner for Escape button clicked 
//to close the modal

document.addEventListener('keydown',function(e){
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        closeModal();
    }
})






