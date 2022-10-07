import React from "react";

class ContactsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    changeInput = (e) => {
        this.setState({input: e.target.value})
        console.log(this.state)
    };

    clearInput = () => {
        this.setState({input: ''})
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={this.changeInput}/>
                <button onClick={this.changeInput}>add</button>
                <button onClick={this.clearInput}>clear</button>
            </div>
        )
    }
}


export default ContactsPage;