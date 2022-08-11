//intialize the count as 0
//listen for click on the increment button
//increment the count variable when the button is click
//change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

console.log(saveEl)


function increment() {
    count += 1
    countEl.innerText = count
}
//document.getElementById().innerText = count

// creating a save a button


function save() {
    let countStr = count + " - "
    document.getElementById("save-el").textContent += countStr
    countEl.innerText = 0
    count = 0

    console.log(count)
}
