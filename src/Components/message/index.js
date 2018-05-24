import React, {Component}  from 'react'

 class Message extends Component {
    render(){
        return(
            <div>
                <h1>This is the message page, type in the text box below and hit send to start</h1>
                <br />
                <input type='textarea' placeholder='Write your message'/>
                <button classname='msg-submit'>Send</button>
            </div>
        )
    }
}

export default Message;