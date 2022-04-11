const $ = {
    screen: document.querySelector('#screen'),
    button: document.querySelectorAll('span:not(.operator)'),
    operators: document.querySelectorAll('.operator'),
    clear: document.querySelector('#clear'),
}

$.button.forEach((button) => {
    button.addEventListener("click", () => {
        $.screen.textContent += button.textContent
    })
})

$.operators.forEach(($operator) => {
    $operator.addEventListener('click', () => {
        switch ($operator.textContent) {
            case '=':
                $.screen.textContent = eval($.screen.textContent)
                break;
            case '÷':
                $.screen.textContent += '/'
                break;
            case 'x':
                $.screen.textContent += "*"
                break;
            default:
                $.screen.textContent += $operator.textContent
        }
    })
})

$.clear.addEventListener("click", () => {
    $.screen.textContent = ""
})