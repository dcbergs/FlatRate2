import React, { Component } from "react";

export class Line extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ex: '',
            rx: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleBlurName = this.handleBlurName.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    async handleBlurName() {
        const result = await fetch('api/part/' + this.state.ex)
        if (result.ok) {
            const data = await result.json()
            console.log('found your part, it is: ')
            console.log(JSON.stringify(data))
        }
        else {
            console.log('there is no such part called ' + this.state.ex)
        }

    }

    render() {
        return (
            <>
                <input type='text' name='ex' onChange={this.handleChange} onBlur={this.handleBlurName} />
                <input type='text' name='rx' onChange={this.handleChange} />
            </>
        )
    }
}