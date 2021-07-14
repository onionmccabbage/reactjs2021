import React from 'react'

export class UserForm extends React.Component {
    // we need somewhere for the data model
    // props (imutable belong to this instance)
    // state (imutable but can change !?!?!)
    constructor(props) {
        super(props)
        // we can set an initial state in the constructor
        this.state = { usr: '', chosen: 'coconut', junk:true } // here is an initial state for the component
    }
    // we need some call-back functions to handle stuff that happens
    handleChange = (e)=>{
        // we throw away the old state and replace with a new (immutable) state
        this.setState( {usr:e.target.value} )
    }
    handleSelect = (e)=>{
        // again, we throw out the old state and replace it with a new state
        this.setState( { chosen: e.target.value } )
    }
    handleJunk = (e)=>{
        // here we throw away the old state of 'junk' and create a new state for 'junk'
        this.setState( { junk: e.target.checked } )
    }

    render(){ // all React Components MUST have a render method
        return ( // this is JSX - looks like html, but it's JavaScript
            <section>
                <h4>This is the UserForm component</h4>
                {/* here is a controlled component, bound to the state */}
                <input name='usr' value={this.state.usr} onChange={this.handleChange} />
                <br/>
                {/* let  the user choose a fruit */}
                <select onChange={this.handleSelect}>
                    <option value='apple'>Apple</option>
                    <option value='kiwi'>Kiwi</option>
                    <option value='durian'>Durian</option>
                    <option value='coconut'>Coconut</option>
                </select>
                <br/>
                {/* ask the user if they would like promotional emails */}
                <input type='checkbox' checked={this.state.junk} onChange={this.handleJunk} /> Receive junk?
                <hr/>
                <h3>User Name is: {this.state.usr}</h3>
                <h3>Chosen Fruit is: {this.state.chosen}</h3>
                <h3>Junk setting is: {this.state.junk.toString()}</h3>
            </section>
        )
    }
    
}