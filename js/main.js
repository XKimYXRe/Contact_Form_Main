
const form = document.querySelector("form")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email-address")
const message = document.getElementById("message")
const generalEnquiryType = document.getElementById("general_Enquiry")
const support_RequestType = document.getElementById("support_Request")
let queryTypeSelected = null


const firstNameError = document.getElementById("first-name_error")
const lastNameError = document.getElementById("last-name_error")
const emailError = document.getElementById("email_error")
const emailFormatError = document.getElementById("email-format_error")
const queryTypeError = document.getElementById("query_type_error")
const messageError = document.getElementById("message_error")

const alertBox = document.getElementById("alert-box_desactive")

function isBadEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const isValideEmail = regex.test(email)

    if (isValideEmail) {
        return false;
    } else {
        return true;
    }
}

function resetValue() {
    firstName.value = ""
    lastName.value = ""
    email.value = ""
    message.value = ""
}

const block = "block"
const none = "none"

const handlerSubmit = (event) => {
    event.preventDefault()

    if (!firstName.value) {
        firstNameError.style.display = block
    } else {
        firstNameError.style.display = none
    }

    if (!lastName.value) {
        lastNameError.style.display = block
    } else {
        lastNameError.style.display = none
    }

    if (!email.value) {
        emailFormatError.style.display = none
        emailError.style.display = block

    } else {
        emailError.style.display = none

        if (isBadEmail(email.value)) {
            emailError.style.display = none
            emailFormatError.style.display = block
        }
    }

    if (!queryTypeSelected) {
        queryTypeError.style.display = block
    }
    else {
        queryTypeError.style.display = none
    }

    if (!message.value) {
        messageError.style.display = block
    } else {
        messageError.style.display = none
    }


    alertBox.setAttribute("id", "alert-box_active")
    resetValue()

}

form.addEventListener("submit", handlerSubmit)

generalEnquiryType.addEventListener("change", () => {
    handleRadioChange(generalEnquiryType)
})

support_RequestType.addEventListener("change", () => {
    handleRadioChange(support_RequestType)
})

function handleRadioChange(selectedType) {
    const parentElement = selectedType.parentElement
  
    if (parentElement.getAttribute("id") === "querytype-active") {
      parentElement.removeAttribute("id")
    } else {
      const activeElement = document.getElementById("querytype-active")
      if (activeElement) {
        activeElement.removeAttribute("id");
      }

      parentElement.setAttribute("id", "querytype-active");
    }
  }

