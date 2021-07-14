import React, {Component} from 'react'
import Results from './Results'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {id: '', 
                      categories: [],
                      selected: 'people',
                      result: {},
                      errMsg:''
                    }
        let url = `https://swapi.dev/api/`
        console.log("Fetching from " + url)
        fetch(url)
            .then((response) => { return response.json() })
            .then((json) => {
                console.log(json)
                this.setState({categories: Object.keys(json)})
            })
            .catch( (err)=>{
                console.log('Error:', err)
                this.setState({errMsg:err})
            } )
        // we need to bind the event(s)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSubmit(e) {
        // we must prevent the form from actually submitting
        e.preventDefault()

        // make a fetch to an end point
        let url = `https://swapi.dev/api/${this.state.selected}/${this.state.id}`
        console.log("Fetching from " + url)
        fetch(url)
            .then((response) => { return response.json() })
            .then((json) => {
                console.log(json)
                this.setState({result: json})
            })
    }

    handleChange(e) {
        this.setState({id: e.target.value})
    }

    handleSelect(e) {
        this.setState({selected: e.target.value})
    }

    render() {
        let options = (
            this.state.categories.map( (category, i) =>
                <option key={i}>{category}</option>
            )
        )
        let message
        if(this.state.errMsg){
            message = <p>There was an error: {this.state.errMsg}</p>
        }
        return (
            <aside>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.active} onChange={this.handleSelect}>
                        {options}
                    </select>
                    <input placeholder='Enter id' value={this.state.id} onChange={this.handleChange} />
                    <input type='submit' value='go' />
                </form>
                <pre>{message}</pre>
                <hr/>
                <Results category={this.state.selected} id={this.state.id} result={this.state.result} />
            </aside>
        )
    }

}
