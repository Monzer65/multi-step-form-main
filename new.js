const plans = document.querySelectorAll('.card');
const monthYearBtn = document.querySelector('.switch-wrapper');
const cardValues = document.querySelectorAll('.card-value');
const addOns = document.querySelectorAll('.step-3-card');
const addOnsValue = document.querySelectorAll('.value-per');
const finnishStp2 = document.querySelector('#selected-step-2-text');
const finnishStp2Span = document.querySelector('#finnish-yearly-monthly');
const finnishstp2Value = document.querySelector('#selected-step-2-value');
const cahngeLink = document.querySelector('#change-link');
const finnishAddOnsText = document.querySelectorAll('.selected-step-3-text');
const finnishAddOnsValue = document.querySelectorAll('.selected-step-3-value');

    for(card of plans){
        card.addEventListener('click', function(){
            for (card of plans){
                card.classList.remove('selected');
            }
            this.classList.add('selected');
            finnishStp2.textContent = this.querySelector('p').textContent ;
            finnishstp2Value.innerHTML = this.querySelector('.card-value').innerHTML;
                  
        })
    };


    monthYearBtn.addEventListener('click', function (){
        monthYearBtn.classList.toggle('yearly');
        if(monthYearBtn.classList.contains('yearly')){
            yearlyvalue();        
        }else{
            monthlyvalue();
        }
    });

function yearlyvalue(){
    cardValues[0].innerHTML = '90$/yr';
    cardValues[1].innerHTML = '120$/yr';
    cardValues[2].innerHTML = '150$/yr';
    finnishStp2Span.innerHTML = ('(Yearly)')
}
function monthlyvalue(){
    cardValues[0].innerHTML = '9$/mo';
    cardValues[1].innerHTML = '12$/mo';
    cardValues[2].innerHTML = '15$/mo';
    finnishStp2Span.innerHTML = ('(Monthly)')
}

for(addOnCard of addOns){
    addOnCard.addEventListener('click', function (){
        this.classList.toggle('selected');
        this.checked = true;
        for(fintxt of finnishAddOnsText){
            if(addOns[0].checked){
                finnishAddOnsText[0].textContent = addOns[0].querySelector('p').textContent;
                finnishAddOnsValue[0].textContent = addOnsValue[0].innerHTML
            }
            if(addOns[1].checked ){
                finnishAddOnsText[1].textContent = addOns[1].querySelector('p').textContent;
                finnishAddOnsValue[1].textContent = addOnsValue[1].textContent;
            }
            if(addOns[2].checked){
                finnishAddOnsText[2].textContent = addOns[2].querySelector('p').textContent;
                finnishAddOnsValue[2].textContent = addOnsValue[2].textContent;
            }
        }
    })
}



//current step is Set to be the first one
let currentStep = 0;

//display the curren step
showStep(currentStep);

function showStep(n){
    //display specefied step
    let step = document.querySelectorAll('.step');
    step[n].style.display = 'block';
    //show or hide the prev/next/confirm buttons
    if(n == 0){
        document.querySelector('.go-back-btn').style.display = 'none';
        document.querySelector('.go-back-btn').parentElement.style.justifyContent = 'flex-end';
    }else{
        document.querySelector('.go-back-btn').style.display = 'block';
        document.querySelector('.go-back-btn').parentElement.style.justifyContent = 'space-between';
    }
    //change next step button to confirm button in 4th step
    if(n == step.length - 2){
        document.querySelector('.next-btn').innerHTML = 'Confirm';
    }else{
        document.querySelector('.next-btn').innerHTML = 'Next Step';
    }
    //display none button in 5th step
    if(n == step.length - 1){
        document.querySelector('.next-btn').parentElement.style.display = 'none';
    }else{
        document.querySelector('.next-btn').parentElement.style.display = 'flex';
    }
    
    //run a function for slider numbers
    sliderIndicator(n);
}


function nextPrevStep(n) {
    let step = document.querySelectorAll('.step');
    // if the forms are not valid, do not runs the function
    if(n == 1 && !formValidate() && plansValidate())
    return false;

    //hide current step & increase step by 1
    step[currentStep].style.display = 'none';
    currentStep = currentStep + n;
    showStep(currentStep);
}

function formValidate(){
    let step, formInput, i, valid = true;
    step = document.querySelectorAll('.step');
    formInput = step[0].getElementsByTagName('input');
    cardSelect = step[1].getElementsByClassName('card');
    //loop through input to see if it's empty
    for(i = 0; i < formInput.length; i++){
        if(formInput[i].value == ""){
            formInput[i].classList.add('invalid');
            formInput[i].previousElementSibling.classList.add('invalid');
            valid = false;
        }else{
            formInput[i].previousElementSibling.classList.remove('invalid');
        }    
    }
    if(valid){
        document.querySelectorAll('.slider-number')[currentStep].classList.add('finish');
    }
    return valid;
}

// function for slider numbers indicator
function sliderIndicator(n){
    let i, x = document.querySelectorAll('.slider-number');
    for(i = 0; i < x.length;
         i++){
            x[i].className = x[i].className.replace('active', "");
         }
         x[n].className += ' active';
}


// function plansValidate(){
//     let step, cardSelect, i, valid = true;
//     step = document.querySelectorAll('.step');
//    for(i = 0; i < plans.length; i++){
//        if(plans[i].classList.contains('selected')){
//            alert('fff')
//        }else{
//            valid = false;
//            alert('ff')
//        }
//     }
//     if(valid){
//         document.querySelectorAll('.slider-number')[currentStep].classList.add('finish');
//     }
//     return valid;
    
// }