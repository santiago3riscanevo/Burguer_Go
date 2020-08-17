//STABLISH THE CONSTRUCTURE FUNCTION
class changeMenu {
    constructor(element) {
        this.element = element;
    }
    
    verticalMenu() {
        (this.element.style.whiteSpace == "nowrap")
            ? this.element.style.whiteSpace = "normal"
            : this.element.style.whiteSpace = "nowrap";

    }
}


export default changeMenu;