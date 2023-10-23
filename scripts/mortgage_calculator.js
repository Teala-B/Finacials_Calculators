window.onload = init;

function init() {
    
}

function calculateBtnClicked () {

    let principle = +(document.getElementById("clientPrinciple").value)
    let interestRate = +(document.getElementById("clientInterestRate").value)
    let loanLength = + (document.getElementById("clientLoanLength").value)

    let monthlyIntrestRate = interestRate / 1200
    let newLoan = loanLength * 12

    let step1 = principle * monthlyIntrestRate
    let step2 = 1 - Math.pow((1 + monthlyIntrestRate),(-newLoan))
    let step3 = +(step1 / step2).toFixed(2)
    let step4 = step3 * principle
    let answer = step3

    document.getElementById("answerField").value = "$" + answer
}