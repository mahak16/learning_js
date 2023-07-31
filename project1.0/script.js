let btn = document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes =[{
    quote:`"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."` , 
    person: `William Faulkner`
}, {
    quote:`"As a writer, you should not judge, you should understand."`  , 
    person:  `Ernest Hemingway`
}, {
    quote:`"To produce a mighty book, you must choose a mighty theme."` , 
    person: `Herman Melville`
}, {
    quote:`"Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen."` , 
    person: `John Steinbeck`
}, {
    quote:`"The Six Golden Rules of Writing: Read, read, read, and write, write, write` , 
    person: `Ernest Gaines`
},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote ;
    person.innerText = quotes[random].person;
})
