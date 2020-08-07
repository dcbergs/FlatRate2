import React, { Component } from 'react';

export class PartsRow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <tr>
                <td>{this.props.part.name}</td>
                <td>{this.props.part.description}</td>
            </tr>
            )
    }
} 