import React, {Component} from 'react'

class Account extends Component {
    render(){
        return(
            <div>
               <h1>Set up Account </h1>
               <input type="text" placeholder="email" />  
               <button>Submit</button>
               
            </div>
        )
    }
}

export default Account;