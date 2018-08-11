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
    constructor() {
        super()
        this.state = {
            messages: TEST_DATA
        }
    }

    render(){
        return(
            <div className="app">
                <Title />
                <MessageList messages={this.state.messages} />
                <SendMessageForm />
            </div>
        )
    }
}
