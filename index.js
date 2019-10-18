class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
    // stack functions 
    push(element) {
        this.items.push(element); 
    } 
    pop() { 

        if (this.items.length == 0) 
            return "Underflow"; 
        return this.items.pop(); 
    } 
    size() {

        return this.items.length;
    }
   
    peek() {

        return this.items[this.items.length -1]
    }

    isEmpty() { 
    
        return this.items.length == 0; 
    }

    getItemByIndex(index) {

        return this.items[index];
    }
} 

let stack = new Stack();

function pushtToStack() {

    let sizeOfStack = stack.size();

    if(sizeOfStack != 0) {
        stack.peek().style.backgroundColor = "#d4b2c2";
    }

    if(sizeOfStack == 3) {
            alert("The stack is full.")
    }

    else {
        let item3 = document.getElementById("new-element");
        let item = document.createElement('div');
        item.className = "newE"+ sizeOfStack;
        item.style.width = "130px";
        item.style.height ="50px";
        item.style.backgroundColor = "#d4b2c2";
        item.style.marginBottom = "5%";
        item3.appendChild(item);
        
        if(sizeOfStack == 0)
        {
            anime({
            targets: '.newE'+ 0,
            translateY: 550,
            easing: 'linear',
            });
        }
        else if(sizeOfStack == 1) {
            anime({
                targets: '.newE'+ 1,
                translateY: 410,
                easing: 'linear',
            });
        }
        else if(sizeOfStack == 2) {
            anime({
                targets: '.newE'+ 2,
                translateY: 270,
                easing: 'linear',
            });
        }

        stack.push(item);
    }
    //console.log(stack); 
}

function popFromStack() {

    if(stack.isEmpty()) {

        alert("The stack is empty , please fill it if you want to pop element from it :)");
    }

    else {
        stack.peek().parentNode.removeChild(stack.peek());
        stack.pop();
    }
}

//change the color of peek element to white
function peekStyle() {
    stack.peek().style.backgroundColor = "#fff";
}

function isEmptyFunction() {

    if(stack.isEmpty()) {
        alert ("Yes , the stack is empty.");
    }
    else { 
        alert ("No , the stack isn't empty.");
    }
}

//swap the two top elements of the stack.
function swap() {

    stack.peek().style.backgroundColor = "#d4b2c2";

    let newStack = new Stack();
    let firstItem = stack.peek();
    firstItem.className = "first";
    let secondItem = stack.getItemByIndex(stack.size()-2);
    secondItem.className = "second";
    
    if(stack.size() != 2)
        newStack.push(stack.getItemByIndex(stack.size()-3));

    newStack.push(firstItem);
    newStack.push(secondItem);
    stack = newStack;
    
    anime({
        targets: '.first',
        translateY: [
            {value: 250, duration: 500},
            {value: 350, duration: 500, delay: 1500},  
        ],
        translateX: [
            {value: 300, duration: 500, delay: 1000},
            {value: -1, duration: 500, delay: 1500},
        ],
        easing: 'linear',
        });

    anime({
        targets: '.second',
        translateY: [
            {value: 320, duration: 1000},
        ],
        easing: 'linear',
        });
}

function newStack() {
    
    for ( i = stack.size(); i> 0 ; i--) {
        popFromStack();
    }
}