import dom from "../dom.js";
import data from "../data.js";

const clearAllHandler = ()=>{
    dom.toDos.innerHTML = '';
    data.items = [];
}
export default clearAllHandler;