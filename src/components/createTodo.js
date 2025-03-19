import dom from "../dom.js";
import editBtnHandler from '../handlers/editBtnHandler.js';
import deleteBtnHandler from '../handlers/deleteBtnHandler.js';

const createTodo = (item) => {
    //div
    const container = document.createElement('div');
    container.classList.add('todo-item');
    container.id = item.id ;

    // title
    const title = document.createElement('p');
    title.classList.add('title');
    title.innerText = item.text

    // button container
    const btnscontainer = document.createElement('div');
    btnscontainer.classList.add('btn-container');

    //edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';

    editBtn.addEventListener('click', ()=>{
        editBtnHandler(item);
    })

    //delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    deleteBtn.addEventListener('click', ()=>{
        deleteBtnHandler(item.id);
    })

    //append
    btnscontainer.append(editBtn, deleteBtn);
    container.append(title, btnscontainer);

    return container;
};

export default createTodo;