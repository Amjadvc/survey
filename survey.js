const data = {
  responsiveDesign: [
    { mobile: "Mobile-first approach" },
    { desktop: "Desktop-first approach" },
    { both: "Both, depending on project" },
  ],
  frameworks: [
    { react: "React" },
    { angular: "Angular" },
    { vue: "Vue.js" },
    { svelte: "Svelte" },
  ],
  skills: [
    { html: "HTML" },
    { css: "CSS" },
    { js: "JavaScript" },
    { react: "React.js" },
    { vue: "Vue.js" },
    { angular: "Angular.js" },
    { sass: "Sass" },
    { bootstrap: "Bootstrap" },
    { tailwindcss: "Tailwindcss" },
  ],
  experienceLevels: [
    { Beginner: "Beginner" },
    { Intermediate: "Intermediate" },
    { Advanced: "Advanced" },
    { Expert: "Expert" },
  ],
  tools: [
    { graphQL: "GraphQL" },
    { jQuery: "jQuery" },
    { webpack: "Webpack" },
    { babel: "Babel" },
    { eslint: "ESLint" },
    { redux: "Redux" },
  ],
  experienceYears: [
    { 1: "less than 1 year" },
    { 3: "1-3 years" },
    { 5: "3-5 years" },
    { 8: "5+ years" },
  ],
};

const submitFrom = document.querySelector("#form");
submitFrom.addEventListener("submit", function (e) {
  e.preventDefault();
});

// moveFromOneStepTwoAnother
const formSteps = [...submitFrom.querySelectorAll("[data-step]")];
const btnsBack = document.querySelectorAll("[data-previous]");

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("flex");
});

function showCurrentStep(methode) {
  methode === "plus" ? (currentStep += 1) : (currentStep -= 1);
  let dirction = "";
  dirction = methode === "plus" ? "next" : "back";
  formSteps.forEach((step, index) => {
    if (index === currentStep) {
      step.classList.remove("hidden");
      step.classList.add("flex");

      if (dirction === "back") {
        step.classList.add("animate-slide-prev");
      } else {
        step.classList.add("animate-slide-next");
      }

      setTimeout(() => {
        step.classList.remove("animate-slide-prev", "animate-slide-next");
      }, 500);
    } else {
      step.classList.remove("flex");
      step.classList.add("hidden");
    }
  });

  updateProgressBar();
}

//back to home page
const backButtonsHome = document.querySelectorAll("[data-previous-home]");
Array.from(backButtonsHome).forEach((btn) => {
  btn.addEventListener("click", function () {
    window.location.href = "/";
  });
});

// End moveFromOneStepTwoAnother

// start progrees
const progress = document.querySelector("[data-progress]");

const totalSteps = formSteps.length - 1;
const stepWidth = 100 / totalSteps;

console.log(totalSteps);

function updateProgressBar() {
  console.log(currentStep);
  const progressWidth = stepWidth * currentStep;
  progress.style.cssText = `width: ${progressWidth}%; transition:0.3s ease-in-out`;
}
// End progrees

function backStep() {
  btnsBack.forEach((btnBack) => {
    btnBack.addEventListener("click", () => {
      if (currentStep > 0) {
        showCurrentStep("minus");
      }
    });
  });
}
backStep();

//setError
const setError = (element, message, placeholder) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('[error="error"]');

  errorDisplay.innerText = message;
  element.setAttribute("placeholder", placeholder);
  element.classList.remove("border-primary", "focus:border-white");
  element.classList.add("border-rose-300", "shadow-inputShadowError");
};

//setSucces
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('[error="error"]');
  errorDisplay.innerText = "";
  element.classList.remove("border-rose-300", "shadow-inputShadowError");
  element.classList.add("border-primary", "focus:border-white");
};

//generateBtns
function generateBtn(btnsData, placeToShow) {
  btnsData.map((btn_data) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("data-next", "");
    btn.value = Object.keys(btn_data).join("");
    btn.textContent = Object.values(btn_data).join("");
    const flash = document.createElement("div");

    btn.classList.add(
      "group",
      "overflow-hidden",
      "relative",
      "w-80",
      "h-16",
      "outline-none",
      "shadow-desginApproach",
      "flex",
      "justify-center",
      "font-bold",
      "items-center",
      "rounded-md",
      "text-xl",
      "px-7",
      "bg-[#d470925c]",
      "border",
      "border-[#833f56]",
      "text-[#5f5559]",
      "hover:border-white",
      "hover:scale-105",
      "hover:text-secondary",
      "duration-200",
      "max-[380px]:w-full",
      "max-[380px]:text-base",
      "max-[380px]:leading-none",
      "max-[380px]:h-16"
    );

    flash.classList.add(
      "absolute",
      "w-0",
      "h-0",
      "left-2/4",
      "top-2/4",
      "-translate-x-2/4",
      "-translate-y-2/4",
      "-z-20",
      "bg-[#cb545473]",
      "group-hover:animate-flashing"
    );
    btn.appendChild(flash);
    placeToShow.appendChild(btn);
  });
}

//next step
function nextAction(btns) {
  Array.from(btns).map((btn) => {
    btn.addEventListener("click", () => {
      showCurrentStep("plus");
    });
  });
}
//fromate number
function formatPhoneNumber() {
  let input = phoneNumberInp.value.replace(/\D/g, "");
  let formattedNumber = "";

  formattedNumber = input.length > 0 ? "(" + input.slice(0, 3) : "";
  formattedNumber += input.length > 3 ? ") " + input.slice(3, 6) : "";
  formattedNumber += input.length > 6 ? "-" + input.slice(6, 9) : "";
  formattedNumber += input.length > 9 ? "-" + input.slice(9, 12) : "";

  phoneNumberInp.value = formattedNumber;
}

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\d{12}$/;
  return phoneRegex.test(phoneNumber);
};

function generateCheckBoxes(checkBoxData, showContainer) {
  checkBoxData.map((ele) => {
    const [key, value] = Object.entries(ele)[0];
    const divConatiner = document.createElement("div");
    divConatiner.classList.add(
      "flex",
      "justify-start",
      "items-center",
      "gap-x-2",
      "w-32",
      "sm:w-[150px]"
    );
    const inputEle = document.createElement("input");
    inputEle.id = key;
    inputEle.type = "checkbox";
    inputEle.name = "skills";
    inputEle.value = key;

    inputEle.classList.add(
      "appearance-none",
      "-webkit-appearance-none",
      "m-0",
      "w-8",
      "h-8",
      "border",
      "border-solid",
      "rounded-[3px]",
      "border-secondary",
      "grid",
      "place-content-center",
      "bg-[#976e72]"
    );

    const labelEle = document.createElement("label");
    labelEle.setAttribute("for", key);
    labelEle.classList.add(
      "text-base",
      "sm:text-lg",
      "font-custmeFont",
      "text-[#5f3438]"
    );
    labelEle.textContent = value;
    divConatiner.appendChild(inputEle);
    divConatiner.appendChild(labelEle);
    showContainer.appendChild(divConatiner);
  });
}

function validateCheckboxes(stepNum) {
  const showError = stepNum.querySelector("[data-target='error']");
  let isValid = true;
  const allCheckBoxes = stepNum.querySelectorAll("[type='checkbox']");
  const isChecked = Array.from(allCheckBoxes).some(
    (checkBox) => checkBox.checked
  );

  if (!isChecked) {
    showError.textContent = "Please check one of the checkboxes above";
    isValid = false;
  } else {
    showError.textContent = "";
  }

  return isValid;
}

function ChecAllkBoxes(stepNum) {
  const allCheckBoxes = stepNum.querySelectorAll("[type='checkbox']");
  Array.from(allCheckBoxes).forEach((check) => {
    check.addEventListener("click", () => validateCheckboxes(stepNum));
  });
}

//step1
const stepOne = document.querySelector("#step1");
const summitButtonOne = stepOne.querySelector("[data-next]");
const firstNameInp = document.querySelector("#firstName");
const lastNameInp = document.querySelector("#lastName");

summitButtonOne.addEventListener("click", function () {
  if (validateStepOneInputs()) {
    showCurrentStep("plus");
  }

  firstNameInp.addEventListener("input", validateStepOneInputs);
  lastNameInp.addEventListener("input", validateStepOneInputs);
});

const validateStepOneInputs = () => {
  let isValid = true;

  const firstNameValue = firstNameInp.value.trim();
  const lastNameValue = lastNameInp.value.trim();

  if (firstNameValue === "" || firstNameValue.length < 2) {
    setError(firstNameInp, "First name is requird.", "First Name");
    isValid = false;
  } else {
    setSuccess(firstNameInp);
  }

  if (lastNameValue === "") {
    setError(lastNameInp, "Last name is requird.", "Last Name");
    isValid = false;
  } else {
    setSuccess(lastNameInp);
  }

  return isValid;
};

//step2
const stepTwo = document.querySelector("#step2");
const summitButtonTwo = stepTwo.querySelector("[data-next]");
const emailAddressInp = document.querySelector("#emailAddress");
const phoneNumberInp = document.querySelector("#phoneNumber");

phoneNumberInp.addEventListener("input", formatPhoneNumber);
summitButtonTwo.addEventListener("click", function () {
  if (validiteStepTwoInp()) {
    showCurrentStep("plus");
  }

  emailAddressInp.addEventListener("input", validiteStepTwoInp);
  phoneNumberInp.addEventListener("input", validiteStepTwoInp);
});

const validiteStepTwoInp = () => {
  let isValid = true;

  const emailAddressInpValue = emailAddressInp.value.trim();
  const phoneNumberInpValue = phoneNumberInp.value.trim().replace(/\D/g, "");

  if (emailAddressInpValue === "") {
    setError(emailAddressInp, " Email Address is requird.", "Email");
    isValid = false;
  } else if (!isValidEmail(emailAddressInpValue)) {
    setError(emailAddressInp, "Please enter a valid email.", "Email");
    isValid = false;
  } else {
    setSuccess(emailAddressInp);
  }

  if (phoneNumberInpValue === "") {
    setError(phoneNumberInp, "Phone number is requird.", "Phone");
    isValid = false;
  } else if (!isValidPhoneNumber(phoneNumberInpValue)) {
    setError(phoneNumberInp, "Please enter a valid phone number.", "Phone");
    isValid = false;
  } else {
    setSuccess(phoneNumberInp);
  }

  return isValid;
};

//step3
const stepThree = document.querySelector("#step3");
const placeToShowDataStepThree = stepThree.querySelector("[data-show]");

generateBtn(data.responsiveDesign, placeToShowDataStepThree);
const allBtnsThree = placeToShowDataStepThree.querySelectorAll("[data-next]");
nextAction(allBtnsThree);

//step4
const stepFour = document.querySelector("#step4");
const placeToShowDataStepFour = stepFour.querySelector("[data-show]");

generateBtn(data.frameworks, placeToShowDataStepFour);
const allBtnsFour = placeToShowDataStepFour.querySelectorAll("[data-next]");
nextAction(allBtnsFour);

//step5
const stepFive = document.querySelector("#step5");
const summitButtonFive = stepFive.querySelector("[data-next]");
const showCheckBoxes = stepFive.querySelector("[data-show]");

generateCheckBoxes(data.skills, showCheckBoxes);

summitButtonFive.addEventListener("click", function () {
  if (validateCheckboxes(stepFive)) {
    showCurrentStep("plus");
  }
});

ChecAllkBoxes(stepFive);

//step6
const stepSix = document.querySelector("#step6");
const placeToShowDataStepSix = stepSix.querySelector("[data-show]");
generateBtn(data.experienceLevels, placeToShowDataStepSix);
const allBtnsSix = placeToShowDataStepSix.querySelectorAll("[data-next]");
nextAction(allBtnsSix);

//step7
const stepSeven = document.querySelector("#step7");
const placeToShowDataStepSeven = stepSeven.querySelector("[data-show]");
generateBtn(data.experienceLevels, placeToShowDataStepSeven);
const allBtnsSeven = placeToShowDataStepSeven.querySelectorAll("[data-next]");
nextAction(allBtnsSeven);

//step8
const stepEight = document.querySelector("#step8");
const placeToShowDataStepEight = stepEight.querySelector("[data-show]");
generateBtn(data.experienceLevels, placeToShowDataStepEight);
const allBtnsEight = placeToShowDataStepEight.querySelectorAll("[data-next]");
nextAction(allBtnsEight);

//setep9
const stepNine = document.querySelector("#step9");
const summitButtonNine = stepNine.querySelector("[data-next]");
const showCheckBoxesNine = stepNine.querySelector("[data-show]");

generateCheckBoxes(data.tools, showCheckBoxesNine);

summitButtonNine.addEventListener("click", function () {
  if (validateCheckboxes(stepNine)) {
    showCurrentStep("plus");
  }
});

ChecAllkBoxes(stepNine);

//setep10
const stepTen = document.querySelector("#step10");
const placeToShowDataStepTen = stepTen.querySelector("[data-show]");
generateBtn(data.experienceYears, placeToShowDataStepTen);
const allBtnsTen = placeToShowDataStepTen.querySelectorAll("[data-next]");
nextAction(allBtnsTen);

///

function formatSalary(elementInp) {
  let input = elementInp.value.replace(/\D/g, "");

  if (input === "") {
    elementInp.value = "";
    return;
  }

  let number = parseInt(input, 10);
  let formattedNumber = number.toLocaleString();
  elementInp.value = formattedNumber;
}

//step11
const stepEleven = document.querySelector("#step11");
const summitButtonEleven = stepEleven.querySelector("[data-next]");
const expectedSalaryInp = document.querySelector("#expectedSalary");

expectedSalaryInp.addEventListener("input", () =>
  formatSalary(expectedSalaryInp)
);

summitButtonEleven.addEventListener("click", function () {
  if (validateStepElev()) {
    showCurrentStep("plus");
  }

  expectedSalaryInp.addEventListener("input", validateStepElev);
});

const validateStepElev = () => {
  let isValid = true;
  const salaryValue = expectedSalaryInp.value.trim();

  if (salaryValue === "") {
    setError(expectedSalaryInp, "This field is required.", "Expected Salary");
    isValid = false;
  } else {
    setSuccess(expectedSalaryInp);
  }

  return isValid;
};
