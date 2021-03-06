const friendList = [
    { id: 1, name: 'Phoebe' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Ross' },
];
//option to pick from list then triggers the color switch that acts as JSX wrapper after being passed to
// the useFriendStatus hook to verify online status 
function ChatRecipientPicker() {
    const [recipientID, setRecipientID] = useSate(1);
    const isRecipientOnline = useFriendStatus(recipientID);

    return (
        <>
            <Circle color={isRecipientOnline ? 'green' : 'red'} />
            <select
                value={recipientID}
                onChange={e => setRecipientID(Number(e.target.value))}
            >
                
                {friendList.map(friend => (
                    <option key={friend.id} value={friend.id}>
                        {friend.name}
                    </option>
                ))}
            </select>
        </>
    );
}

//useFriendStatus is used as a custom hook 
// function useFriendStatus(friendID) {
// const [isOnline, setIsOnline] = useState(null);
//
//  // ...
//
//  return isOnline;
//}
