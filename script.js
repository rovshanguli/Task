let animals;
let books;
let government;
let others;

function GetData() {
    fetch('https://api.publicapis.org/entries')
        .then((response) => response.json())
        .then((data) => FilterDatas(data.entries));
}

function FilterDatas(alldatas) {
    animals = alldatas.filter(m => m.Category.toLowerCase() == "animals")

    books = alldatas.filter(m => m.Category.toLowerCase() == "books")

    government = alldatas.filter(m => m.Category.toLowerCase() == "government")

    others = alldatas
        .filter(m => m.Category.toLowerCase() != "government")
        .filter(m => m.Category.toLowerCase() != "animals")
        .filter(m => m.Category.toLowerCase() != "books")
}
GetData();


let animalscol = document.querySelector("#animals");
animalscol.onclick = function () { appendAnimals() };
let count = 0;
function appendAnimals() {
    
    
    let animalcol = document.getElementById("animalsdata");
    if(count%2 == 0){
        animals?.forEach(animal => {
            animalcol.innerHTML += `<div class="col-12">${animal.API}</div>`
        });
    }else{
        
        var first = animalcol.firstElementChild;
        while (first) {
            first.remove();
            first = animalcol.firstElementChild;
        }
    }
    count++;
}

