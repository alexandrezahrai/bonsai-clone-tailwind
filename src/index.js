/* Pricing Toggle */
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", toggleMonthOrYear);

function toggleMonthOrYear() {
  var pricing = "monthly";
  const pill = document.getElementById("toggle-inner");
  const monthly = document.getElementById("monthly");
  const yearlyText = document.getElementById("yearly-text");

  const priceMonthly = document.getElementById("price-monthly");
  const priceYearly = document.getElementById("price-yearly");

  function moveToggle() {
    if (pill.style.transform === "") {
      pill.style.width = "207px";
      pill.style.transform =
        "translate3d(101px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
      monthly.style.color = "black";
      yearlyText.style.color = "white";
      pricing = "yearly";
      console.log(pricing);
    } else {
      pill.style.width = "";
      pill.style.transform = "";
      monthly.style.color = "";
      yearlyText.style.color = "";
      console.log(pricing);
    }
  }

  function switchPrice() {
    if (pricing === "yearly") {
      priceYearly.style.display = "flex";
      priceMonthly.style.display = "none";
      setTimeout(function () {
        priceYearly.style.opacity = "1";
        priceMonthly.style.opacity = "0";
      }, 1);
    } else {
      priceYearly.style.display = "none";
      priceMonthly.style.display = "flex";
      setTimeout(function () {
        priceYearly.style.opacity = "0";
        priceMonthly.style.opacity = "1";
      }, 1);
    }
  }

  moveToggle();
  switchPrice();
}

/* Accordion */
const triggers = document.getElementsByClassName("accordion-trigger");
for (const trigger of triggers) {
  trigger.addEventListener("click", toggleAccordion);
}

function toggleAccordion() {
  // Get the parent accordion item of the clicked trigger
  const accordionItem = this.closest(".accordion-item");

  // Find the chevron within the accordion item
  const chevron = accordionItem.querySelector(".accordion-icon");
  const content = accordionItem.querySelector(".accordion-item-content");

  // Check if the accordion item is open or closed using a flag
  const isOpen = accordionItem.classList.contains("open");

  // Toggle the accordion item and chevron rotation
  if (isOpen) {
    accordionItem.classList.remove("open");
    chevron.style.transform = "rotateZ(0deg)";
    setTimeout(function () {
      content.style.maxHeight = "0px";
    }, 1);
    console.log("closed");
  } else {
    accordionItem.classList.add("open");
    chevron.style.transform = "rotateZ(180deg)";
    setTimeout(function () {
      content.style.maxHeight = "500px";
    }, 1);
    console.log("open");
  }
}
