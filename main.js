const step2Cards = document.querySelectorAll('.step-2-card');
const step2CardText = document.querySelectorAll('.step-2-card-value');
const step2CardValues = document.querySelectorAll('.step-2-card-value span');
const switchMonthYear = document.querySelector('.switch-wrapper');
const yearlyDiscount = document.getElementsByClassName('yearly-discount');
const step3Cards = document.querySelectorAll('.step-3-card');
const step3CardsValues = document.querySelectorAll('.step-3-card-value');
let stp3value = document.querySelectorAll('.stp3value');
let stp3txt = document.querySelectorAll('.stp3moyr');
const summaryStep2Title = document.querySelector('#selected-step-2-text');
const summarystp2Text = document.querySelector('#selected-step-2-value');
const summaryStp2YealyMonthly = document.querySelector('#finnish-yearly-monthly');
const cahngeLink = document.querySelector('#change-link');
const summarystep3Text = document.querySelectorAll('.selected-step-3-text');
const summarystep3Value = document.querySelectorAll('.selected-step-3-value');
const totalText = document.querySelector('#total-text span')
const totalValue = document.querySelector('#total-value span');
const totalValueText = document.querySelector('#per-monthyear');

//selecting a plan (step-2)
for(card of step2Cards){
    card.addEventListener('click', function(){
        //by clcking on every plan, all active plans will be removed
        for (card of step2Cards){
            card.classList.remove('selected');
        }
        //by clicking on every plan, active class will be added to that specific plan
        this.classList.add('selected');
        //passing the title of the plan to the summary section (step-4)
        summaryStep2Title.innerHTML = this.querySelector('.step-2-card-text p strong').innerHTML;

        step2Values ();
        totalval();
    }); 
};

//handling the click event of monthly and yearly switch
switchMonthYear.addEventListener('click', function (){
    switchMonthYear.classList.toggle('yearly');
    if(switchMonthYear.classList.contains('yearly')){
        summaryStp2YealyMonthly.textContent = '(Yearly)';
        totalText.innerHTML = "Year";
        totalValueText.innerHTML ="/yr";
        yearlyvalue();
    }else{
        
        summaryStp2YealyMonthly.textContent = '(Monthly)';
        totalText.innerHTML = "Month";
        totalValueText.innerHTML ="/mo";
        monthlyvalue();
    }  
    step2Values ();
    totalval();
});

//passing the value of selected plan (step-2) to the summary section
function step2Values (){
    for(i of step2Cards){
        if(i.classList.contains('selected')){
            summarystp2Text.textContent = i.querySelector('.step-2-card-value').textContent;
        };
    };
};

//this function is called when yearly switch is activated
function yearlyvalue(){
    for(i = 0; i < step2CardValues.length; i++){
        step2CardValues[i].innerHTML = parseInt(step2CardValues[i].innerHTML) * 10;
        step2CardText[i].innerHTML=`$${step2CardValues[i].textContent} /yr`
    };
    for(i = 0; i < stp3value.length; i++){
        stp3value[i].innerHTML = parseInt(stp3value[i].innerHTML) * 10;
    }
    for(i = 0; i < stp3txt.length; i++){
        stp3txt[i].innerHTML = '/yr'
    }
    for(discount of yearlyDiscount){
        discount.classList.add('yearly');
    };
};

//this function is called when monthly switch is activated
function monthlyvalue(){
    for(i = 0; i < step2CardValues.length; i++){
        step2CardValues[i].innerHTML = parseInt(step2CardValues[i].innerHTML) / 10;
        step2CardText[i].innerHTML=`$${step2CardValues[i].textContent} /mo`;
    };
    for(i = 0; i < stp3value.length; i++){
        stp3value[i].innerHTML = parseInt(stp3value[i].innerHTML) / 10;
    }
    for(i = 0; i < stp3txt.length; i++){
        stp3txt[i].innerHTML = '/mo';
    }
    for(discount of yearlyDiscount){
        discount.classList.remove('yearly');
    };
};

//click event for every add-on in step-3
for(i = 0; i < step3Cards.length; i++){
    step3Cards[i].addEventListener('click', function (){
        //activating or deactivating every add-on by click on the card and checking the checkbox
        this.classList.toggle('selected');
        this.checked = true;
        //passing the content of first add-on to the summary section (step-4) if they are activated
        if(step3Cards[0].classList.contains('selected')){
            summarystep3Text[0].textContent = step3Cards[0].querySelector('.step-3-card-title').textContent;
            summarystep3Value[0].textContent = `$${stp3value[0].textContent}${stp3txt[0].textContent}`;
        //removing the content of first add-on in the summary section (step-4) if they are deactivated
        }else{
            summarystep3Text[0].textContent = "";
            summarystep3Value[0].textContent = "";
        }
        //passing the content of second add-on to the summary section (step-4) if they are activated
        if(step3Cards[1].classList.contains('selected')){
            summarystep3Text[1].textContent = step3Cards[1].querySelector('.step-3-card-title').textContent;
            summarystep3Value[1].textContent = `$${stp3value[1].textContent}${stp3txt[1].textContent}`;
        //removing the content of second add-on in the summary section (step-4) if they are deactivated
        }else{
            summarystep3Text[1].textContent = "";
            summarystep3Value[1].textContent = "";
        }
        //passing the content of third add-on to the summary section (step-4) if they are activated
        if(step3Cards[2].classList.contains('selected')){
            summarystep3Text[2].textContent = step3Cards[2].querySelector('.step-3-card-title').textContent;
            summarystep3Value[2].textContent = `$${stp3value[2].textContent}${stp3txt[2].textContent}`;
        //removing the content of third add-on in the summary section (step-4) if they are deactivated    
        }else{
            summarystep3Text[2].textContent = "";
            summarystep3Value[2].textContent = "";
        }
    });   
};

//function for calculating the total amount at the step-4. this function is called on click events at step-2 and step-3
function totalval(){
    let a = document.querySelector("#selected-step-2-value").innerHTML;
    let b = document.querySelectorAll('.selected-step-3-value')[0].innerHTML;
    let c = document.querySelectorAll('.selected-step-3-value')[1].innerHTML;
    let d = document.querySelectorAll('.selected-step-3-value')[2].innerHTML;
    let reg = /\d+/g;
    let res1 = a.match(reg);
    let num1 = parseInt(res1[0])
    let num2;
    let num3;
    let num4;
    if(b == ""){
        num2 = 0;
    }else if(switchMonthYear.classList.contains('yearly')){
        num2 = 10;
    }else{
        num2 = 1;
    }
    if(c == ""){
        num3 = 0;
    }else if(switchMonthYear.classList.contains('yearly')){
        num3 = 20;
    }else{
        num3 = 2;
    }
    if(d == ""){
        num4 = 0;
    }else if(switchMonthYear.classList.contains('yearly')){
        num4 = 20;
    }else{
        num4 = 2;
    }
    totalValue.innerHTML = num1 + num2+ num3 + num4; 
  
}

//the following is for changing steps by every click on next or back buttons and changing the slidebar indicators;

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
    //do not display any button in 5th step
    if(n == step.length - 1){
        document.querySelector('.next-btn').parentElement.style.display = 'none';
        setTimeout(function(){ window.location.reload()}, 2000);
    }else{
        document.querySelector('.next-btn').parentElement.style.display = 'flex';
    }   
    //run a function for slidebar numbers
    sliderIndicator(n);
}

function nextPrevStep(n) {
    let step = document.querySelectorAll('.step');
    // if the forms are not valid, do not runs the function
    if(n == 1 && !formValidate())
    return false;

    //hide current step & increase step by 1
    step[currentStep].style.display = 'none';
    currentStep = currentStep + n;
    showStep(currentStep);
    totalval();
}

function formValidate(){
    //regular expresion for phone number
    let phoneRegex = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
     //regular expresion for email address
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let step, formInput, i, valid = true;
    step = document.querySelectorAll('.step');
    formInput = step[0].getElementsByTagName('input');
    //loop through input to see if it's empty
    for(i = 0; i < formInput.length; i++){
        if(formInput[i].value == ""){
            formInput[i].classList.add('invalid');
            formInput[i].previousElementSibling.classList.add('empty');
            valid = false;
        } 
        //check for validation of email
        else if(!formInput[1].value == "" && !formInput[1].value.match(emailRegex)){
            formInput[1].classList.add('invalid');
            formInput[1].previousElementSibling.classList.add('invalid');
            valid = false;
        }  
        //check for validation of phone
        else if(!formInput[2].value.match(phoneRegex) && !formInput[2].value ==""){
            formInput[2].classList.add('invalid');
            formInput[2].previousElementSibling.classList.add('invalid');
            valid = false;
        }   
        //if valid, then remove all errors
        else{
            formInput[i].previousElementSibling.classList.remove('empty');
            formInput[i].previousElementSibling.classList.remove('invalid');
            formInput[i].classList.remove('invalid');
        } 
    }
    //if valid, then add the finnish state to slidebar number
    if(valid){
        document.querySelectorAll('.slider-number')[currentStep].classList.add('finnish');    
    }
    return valid;
}
//this function showes current active slidebar numbers
function sliderIndicator(n){
    let i, x = document.querySelectorAll('.slider-number');
    for(i = 0; i < x.length;
         i++){
            x[i].className = x[i].className.replace('active', "");
         }
         x[n].className += ' active';
}
