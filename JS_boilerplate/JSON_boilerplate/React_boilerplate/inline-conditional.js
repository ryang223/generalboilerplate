render() {
    const isLoggedIn = this.State.isLoggedIn;
    return (
        <div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
    );
}

//This same logic can be used for larger expressions as seen below 
render() {
   const isLogged = thi.State.isLoggedIn;
   return(
       <div>
       {
           isLoggedIn
           ? <LogoutButton onClick={this.handleLogoutClick} />
           : <LoginButton onClick={this.handleLoginClick} />
       }
       </div>
   ); 
}