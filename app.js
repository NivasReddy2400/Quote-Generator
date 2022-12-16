let button = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {quote:"Your story may not have such a happy beginning but that does not make you who you are, it is the rest of it- who you choose to be.",person:" Soothsayer"},
    {quote:"If you only do what you can do, you will never be more than who you are.",person:"Master Shifu"},
    {quote:"There is no secret ingredient",person:" Mr Ping, Po's father"},
    {quote:"Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear",person:"Master Oogway"},
    {quote:"There are no accidents",person:"Master Oogway"},
    {quote:"Once I realized the problem was not you but within me. I found inner peace and was able to harness the flow of the universe",person:"Master Shifu"},
    {quote:"I can control when the fruit will fall!",person:"Master Shifu"},
    {quote:"Use your skills for good, young warrior. Find the one thing you were denied so long ago — compassion.",person:"Master Oogway"}
];

button.addEventListener('click',generate);

function generate(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

}
