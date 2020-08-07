import React, { Component } from 'react';

export class AddPartForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameText: '',
            nameErr: '',
            descText: '',
            descErr: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        if (name === 'nameText' && value !== '') {
            this.setState({
                nameErr: ''
            })
        }

        if (name === 'descText' && value !== '') {
            this.setState({
                descErr: ''
            })
        }

        this.setState({
            [name]: value,
        })
    }

    async handleSubmit(event) {
        event.preventDefault()
        //validate fields?
        if (this.state.nameText === '') {
            this.setState({
                nameErr: 'Must include a name!'
            })
        }
        if (this.state.descText === '') {
            this.setState({
                descErr: 'must include a description!'
            })
        }
        //if valid, use function passed in props to close modal/submit to DB
        if (this.state.nameErr === '' && this.state.descErr === '') {
            await fetch('api/part', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.nameText,
                    description: this.state.descText,
                })
            })
            this.props.save()
            this.props.hide()
        }
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        name="nameText"
                        type="text"
                        onChange={this.handleInputChange}
                    />
                </label>
                {this.state.nameErr ? <><br /><label>{this.state.nameErr}</label><br /></> : ''}
                <label>
                    Description:
                    <input
                        name="descText"
                        type="text"
                        onChange={this.handleInputChange}
                    />
                </label>
                {this.state.descErr ? <><br /><label>{this.state.descErr}</label><br /></> : ''}
                <br />
                <input type="submit" value="Add" />
            </form>
        )
    }
}