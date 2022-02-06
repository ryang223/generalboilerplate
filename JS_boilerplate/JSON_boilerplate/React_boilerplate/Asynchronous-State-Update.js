//Wrong 
this.setState({
    counter: this.state.counter + this.PaymentResponse.increment,
});

// Correct
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));