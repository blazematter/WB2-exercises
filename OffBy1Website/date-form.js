

const dateSubmit = document.getElementById("process-date")
const dateForm = document.getElementById("date-form")
const dateOutput = document.getElementById("date-output")
const dateInput = document.getElementById("date-input")

function processDate (event) {
    event.preventDefault()
    console.log("click event listening success!!!");

        const dateString = dateInput.value
        const dateArray = dateString.split("-")
        const year = dateArray[0]
        const month = dateArray[1]-1
        const dayOfMonth = dateArray[2]
        const dateObject = new Date(year, month, date)
        console.log({dateString,date})
        dateOutput.innerHTML = "<h1>ANYTHING</h1>"
    // event.preventDefault() only has use if on a form and submit event
}


//dateSubmitButton.onclick = processDate
dateForm.onsubmit = processDate
// asynchornous programming
