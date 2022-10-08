import React, {Component} from 'react';

class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form : {
                username: '',
                age: 0,
                email: '',
                gender: ''
            }
        };

    };

    changeInput = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };

    addUser = (e) => {
        e.preventDefault()
        console.log(this.state.form)
        this.clearAllButton()
    };

    clearAllButton = () => {
        this.setState({
            form: {
                username: '',
                age: 0,
                email: ''
            }
            }
        )
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addUser}>
                    <input
                        required
                        value={this.state.form.username}
                        onChange={this.changeInput}
                        type="text"
                        placeholder='username'
                        name='username'
                    />
                    <input
                        required
                        value={this.state.form.age}
                        onChange={this.changeInput}
                        type="number"
                        placeholder='age'
                        name='age'
                    />
                    <input
                        required
                        value={this.state.form.email}
                        onChange={this.changeInput}
                        type="email"
                        placeholder='email'
                        name='email'
                    />
                    <select name='gender' onChange={this.changeInput}>
                        <option value="men">men</option>
                        <option value="women">women</option>
                    </select>
                    <button type={"submit"} onClick={this.addUser}>add</button>
                    <button onClick={this.clearAllButton}>clear all</button>
                </form>
            </div>
        );
    }
}

export default FormPage;