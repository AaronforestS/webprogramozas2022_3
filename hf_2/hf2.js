// Practicing array functions
let persons = [
    {
        name: 'Nagy Dániel',
        age: 44,
        sex: 'M'
    },
    {
        name: 'Közepes Károly',
        age: 32,
        sex: 'M'
    },
    {
        name: 'Kis Karolina',
        age: 18,
        sex: 'F'
    },
    {
        name: 'Temesvári Hanna',
        age: 10,
        sex: 'F'
    },
    {
        name: 'Nagy Béla',
        age: 66,
        sex: 'M'
    },
    {
        name: 'Kovács Máté',
        age: 14,
        sex: 'M'
    },
    {
        name: 'Nagy Hanna Márta',
        age: 31,
        sex: 'F'
    }
]

function agesSquared(people){
    return people.map(person => Math.pow(person.age,2));
}

function multiplyElementsOfAnArrayWithEachOther(people){
    return agesSquared(people).reduce((sum ,x) => sum *= x, 1);
}

function malesBetween30and40(people){
    return people.find(person => person.age > 30 && person.age < 40 && person.sex == 'M');
}
function youngestFemale(people){
/*
    let target = Math.min(...people.map(person2 => person2.age));
    return people.find(person => person.age == target && person.sex == 'F');
if the youngest person is a male it does not work
*/
	
/*
let name = persons.sort((person1, person2)=> person1.age - person2.age).find(person => person.sex == 'F').name;
*/
	
    let target = Math.min(...people.filter(person1 => person1.sex == 'F').map(person1 => person1.age));
    return people.find(person => person.age == target && person.sex == 'F').name;
}

console.log(
    'People: ', persons,
    '\nAges squared: ', agesSquared(persons),
    '\nElements multiplied with each other: ', multiplyElementsOfAnArrayWithEachOther(persons),
    '\nMales between 30 and 40: ', malesBetween30and40(persons),
    '\nYoungest female: ', youngestFemale(persons),
);

const ellenorzes = document.querySelector('#ellenorzes');
const nev = document.querySelector('#nev');
const kor = document.querySelector('#kor');
const F = document.querySelector('#F');
const M = document.querySelector('#M');
const body = document.querySelector('body');

F.checked = false;
M.checked = false;

ellenorzes.addEventListener('click', function(event){
    let nevtext = nev.value;
    let kortext = kor.value;
    let Fchecked = F.checked;
    let Mchecked = M.checked;
    let L = true;

    if(nevtext.length == 0){
        nev.classList.add("rossz");
        L = false;
    }
    if(kortext.length == 0 || kortext < 0 || kortext > 110){
        kor.classList.add("rossz");
        L = false;
    }
    if(!(Fchecked || Mchecked)){
        F.classList.add("rossz2");
        M.classList.add("rossz2");
        L = false;
    }
    if(L){
        body.classList.add("bg");
        alert("Minden rendben!");
        nev.classList.remove("rossz");
        kor.classList.remove("rossz");
        F.classList.remove("rossz2");
        M.classList.remove("rossz2");
    }
});
