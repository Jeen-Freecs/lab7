// we should remove the h1 tag from the html file, so we can add it with js
helloworld = document.getElementsByTagName("h1")[0]
helloworld.remove()

// then we will create elements such as title, h1-h2, hr, p and ul & li  with js
const title = document.createElement("title");
title.innerText = "Lab7";
document.head.appendChild(title);

const h1 = document.createElement('h1')
h1.style.color = 'blue'
h1.innerText = 'Lab7 Assignment'
document.body.appendChild(h1)

const hr = document.createElement('hr')
document.body.appendChild(hr)

const h2 = document.createElement('h2')
h2.innerText = 'Task'
h2.style.color = 'red'
document.body.appendChild(h2)

const p = document.createElement('p')
p.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:'
document.body.appendChild(p)

const ul = document.createElement('ul')
document.body.appendChild(ul)

//lets create a function to add li elements with parameters inner, ul, className, that will make code more readable.
function add_li(inner, ul, className) {

    let li = document.createElement('li')
    li.innerHTML = inner
    if (className === 'even') {
        li.style.color = 'green'
        li.classList.add(className)
    }
    else if (className === 'odd') {
        li.style.color = 'purple'
        li.classList.add(className)
    }
    ul.appendChild(li)
}

add_li('find elements in the DOM (<b>5 points</b>);', ul, 'even')
add_li('create/add/remove elements (<b>5 points</b>);', ul, 'odd')
add_li('change content of the elements (<b>5 points</b>);', ul, 'even')
add_li('change styles of the elements (<b>5 points</b>);', ul, 'odd')
add_li('change attributes of the elements (<b>5 points</b>);', ul, 'even')
add_li('change classes of the elements (<b>5 points</b>);', ul, 'odd')

const hr2 = document.createElement('hr')
document.body.appendChild(hr2)

const h2_2 = document.createElement('h2')
h2_2.innerText = 'Submission'
h2_2.style.color = 'red'
document.body.appendChild(h2_2)

const p_2 = document.createElement('p')
p_2.innerText = 'To submit your work, follow these instructions:'
document.body.appendChild(p_2)

const ul_2 = document.createElement('ul')
document.body.appendChild(ul_2)

add_li('Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).', ul_2, 'even')
add_li("Clone this repository to your local machine and work inside it.",ul_2, 'odd');
add_li("Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).",ul_2, 'even');
add_li("Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).",ul_2, 'odd');
add_li("Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).",ul_2, 'even');
add_li("Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).",ul_2, 'odd');
add_li("After you finish your work, submit it to the Github (<b>2 points</b>).",ul_2, 'even');

const hr3 = document.createElement('hr')
document.body.appendChild(hr3)

console.log(document)