// performance.now() - It provides a time span, on the basis of time span
// it tell how much time taken by code to run

// adding 100 para

const t1 = performance.now();
for(let i = 1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para' + i;
    document.body.appendChild(newElement);
}

const t2 = performance.now();
console.log("this took " + (t2-t1) + "ms");

// optimising
const t3 = performance.now();
let myDiv = document.createElement('div');

for(let i = 0; i<=100; i++){
    let element = document.createElement('p');
    element.textContent = "This is para" + i;
    myDiv.appendChild(element);
}

document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("this took " + (t4-t3) + " ms");


// Reflow and Repaint - It is a process of calculating position and dimension of page element which are new 
// added showing new screen is called repaint
// Best practice use less reflow and repaint
// Document Fragment - Light weight object

let fragment = document.createDocumentFragment();
for(i = 1; i<=100; i++) {

    let newElement = document.createElement('p');
    newElement.textContent = "This is para " + i;
    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // 1 reflow, 1 repaint


// Event loop - works in a cyclic manner, where it continually checks whether or not the call stack is empty. If it is empty, 
// new functions are added from the event queue. If it is not, then the current function call is processed.
// CallStack - call stack is list which track functions which execute first and which execute last
// synchronous -  the code runs in a particular sequence of instructions given in the program
// and occurring at same time
// asynchronous - allows your code to run in the background without blocking the execution of other code
// and not at occurring at the same time and it uses event loop to execute
// event queue - responsible for sending new functions to the stack for processing
// only when call stack become empty

let para = document.querySelector('.para');
console.log(para);
console.log("Hii");
para.addEventListener('click', function(){
    console.log('click')
});

console.log('Hello');

