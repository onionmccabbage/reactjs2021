import React from 'react'

export class Users extends React.Component {

    constructor(props) {
        super(props)
        // we can set an initial state for this component
        this.state = { users: [], isLoaded: false, error: null } // the initial state of this component
    }

    // we need a (non-visual) service to call our end-point API
    callAPI() { // any old name will do!
        let userURL = `https://jsonplaceholder.typicode.com/users`
        // use the ES6 fetch syntax
        fetch(userURL)
            .then(res => res.json()) // always do this for JSON data
            .then(
                // handle the result
                (result) => {
                    console.log(result)
                    // take the returned 'result' array and use it in our state
                    this.setState({ isLoaded: true, users: result })
                },
                // or handle the error
                (error) => {
                    this.setState({ isLoaded: true, error: error })
                }
            )
    }
    // here is a life-cycle event
    componentDidMount() {
        this.callAPI()
    }

    render() {
        {/* we can conditional render stuff */ }
        if (this.state.error) {
            return (
                <aside>
                    <h4>Error: {this.state.error.message}</h4>
                </aside>
            )
        } else if (!this.state.isLoaded) {
            return (
                <aside>
                    <h4>Waiting...</h4>
                </aside>
            )
        } else {
            return (
                <section>
                    {/* we can explore the loaded data during development */}
                    {/* <pre>{this.state.users[9].name.toString()}</pre> */}
                    {/* we can map to iterate over the returned data */}
                    <ul>
                        {/* ES6 arrays have a 'map' operator */}
                        {this.state.users.map( user => (
                            <li>{user.name} - {user.username} - {user.email}</li>
                        ) )}
                    </ul>
                </section>
            )
        }

    }
}