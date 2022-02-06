//Renders login or logout buttons depending 
//on it's current state or a greeting

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state({isLoggedIn: false})
    }
    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick(){
        this.setState({isLoggedOut: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick = {this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick= {this.handleLogoutClick} />;
        }
        
        return (
            <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
            </div>
        ); 
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);