
function Message() {
    const name = 'Peter';
    if (name) 
        return <h1>Hello {name}</h1>;
    return <h1>Hello Wrold</h1>
}

export default Message;