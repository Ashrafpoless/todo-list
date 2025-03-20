import addItemHandler from '../handlers/addItemHandler.js';
import dom from '../dom.js';

const addItemEvent = () => {
    dom.submitBtn.addEventListener('click', (e) =>{addItemHandler(e)})
};

export default addItemEvent;