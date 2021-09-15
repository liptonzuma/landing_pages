function handleClick(){
const top = document.querySelector(".top")
const menu = document.querySelector("#navbar")
const middle = document.querySelector(".middle")
const bottom = document.querySelector(".bottom")
    bottom.classList.toggle('disappear')
    top.classList.toggle('rotate-left')
    middle.classList.toggle('rotate-right')
    menu.classList.toggle("show")
}

export default handleClick