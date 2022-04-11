const $ = {
    screen: document.querySelector('#screen'),
    buttons: document.querySelectorAll('span:not(.operator)'),
    operators: document.querySelectorAll('.operator'),
}

$.buttons.forEach((button) => {
    button.addEventListener("click", () => {
        $.screen.textContent += button.textContent
    })
})

$.operators.forEach(($operator) => {
    $operator.addEventListener('click', () => {
        switch ($operator.textContent) {
            case '=':
                const result = eval($.screen.textContent)
                $.screen.textContent = result == Infinity ?
                    'Error' :
                    result
                break;
            case '÷':
                $.screen.textContent += '/'
                break;
            case 'x':
                $.screen.textContent += "*"
                break;
            case 'C':
                $.screen.textContent = ""
                break;
            default:
                $.screen.textContent += $operator.textContent
        }
    })
})