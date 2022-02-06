//submission form using "e" as a synthetic event
function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
}

return (
    <form>
    <button type="submit">Submit</button>
    </form>
);
}