//A component that accepts an array of numbers and outpus a list of elements
// with a key defining it on line 6
//rule of thumb... elements that use the map call from arrays always need keys
function NumberList(props) {
    const numbers = props.numbers;
    const listitems = number.map((number) =>

    <ListItem key={number.toString()} value={number} />
    );
     return (
    <ul>{listItems}</ul>
     ); 
   }

   const numbers = [1,2,3,4,5];
   ReactDOM.render(
       <NumberList numbers={numbers} />,
       document.getElementById('root')
   );