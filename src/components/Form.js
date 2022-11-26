import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: ''
        }
    }
    handlechange = (e) => {
        const value = e.target.value;
        this.setState({ [e.target.name]: value })
    }
    
    handlesubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // const { firstname } = this.state;
        // if(firstname === 'error') throw new Error('someone call the errorboundry??')
    }

    render() {
        //if the user will submit the form after typing "error" on the firstname input 
        //then errorboundry will get in action
        if(this.state.firstname === 'error'){
            throw new Error('please change your name ')
        }
        return (

            <form onSubmit={this.handlesubmit}>
                first name : <input type={'text'} name={'firstname'} onChange={this.handlechange} />
                <br /> last name : <input type={'text'} name={'lastname'} onChange={this.handlechange} />
                <br /><input type={'submit'} value={'submit'} />
            </form>
        )
    }
}
export default Form;