function handleClick(){
const top = document.querySelector(".top")
const middle = document.querySelector(".middle")
const bottom = document.querySelector(".bottom")

    top.classList.toggle('rotate-left')
    middle.classList.toggle('rotate-right')
    bottom.classList.toggle('disappear')
}

export default handleClick