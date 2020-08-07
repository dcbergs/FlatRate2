import React, { Component } from 'react';
import { PartsRow } from './PartsRow';
import { CustomModal } from '../utility/CustomModal';
import { AddPartForm } from './AddPartForm';

export class PartListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            parts: [],
            showAddForm: false,
        }
        this.showAddPart = this.showAddPart.bind(this)
        this.hideAddPart = this.hideAddPart.bind(this)
        this.refreshParts = this.refreshParts.bind(this)
    }

    componentDidMount() {
        this.refreshParts()
    }

    showAddPart() {
        this.setState({ showAddForm: true })
    }

    hideAddPart() {
        this.setState({ showAddForm: false })
    }

    async refreshParts() {
        const response = await fetch('api/part/')
        const data = await response.json()
        this.setState({ parts: data, loading: false })
    }

    render() {

        const allParts = this.state.parts.map((part) => <PartsRow part={part} key={part.id}/>)

        return (
            <>
                <button onClick={this.showAddPart}>Add Part</button>
                <CustomModal show={this.state.showAddForm} hide={this.hideAddPart} form={<AddPartForm hide={this.hideAddPart} save={this.refreshParts} />} />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.loading
                            ? <tr><td>loading...</td></tr>
                            : allParts
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
