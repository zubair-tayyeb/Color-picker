const colorPicker=document.querySelector('#color-picker')

const heading=document.querySelector('#heading')

const paragraph=document.querySelector('#paragraph')
colorPicker.addEventListener('input',(event)=>{
    //get the selected color
    const selectedColor=event.target.value
    //apply color to the heading and paragraph
    heading.style.color=selectedColor
    paragraph.style.color=selectedColor
})