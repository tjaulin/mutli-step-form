// Variables containing the user's values
var nameUser = "";
var emailUser = "";
var telUser = "";

var nameOfPlanUser = "";
var priceOfPlanUser = "";
var periodicityUser = "";

const main = document.querySelector(".container");
const infos = document.querySelector(".container__infos");
const sidebar = document.querySelector(".container__sidebar");
const listLiSidebar = document.querySelectorAll(".container__sidebar__list__li");
const form = document.querySelector(".container__infos__form");
const btnSubmit = document.querySelector(".container__infos__form__submit");
const infosClone = infos.cloneNode(true);

btnSubmit.addEventListener("click", function(event) {
    event.preventDefault();
});
// btnSubmit.addEventListener("click", goStep2);

const afterSubmitButtons = btnSubmit;
const divButton = document.createElement("div");
if (window.screen.availWidth <= 770) {
    afterSubmitButtons.classList.remove("container__infos__form__submit");
    afterSubmitButtons.classList.add("container__infos__btns__submit")
    btnSubmit.remove();
    divButton.classList.add("container__btns", "forms");
    divButton.append(afterSubmitButtons);
    main.append(divButton);
}

function goStep2() {
    infos.innerHTML = "";
    infos.classList.add("infos__plans__mobile");
    
    // ----- SIDEBAR -----
    listLiSidebar.forEach(e => {
        if (e.classList.contains("active")) {
            e.classList.remove("active");
        } else if (e.classList.contains("step2")) {
            e.classList.add("active");
        }
    });
    
    // ----- TITLE -----
    const title = document.createElement("h1");
    title.innerText = "Select your plan";
    
    // ----- PARAGRAPH -----
    const paragraph = document.createElement("p");
    paragraph.innerText = "You have the option of monthly or yearly billing.";
    
    // ----- PLANS -----
    const plans = document.createElement("div");
    plans.classList.add("container__infos__plans");
    
    const arcade = document.createElement("div");
    const h2Arcade = document.createElement("h2");
    const arcadePrice = document.createElement("span");
    arcadePrice.classList.add("arcadePrice", "price");
    arcadePrice.innerText = "$9/mo"
    const divIconArcade = document.createElement("div");
    divIconArcade.classList.add("icon-plans");
    const iconArcade = document.createElement("img");
    arcade.classList.add("plan");
    h2Arcade.innerText = "Arcade";
    iconArcade.src = "../assets/images/icon-arcade.svg";
    
    const advanced = document.createElement("div");
    const h2Advanced = document.createElement("h2");
    const advancedPrice = document.createElement("span");
    advancedPrice.classList.add("advancedPrice", "price");
    advancedPrice.innerText = "$12/mo"
    const divIconAdvanced = document.createElement("div");
    divIconAdvanced.classList.add("icon-plans");
    const iconAdvanced = document.createElement("img");
    advanced.classList.add("plan");
    h2Advanced.innerText = "Advanced";
    iconAdvanced.src = "../assets/images/icon-advanced.svg";
    
    const pro = document.createElement("div");
    const h2Pro = document.createElement("h2");
    const proPrice = document.createElement("span");
    proPrice.classList.add("proPrice", "price");
    proPrice.innerText = "$15/mo"
    const divIconPro = document.createElement("div");
    divIconPro.classList.add("icon-plans");
    const iconPro = document.createElement("img");
    pro.classList.add("plan");
    h2Pro.innerText = "Pro";
    iconPro.src = "../assets/images/icon-pro.svg";
    
    
    
    // ----- MONTHLY/YEARLY BUTTONS -----
    const divMonthYear = document.createElement("div");
    divMonthYear.classList.add("container__infos__rates", "monthly");
    const monthly = document.createElement("span");
    monthly.innerText = "Monthly";
    const yearly = document.createElement("span");
    yearly.innerText = "Yearly";
    const labelToggle = document.createElement("label");
    labelToggle.classList.add("switch");
    const btnToggle = document.createElement("input");
    btnToggle.type = "checkbox"
    const spanToggle = document.createElement("span");
    spanToggle.classList.add("slider");
    
    const freeMonthsArcade = document.createElement("p");
    freeMonthsArcade.classList.add("freeMonths");
    const freeMonthsAdvanced = document.createElement("p");
    freeMonthsAdvanced.classList.add("freeMonths");
    const freeMonthsPro = document.createElement("p");
    freeMonthsPro.classList.add("freeMonths");
    
    freeMonthsArcade.innerText = "2 months free";
    freeMonthsAdvanced.innerText = "2 months free";
    freeMonthsPro.innerText = "2 months free";
    
    spanToggle.addEventListener("click", function(){
        if (divMonthYear.classList.contains("monthly")) {
            divMonthYear.classList.remove("monthly");
            divMonthYear.classList.add("yearly");
            
            // Yearly data
            // Arcade
            arcadePrice.innerText = "$90/yr"
            // Advanced
            advancedPrice.innerText = "$120/yr"
            // Pro
            proPrice.innerText = "$150/yr"
            
            freeMonthsArcade.style.display = "block";
            freeMonthsAdvanced.style.display = "block";
            freeMonthsPro.style.display = "block";
            
        } else {
            divMonthYear.classList.remove("yearly");
            divMonthYear.classList.add("monthly");
            
            // Monthly data
            // Arcade
            arcadePrice.innerText = "$9/mo"
            // Advanced
            advancedPrice.innerText = "$12/mo"
            // Pro
            proPrice.innerText = "$15/mo"
            
            // freeMonthsArcade.remove();
            // freeMonthsAdvanced.remove();
            // freeMonthsPro.remove();
            
            freeMonthsArcade.style.display = "none";
            freeMonthsAdvanced.style.display = "none";
            freeMonthsPro.style.display = "none";
        }
    });
    
    
    divIconArcade.append(iconArcade);
    divIconAdvanced.append(iconAdvanced);
    divIconPro.append(iconPro);
    arcade.append(divIconArcade, h2Arcade, arcadePrice, freeMonthsArcade);
    advanced.append(divIconAdvanced, h2Advanced, advancedPrice, freeMonthsAdvanced)
    pro.append(divIconPro, h2Pro, proPrice, freeMonthsPro);
    labelToggle.append(btnToggle, spanToggle);
    plans.append(arcade, advanced, pro);
    divMonthYear.append(monthly, labelToggle, yearly);
    
    
    // ----- BUTTONS -----
    const bgBtns = document.createElement("div");
    bgBtns.classList.add("container__infos__btns");

    const btnRetour = document.createElement("a");
    btnRetour.innerHTML = "Go Back";
    btnRetour.href = "index.html";
    // btnRetour.onclick = backPersonalInfo;

    btnSubmit.classList.remove("container__infos__form__submit")
    btnSubmit.classList.add("container__infos__btns__submit");
    btnSubmit.setAttribute("onclick", "goAddOns()");

    bgBtns.append(btnRetour, btnSubmit);

    infos.append(title, paragraph, plans, divMonthYear, bgBtns);

    // PLANS ON CLICK
    const plansClick = document.querySelectorAll(".plan");
    plansClick.forEach(function(element) {
        element.addEventListener("click", function() {
            plansClick.forEach(function(i){
                if (i.classList.contains("activePlan")) {
                    i.classList.remove("activePlan");
                }
            })
            element.classList.toggle("activePlan");
        });
    });

    const infosButtons = document.querySelector(".container__infos__btns");
    if (window.screen.availWidth <= 770) {
        const afterInfosButtons = infosButtons;
        divButton.remove();
        afterInfosButtons.classList.remove('container__infos__btns');
        afterInfosButtons.classList.add('container__btns');
        infosButtons.remove();
        main.append(afterInfosButtons);
    }

    // DEBUG
    console.log(nameUser);
    console.log(emailUser);
    console.log(telUser);
}

function verification() {
    clearMessages();

    const divLabels = document.querySelectorAll(".labels");

    const valueName = document.getElementById("name").value;
    const valueEmail = document.getElementById("email").value;
    const valueTel = document.getElementById("tel").value;

    if (valueName ==  "") {
        const errorLabelName = document.createElement("label");
        errorLabelName.setAttribute("for", "name");
        errorLabelName.classList.add("errorInput");
        errorLabelName.innerText = "This field is required";
        const inputName = document.getElementById("name");
        inputName.classList.add("error");
        divLabels.forEach(function(e) {
            if (e.classList.contains("labelsName")) {
                e.append(errorLabelName);
            }
        });
        return (false);
    } else if (valueEmail == "") {
        const errorLabelEmail = document.createElement("label");
        errorLabelEmail.setAttribute("for", "email");
        errorLabelEmail.classList.add("errorInput");
        errorLabelEmail.innerText = "This field is required";
        const inputEmail = document.getElementById("email");
        inputEmail.classList.add("error");
        divLabels.forEach(function(e) {
            if (e.classList.contains("labelsEmail")) {
                e.append(errorLabelEmail);
            }
        });
        return (false);
    } else if (valueTel == "") {
        const errorLabelTel = document.createElement("label");
        errorLabelTel.setAttribute("for", "tel");
        errorLabelTel.classList.add("errorInput");
        errorLabelTel.innerText = "This field is required";
        const inputTel = document.getElementById("tel");
        inputTel.classList.add("error");
        divLabels.forEach(function(e) {
            if (e.classList.contains("labelsTel")) {
                e.append(errorLabelTel);
            }
        });
        return (false);
    } else if (ValidateName(valueName) && ValidateEmail(valueEmail) && ValidateTel(valueTel)){
        nameUser = valueName;
        emailUser = valueEmail;
        telUser = valueTel;
        goStep2();
    } else {
        return (false);
    }
}

function clearMessages() {
    const errorInput = document.querySelectorAll(".errorInput");

    errorInput.forEach(function(e){
        e.remove();
    })

    const nameInput = document.getElementById("name");
    nameInput.classList.remove("error");
    const emailInput = document.getElementById("email");
    emailInput.classList.remove("error");
    const telInput = document.getElementById("tel");
    telInput.classList.remove("error");
}

function ValidateName(name) {
    const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    if (regexName.test(name)) {
        return (true);
    } else {
        const divLabels = document.querySelectorAll(".labels");
        const errorLabelName = document.createElement("label");
        errorLabelName.setAttribute("for", "name");
        errorLabelName.classList.add("errorInput");
        errorLabelName.innerText = "Invalid format (Name Surname)";
        const inputName = document.getElementById("name");
        inputName.classList.add("error");
        divLabels.forEach(function(e) {
            if (e.classList.contains("labelsName")) {
                e.append(errorLabelName);
            }
        });
        return (false);
    }
}

function ValidateEmail(mail) {
    const regexMail = /^[a-zA-Z0-9.!#$%&\'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (regexMail.test(mail)) {
        return (true);
    } else {
        const divLabels = document.querySelectorAll(".labels");
        const errorLabelEmail = document.createElement("label");
        errorLabelEmail.setAttribute("for", "email");
        errorLabelEmail.classList.add("errorInput");
        errorLabelEmail.innerText = "Invalid format (example@gmail.com)";
        const inputEmail = document.getElementById("email");
        inputEmail.classList.add("error");
        divLabels.forEach(function(e) {
            if (e.classList.contains("labelsEmail")) {
                e.append(errorLabelEmail);
            }
        });
        return (false);
    }
}

function ValidateTel(tel) {
    const regexTel = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (regexTel.test(tel)) {
        return (true);
    } else {
        const divLabels = document.querySelectorAll(".labels");
        const errorLabelTel = document.createElement("label");
        errorLabelTel.setAttribute("for", "tel");
        errorLabelTel.classList.add("errorInput");
        errorLabelTel.innerText = "Invalid format (01 23 45 67 89)"; 
        const inputTel = document.getElementById("tel");
        inputTel.classList.add("error");
        divLabels.forEach(function(e) {
            if (e.classList.contains("labelsTel")) {
                e.append(errorLabelTel);
            }
        });""
        return (false);
    }
}

function goAddOns(periodicity) {

    const containerInfosRates = document.querySelector(".container__infos__rates");
    if (containerInfosRates.classList.contains("monthly")) {
        periodicityUser = "monthly";
    } else {
        periodicityUser = "yearly";
    }
    infos.innerHTML = "";
    periodicity = periodicityUser;

    // ----- SIDEBAR -----
    listLiSidebar.forEach(e => {
        if (e.classList.contains("active")) {
            e.classList.remove("active");
        } else if (e.classList.contains("step3")) {
            e.classList.add("active");
        }
    });
    
    // ----- TITLE -----
    const title = document.createElement("h1");
    title.innerText = "Pick add-ons";
    
    // ----- PARAGRAPH -----
    const paragraph = document.createElement("p");
    paragraph.innerText = "Add-ons help enhance your gaming experience.";


    // ----- ADD-ONS -----
    if (periodicity == "monthly") {
        // CODE
    } else {
        // CODE
    }
 

    // ----- BUTTONS -----
    const bgBtns = document.createElement("div");
    bgBtns.classList.add("container__infos__btns");

    const btnRetour = document.createElement("a");
    btnRetour.innerHTML = "Go Back";
    btnRetour.href = "index.html";
    // btnRetour.onclick = backPersonalInfo;

    // btnSubmit.classList.remove("container__infos__form__submit")
    // btnSubmit.classList.add("container__infos__btns__submit");

    bgBtns.append(btnRetour, btnSubmit);

    infos.append(title, paragraph, bgBtns);
}

// function backPersonalInfo() {
//     infos.remove();
//     main.innerHTML = `
//     <div class="container__sidebar">
//       <ul class="container__sidebar__list">
//         <li class="container__sidebar__list__li step1 active">
//           <span>1</span>
//           <div class="sidebar__steps">
//             <span>STEP 1</span>
//             <p>YOUR INFO</p>
//           </div>
//         </li>
//         <li class="container__sidebar__list__li step2">
//           <span>2</span>
//           <div class="sidebar__steps">
//             <span>STEP 2</span>
//             <p>SELECT PLAN</p>
//           </div>
//         </li>
//         <li class="container__sidebar__list__li step3">
//           <span>3</span>
//           <div class="sidebar__steps">
//             <span>STEP 3</span>
//             <p>ADD-ONS</p>
//           </div>
//         </li>
//         <li class="container__sidebar__list__li step4">
//           <span>4</span>
//           <div class="sidebar__steps">
//             <span>STEP 4</span>
//             <p>SUMMARY</p>
//           </div>
//         </li>
//       </ul>
//     </div>
//     <div class="container__infos">

//       <h1>Personal info</h1>
//       <p>Please provide your name, email address, and phone number.</p>

//       <form class="container__infos__form" method="post">
//         <div class="labels labelsName">
//           <label for="name">Name</label>
//           <!-- <label for="name" class="errorInput">This field is required</label> -->
//         </div>
//         <input type="text" name="name" id="name" placeholder="e.g Stephen King">

//         <div class="labels labelsEmail">
//           <label for="email">Email Address</label>
//         </div>
//         <input type="email" name="email" id="email" placeholder="e.g stephenking@lorem.com">

//         <div class="labels labelsTel">
//           <label for="tel">Phone Number</label>
//         </div>
//         <input type="tel" name="tel" id="tel" placeholder="e.g +12 34 56 78 90">

//         <button class="container__infos__form__submit" onclick="verification()">Next Step</button>
//       </form>
//     </div>
//     `
//     btnSubmit.removeEventListener("click", function(event) {
//         event.preventDefault();
//     });
//     const inputName = document.getElementById("name");
//     inputName.value = nameUser;
//     const inputEmail = document.getElementById("email");
//     inputEmail.value = emailUser;
//     const inputTel = document.getElementById("tel");
//     inputTel.value = telUser;
// }