import dom from "../dom.js";
import data from "../data.js";

const deleteBtnHandler = (id) =>{
    // remove from dom
    const item = document.getElementById(id);
    dom.toDos.removeChild(item);
    // or
    // if(item){
    //     item.remove();
    // }



    // remove from data
    data.items.filter((item) => item.id !== id);
};

export default deleteBtnHandler;