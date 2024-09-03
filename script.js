
function response() {
    
    const firstName = document.getElementById('firstName').value
    const secondName = document.getElementById('secondName').value
    const thirdName = document.getElementById('thirdName').value
    const fourthName = document.getElementById('fourthName').value

    const resultText = document.getElementById('mainResult')

    const list = [firstName, secondName, thirdName, fourthName]

    const sort = list[Math.floor(Math.random() * list.length)]

    resultText.innerHTML = sort + ' !'
    
}