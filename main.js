

const structure = {
    name: "portfolio",
    ending: "",
    children: [
        {
            name: "README",
            ending: ".md",
            content: "portfolio",
        },
        {
            name: "cat",
            ending: ".jpg",
            src: "images/cat.jpg"
        },
        {
            name: "about_me",
            ending: "",
            children: [
                {
                    name: "README",
                    ending: ".md",
                    content: "about_me",
                },
                {
                    name: "me",
                    ending: ".jpg",
                    src: "images/pp.jpg"
                },
            ]
        },
        {
            name: "projects",
            ending: "",
            children: [
                {
                    name: "README",
                    ending: ".md",
                    content: "projects",
                },
                {
                    name: "timetable",
                    ending: "",
                    children: [
                        {
                            name: "README",
                            ending: ".md",
                            content: "timetable",
                        },
                        {
                            name: "timetable",
                            ending: ".exe",
                            url: "https://axstr0n.github.io/Timetable/"
                        },
                        {
                            name: "preview",
                            ending: ".png",
                            src: "images/projects/timetable-preview.png"
                        },
                    ]
                },
                {
                    name: "battleship",
                    ending: "",
                    children: [
                        {
                            name: "README",
                            ending: ".md",
                            content: "battleship",
                        },
                        {
                            name: "battleship",
                            ending: ".exe",
                            url: "https://axstr0n.github.io/Battleship/"
                        },
                        {
                            name: "preview",
                            ending: ".png",
                            src: "images/projects/battleship-preview.png"
                        },
                    ]
                },
                {
                    name: "chrome_dino_NN",
                    ending: "",
                    children: [
                        {
                            name: "README",
                            ending: ".md",
                            content: "chrome_dino",
                        },
                        {
                            name: "chrome_dino",
                            ending: ".exe",
                            url: "https://axstr0n.github.io/ChromeDinoNN/"
                        },
                        {
                            name: "preview",
                            ending: ".png",
                            src: "images/projects/chrome_dino-preview.jpg"
                        },
                    ]
                },
            ]
        },
        {
            name: "personal",
            ending: "",
            children: [
                {
                    name: "README",
                    ending: ".md",
                    content: "personal",
                },
                {
                    name: "important",
                    ending: "",
                    children: [
                        {
                            name: "README",
                            ending: ".md",
                            content: "important",
                        },
                        {
                            name: "cat",
                            ending: ".jpg",
                            src: "images/personal/important/hang_in_there.jpg"
                        },
                        {
                            name: "not_a_cat",
                            ending: ".jpg",
                            src: "images/personal/important/not_a_cat.jpg"
                        },
                        {
                            name: "i_like_the_stock",
                            ending: ".jpg",
                            src: "images/personal/important/i_like_the_stock.jpg"
                        },
                        {
                            name: "dumb_money",
                            ending: ".jpg",
                            src: "images/personal/important/dumb_money.jpg"
                        },
                    ]
                },
            ]
        },
    ]
};
const htmlReadmes = {
    portfolio:
    `
    <div class="portfolio">
    <h1>Hi</h1>
    <h1>I am Axstr0n</h1>
    <a href="https://github.com/Axstr0n" target=_blank> <img style='width:50px; padding-top:20px;' src="images/icons/github-icon.png"> </a>
    </div>
    `,
    about_me:
    `
    <h1>About Me</h1>
    <p>I am Axstr0n student at university of Ljubljana.</p>
    <p>In my free time I like to code.</p>
    <p style="padding-top: 5px;">I have experience with:</p>
    <div class="languages" style="padding-top: 5px;">
        <img style='width:40px;' src="images/icons/python-icon.png">
        <img style='width:40px;' src="images/icons/html-icon.png">
        <img style='width:40px;' src="images/icons/css-icon.png">
        <img style='width:40px;' src="images/icons/js-icon.png">
        <img style='width:40px;' src="images/icons/cpp-icon.png">
        <img style='width:40px;' src="images/icons/cs-icon.png">
    </div>
    `,
    projects:
    `
    <h1>Projects</h1>
    <p>This is showcase of some of my projects.</p>
    `,
    timetable:
    `
    <h1>Timetable</h1>
    <p>This project was made to easily configure timetable for university.</p>
    <p>Check the <a href='https://github.com/Axstr0n/Timetable' target='_blank'>repository</a>.</p>
    <img src='images/projects/timetable-preview.png' style="padding: 5px 0px;">
    <p>This lets you choose subjects and groups and let you see overlapping.</p>
    `,
    battleship:
    `
    <h1>Battleship</h1>
    <p>This project was originaly made with C++ but afterward expanded and made in JS for browser.</p>
    <p>Check the <a href='https://github.com/Axstr0n/Battleship' target='_blank'>repository</a>.</p>
    <img src='images/projects/battleship-preview.png' style="padding: 5px 0px;">
    <p>It represents 3 algorithms for sinking ships. The game lets you configure grid size as well as number and size of ships.</p>
    `,
    chrome_dino:
    `
    <h1>Chrome Dino</h1>
    <p>This project was made to learn neural network.</p>
    <p>Check the <a href='https://github.com/Axstr0n/ChromeDinoNN' target='_blank'>repository</a>.</p>
    <img src='images/projects/chrome_dino-preview.jpg' style="padding: 5px 0px;">
    <p>Every generation spawns dinos and the best is selected for further mutation. Inputs to NN are sensors for distances and speed. There are also network visualizer and chart that shows generations.</p>
    `,
    personal:
    `
    <h3>Personal</h3>
    `,
    important:
    `
    <h3>Very important things</h3>
    <a href="https://www.youtube.com/watch?v=hGeEXrR84XE" target="_blank">https://www.youtube.com/watch?v=hGeEXrR84XE</a>
    <a href="https://www.youtube.com/watch?v=rejpDqQUcV0" target="_blank">https://www.youtube.com/watch?v=rejpDqQUcV0</a>
    `,
}

let offsetX, offsetY, isDragging = false;

const dragInteract = document.getElementById("top");
const draggableWindow = document.getElementById("window");
dragInteract.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - draggableWindow.getBoundingClientRect().left;
    offsetY = e.clientY - draggableWindow.getBoundingClientRect().top;
    dragInteract.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        draggableWindow.style.left = `${x}px`;
        draggableWindow.style.top = `${y}px`;
    }
});
document.addEventListener('mouseup', () => {
    isDragging = false;
    dragInteract.style.cursor = 'default';
});

// Run the function to center the element initially
window.addEventListener('load', CenterWindow);

// Run the function to center the element on resize
window.addEventListener('resize', CenterWindow);
function CenterWindow(){
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get the element's dimensions
    const elementWidth = draggableWindow.offsetWidth;
    const elementHeight = draggableWindow.offsetHeight;

    // Calculate the position to center the element
    const left = (viewportWidth - elementWidth) / 2;
    const top = (viewportHeight - elementHeight) / 2;

    // Set the element's position
    draggableWindow.style.left = `${left}px`;
    draggableWindow.style.top = `${top}px`;
}

let path = [];

OpenFolder("portfolio");

function findPath(node, target, path = []) {
    // Add the current node's name to the path
    path.push(node.name);

    // Check if the current node is the target
    if (node.name === target) {
        return path;
    }

    // If the node has children, recursively search through them
    if (node.children) {
        for (let child of node.children) {
            const result = findPath(child, target, [...path]); // Pass a copy of the current path
            if (result) {
                return result; // If found, return the path
            }
        }
    }

    // If not found, return null
    return null;
}

function findNode(node, target) {
    // Check if the current node is the target
    if (node.name === target) {
        return node;
    }

    // If the node has children, recursively search through them
    if (node.children) {
        for (let child of node.children) {
            const result = findNode(child, target);
            if (result) {
                return result; // If found, return the node
            }
        }
    }

    // If not found, return null
    return null;
}




function OpenFolder(folderName){
    // Get path to this folder
    path = findPath(structure, folderName);
    //console.log(folderName, path)
    const pathHtml = CreatePathHtml(path);
    document.getElementById("path").innerHTML = pathHtml;

    // Get all children (folders, elements, images, executables)
    let elements = [];
    const targetNode = findNode(structure, folderName);
    if (targetNode && targetNode.children) {
        targetNode.children.forEach(child => elements.push(child));
    } else if (targetNode && !targetNode.children) {
        console.log(`'${folderName}' has no children.`);
    } else {
        console.log(`Folder '${folderName}' not found.`);
    }

    // Clear content
    document.getElementById("content").innerHTML = "";
    // Add content (children)
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        let iconPathImg = "";
        let onclickEvent = "";
        switch (element.ending) {
            case ".jpg":
                iconPathImg = "images/icons/image-icon.png";
                onclickEvent = `onclick="ShowPreview('${element.name}', '${element.ending}', '${element.src}')"`;
                break;
            case ".png":
                iconPathImg = "images/icons/image-icon.png";
                onclickEvent = `onclick="ShowPreview('${element.name}', '${element.ending}', '${element.src}')"`;
                break;
            case ".md":
                iconPathImg = "images/icons/file-icon.png";
                onclickEvent = `onclick="ShowPreview('${element.name}', '${element.ending}', '${element.content}')"`;
                break;
            case ".exe":
                iconPathImg = "images/icons/exe-icon.png";
                onclickEvent = `onclick="OpenWebsite('${element.url}')"`;
                break;
            case "":
                iconPathImg = "images/icons/folder-icon.png";
                onclickEvent = `onclick="OpenFolder('${element.name}')"`;
                break;
        
            default:
                break;
        }
        document.getElementById("content").innerHTML +=
        `
        <button class="element" ${onclickEvent}>
            <div class="icon">
                <img src="${iconPathImg}" alt="">
            </div>
            <div class="name">
                ${element.name}${element.ending}
            </div>
        </button>
        `;
    }
    // Click first button README to open preview
    const buttons = document.querySelectorAll(".element");
    buttons[0].click();
}

function ShowPreview(name, ending, content){
    //console.log(content)
    if(ending === ".md"){
        document.getElementById("preview-icon-name").innerHTML = `
            <img class="preview-icon" src="images/icons/book-icon-white.png" alt="">
            <div class="preview-name">${name}${ending}</div}
        `;
        document.getElementById("preview-content").innerHTML = htmlReadmes[content];
    }
    if(ending === ".jpg" || ending === ".png"){
        document.getElementById("preview-icon-name").innerHTML = `
            <img class="preview-icon" src="images/icons/image-icon-white.png" alt="">
            <div class="preview-name">${name}${ending}</div}
        `;
        document.getElementById("preview-content").innerHTML = 
        `
        <div class="preview-img-wrapper">
            <img class="preview-img" src=${content} alt="">
        </div>
        `;
    }
    
}

function OpenWebsite(url) {
    window.open(`${url}`, '_blank');
}

function CreatePathHtml(path){
    let html = "";
    for (let i = 0; i < path.length; i++) {
        html += 
        `
        <button class="path-element" onclick="OpenFolder('${path[i]}')">
            ${path[i]}
        </button>
        `;
        html +=
        `
        <button class="path-spacer">
            /
        </button>
        `;
    }
    return html;
}


// MONKEY //////////////////////////////////////////////////////////////
// Monkey shows behing window, looks at cursor, if clicked on hides
const window_ = document.getElementById("window");
const monkey = document.getElementById("monkey");
let monkeyX = 408;
let monkeyHitCount = 0;

function UpdateMonkeyPosition(){
    // Always relative to window
    const window = document.getElementById("window")
    monkey.style.top = `${parseInt(window.style.top.substring(0,window.style.top.length-2)) +80}px`;
    monkey.style.left = `${parseInt(window.style.left.substring(0,window.style.left.length-2)) +monkeyX}px`;

    requestAnimationFrame(UpdateMonkeyPosition);
}
UpdateMonkeyPosition();

function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setTimeout(() => {
    MonkeyMoveUp();
}, getRandomInterval(5000, 10000));

function MonkeyMoveUp() {
    monkey.style.animation = "moveUp 500ms linear forwards";
    setTimeout(() => {
        monkey.disabled = false;
    }, 1000);
}

function MonkeyMoveDown(){
    monkeyHitCount++;
    document.getElementById("monkey-hit-counter").innerHTML = monkeyHitCount;
    monkey.style.animation = 'none';
    monkey.disabled = true;
    monkey.style.animation = "moveDown 500ms linear forwards";
    setTimeout(MonkeyMoveX, 600);
    setTimeout(() => {
        MonkeyMoveUp();
    }, getRandomInterval(4000, 8000));
}

function MonkeyMoveX(){
    console.log(window.getComputedStyle(window_).width)
    monkeyX = getRandomInterval(50, parseInt(window.getComputedStyle(window_).width)-100);
}
