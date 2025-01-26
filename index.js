// Your code here

function greet() {
    var userName = prompt('What is your name?')
    alert('Hello, ' + userName)
    var ageStr = prompt('How old are you?')
    var userAge = parseInt(ageStr)
    if (!userAge) return
    var birthdayYet = confirm('Have you had a birthday yet this year?')
    var currentYear = new Date().getFullYear()
    if (birthdayYet===true) {
        var userYearBorn = currentYear - userAge
        alert('You were born in ' + userYearBorn)
    } else {
        userYearBorn = currentYear - (userAge + 1)
        alert('You were born in ' + userYearBorn)
    }
    console.log (userYearBorn)
}