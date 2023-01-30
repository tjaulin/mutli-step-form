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
btnSubmit.addEventListener("click", goStep2);

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
    btnRetour.href = "#";
    // btnRetour.onclick = test;

    btnSubmit.classList.remove("container__infos__form__submit")
    btnSubmit.classList.add("container__infos__btns__submit");

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
}

// function test() {
//     infos.remove();
//     main.append(infosClone);
// }