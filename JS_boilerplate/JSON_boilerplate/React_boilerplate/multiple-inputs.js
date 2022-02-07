//A form that takes multiple controlled stateful inout elements
// with a name attribute to each that lets the hanlder function choose what 
//to do based off of "event.target.name
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true, 
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form>
            <label> Is going:
            <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} 
                />
            </label>
            <br />
            <label>
            Number of Guests:
            <input 
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
            />
            </label>
            </form>
        );
    }
}  