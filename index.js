const TEST_DATA = [
    {
        senderID: "max",
        text: "suh dude"
    },
    {
        senderID: "sam",
        text: "suhhhh"
    }
]

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <Title />
                <MessageList />
                <SendMessageForm />
            </div>
        )
    }
}
