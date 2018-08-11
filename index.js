//test data
//replace with real data from chatkit later
const TEST_DATA = [
    {
        senderID: "Max",
        text: "suh dude"
    },
    {
        senderID: "Sam",
        text: "suhhhh"
    }
]

class App extends React.Component{
    constructor() {
        //must call super() in constructor in order
        //to create a stateful component
        super()
        this.state = {
            messages: TEST_DATA
        }
    }

    render() {
        return (
            <div className="app">
                <Title />
                <MessageList messages={this.state.messages} />
                //sendermessageform
            </div>
        );
    }
}

class MessageList extends React.Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map(message => {
                    return (
                        <li key={message.id} className="message">
                            <div>
                                {message.senderID}
                            </div>
                            <div>
                                {message.text}
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

function Title() {
  return <p className="title">Test React Chat App</p>
}

ReactDOM.render(<App />, document.getElementById('root'));
