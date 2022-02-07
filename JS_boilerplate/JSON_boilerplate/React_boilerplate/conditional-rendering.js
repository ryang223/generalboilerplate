function Mailbox(props){
  const unreadMessages = this.unreadMessages;
  //inline rendering conditional automatically goes to the h2 contained 
  //within it as an expression to be rendered below
  return(
      <div>
      <h1>Hello!</h1>
      {unreadMessages.length  > 0 && 
    <h2>
    You have {unreadMessages.length} unread messages.
    </h2>
   }      
      </div>
  );
}

const messages = ['React', 'Re:React', 'Re:Re: React'];

ReactDOM.render(
    <Mailbox unreadMessaes={messages} />,
    document.getElementById('root')
);