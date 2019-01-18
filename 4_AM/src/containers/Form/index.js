import React, { Component } from "react";

class Form extends Component{ 
    constructor(props) {
        super(props);
        this.state = {user_name: '', gender: '', pronoun: '', hometown: '',
        foods: '', birthday: '', huid: 0, concentration: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        // FIX THE SUBMIT
        // alert('change this button ' + this.state.value);
        // event.preventDefault();

        alert(`User's name is ${this.state.user_name}, and ${this.state.pronoun} are from 
        ${this.state.hometown}. ${this.state.pronoun} was born on ${this.state.birthday}, 
        and ${this.state.pronoun} favorite foods are ${this.state.foods}. 
        At Harvard, ${this.state.user_name} studies ${this.state.concentration}.`)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <label>
                    Name:
                    <input type="text" name="user_name" value={this.state.user_name} onChange={this.handleChange}/>
                </label>
                <label>
                    Gender:
                    <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange}/>
                    <input type="radio" name="gender" value="male" checked> Male</input>
                    <input type="radio" name="gender" value="female"> Female</input>
                    <input type="radio" name="gender" value="other"> Other</input>
                </label>
                <label>
                    Pronoun:
                    <input type="text" name="pronoun" value={this.state.pronoun} onChange={this.handleChange}/>
                </label>
                <label>
                    Hometown:
                    <input type="text" name="hometown" value={this.state.hometown} onChange={this.handleChange}/>
                </label>
                <label>
                    Top three favorite foods (comma separated list):
                    <input type="text" name="foods" value={this.state.foods} onChange={this.handleChange}/>
                </label>
                <label>
                    Birthday:
                    <input type="date" name="birthday" value={this.state.birthday} onChange={this.handleChange}/>
                </label>
                <label>
                    HUID:
                    <input type="number" name="huid" value={this.state.huid} onChange={this.handleChange}/>
                </label>
                <label>
                    Concentration:
                    <input type="text" name="concentration" value={this.state.concentration} onChange={this.handleChange}/>
                </label>


                <button onClick={this.handleSubmit}>Submit</button>
            </div>

        );
    }
}

export default Form;