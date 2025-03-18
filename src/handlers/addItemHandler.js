import data from "../data.js";
import dom from "../dom.js";
import createTodo from '../components/createTodo.js';


const addItemHandler = (e) => {
    e.preventDefault();
    const value = dom.input.value.trim();
    const btnType = dom.submitBtn.innerText ; 
    if (btnType === 'Submit'){
        if (!value){
        dom.error.innerText = 'please enter a value';
        dom.error.classList.add('error1')
        setTimeout(() => {
            dom.error.innerText = '';
            dom.error.classList.remove('error1')
        },3000)
        return
        }else{
        
        const newItem = {
            id: data.id++,
            text: value
        }

        data.items.push(newItem);
        const item = createTodo(newItem);
        dom.toDos.prepend(item);

    }
    
    }else{
        const selectedItem = document.querySelector('.selected');
        selectedItem.querySelector('p').innerText = value
        const id = Number(selectedItem.id);
        const itemData = data.items.find((item) => item.id === id);
        itemData.text = value;
        dom.submitBtn.innerText = 'Submit';
        selectedItem.classList.remove('selected');    
    }
    dom.input.value = '';
   
    
};

export default  addItemHandler