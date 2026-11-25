const checkBoxElement = document.getElementById('checkbox');
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