import data from '../data.js';
import dom from '../dom.js';
import createTodo from '../components/createTodo.js';

const loadHandler = () => {
    data.items.forEach((item) => {
        const container = createTodo(item);
        
        dom.toDos.append(container);

    })
};
 export default loadHandler