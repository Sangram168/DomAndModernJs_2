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