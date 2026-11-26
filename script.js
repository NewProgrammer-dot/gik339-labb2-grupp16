const checkBoxElement = document.getElementById('divStyle');
const textFieldElements = document.getElementsByClassName('textfield');
const buttonElement = document.getElementById('Remove');
const boxElement = document.getElementById('box');

function EventListenerTextField(event) 
{
    const targetId = event.target.id;
    console.log(event.target)
    if (targetId === 'content') 
    {
        boxElement.innerHTML = event.target.value;
    }
}
checkBoxElement.addEventListener('change' , () => {
    const colorField = textFieldElements.namedItem('color');
    boxElement.style.backgroundColor = colorField.value;
});

