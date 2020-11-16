function changeColor() {

    let tcolor = document.querySelector('#in1').value
    let bcolor = document.querySelector('#in2').value

    document.querySelector('h2').style.color = tcolor
    document.querySelector('h2').style.background = bcolor
}