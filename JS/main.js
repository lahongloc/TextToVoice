const printText = () => {
    var bodyText = document.querySelector('#root > h4')
    const tempText = document.getElementById('comment') 
    bodyText.innerHTML = tempText.value
}