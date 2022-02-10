//Below, Map is used to loop through the numbers array. Then a <li> element is returned for each item
const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) =>
<li>{number}</li>
);

//The we include the entire listItems array inside the <ul> element to render it to the DOM.
ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
);