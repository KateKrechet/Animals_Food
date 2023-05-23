let banana = document.getElementById('banana')
let cucumber = document.getElementById('cucumber')
let mouse = document.getElementById('mouse')
let result = document.getElementById('result')
let ofx = 0
let ofy = 0
let a = 0
let b = 0

function reload(time) {
    location.reload()
}

function start(event) {

    console.log('*******')
    console.log(a)
    // коорлинаты, где начали перетаскивать объект относительно страницы, просто х и у - тоже самое значит
    console.log(event.pageX, event.pageY)
    // коорлинаты, где начали перетаскивать объект относительно объекта
    console.log(event.offsetX, event.offsetY)
    ofx = event.offsetX
    ofy = event.offsetY
    a = event.pageX
    a = proverka(a)
    console.log(a)
}

function end(event) {
    let x = event.pageX
    let y = event.pageY
    this.style.left = (x - ofx) + 'px'
    this.style.top = (y - ofy) + 'px'
    console.log(event.pageX, event.pageY)
    b = event.pageX
    b = proverka(b)
    console.log(b)
    if ((b === 1 && a === 2) || (b === 2 && a === 3) || (b === 3 && a === 1)) {
        result.innerHTML = 'Вы выиграли!'
    } else {
        result.innerHTML = 'Попробуйте еще раз!'

    }
    setTimeout(reload, 1000)

}

function proverka(a) {
    let b = 0
    if (a > 0 && a < 172) {
        b = 1
    } else if (a >= 172 && a < 340) {
        b = 2
    } else {
        b = 3
    }
    return b
}

mouse.ondragstart = start
mouse.ondragend = end

banana.ondragstart = start
banana.ondragend = end

cucumber.ondragstart = start
cucumber.ondragend = end
