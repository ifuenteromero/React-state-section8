import React from 'react';

class FormExample extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name:'',
        }
        this.handleChange = this.copyInputValue.bind(this);
        
    }
    copyInputValue(event){
        this.setState({
            name : event.currentTarget.value.toUpperCase(),
        });

    }
    render() {
        return (
            <form className="form__container">
                <div className="form-group">
                    <label forHtml="name">Name :</label>
                    <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <input type="submit" className="btn btn-primary" value="Enviar" />
            </form>
        );

    }
}



export default FormExample;