import React from 'react';

class Ejercicio1 extends React.Component {

    constructor(props){
        super(props);
        this.state={
            name:'',
            description:'',
            language:'Portuguese',
        }
        this.handleChange=this.changeNameInput.bind(this);
        this.handleChange2=this.changeDescriptionInput.bind(this);
        this.handleChange3=this.changeLanguageInput.bind(this);
    }
    changeNameInput(event){
        this.setState({
            name: event.currentTarget.value,
        })
    }
    changeDescriptionInput(event){
        this.setState({
            description:event.currentTarget.value,
        })
    }
    changeLanguageInput(event){
        console.log(event);
        this.setState({
            language:event.currentTarget.value,
        })
    }
    render() {
        const defaultName=this.state.name||'Film name';
        const defaultDescription =this.state.description||' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores, dolor corporis corrupti, veritatis ipsam soluta animi quia totam ullam laboriosam voluptatibus. Soluta dolor deleniti est doloribus asperiores qui maiores.';
        const defaultLanguage=this.state.language||'Portuguese';
        return (
            <React.Fragment>
            <form className="form__container">
                <div className="form-group">
                    <label forHtml="name">Name</label>
                    <input type="text" className="form-control" id="name" onChange={this.handleChange} value={this.state.name}/>
                </div>
                <div className="form-group">
                    <label forHtml="description">Description</label>
                    <textarea id="description" className="form-control" rows="3" onChange={this.handleChange2} >{this.state.description}</textarea>
                </div>
                <div className="form-group">
                    <label forHtml="language">Language</label>
                    <select id="language" className="form-control" value={this.state.language} onChange={this.handleChange3} >
                        <option value="Spanish">Spanish</option>
                        <option value="English">English</option>
                        <option value="Portuguese" >Portuguese</option>
                    </select>
                </div>
            </form>
            <div className="card__container">
            <div className="card bg-light mb-3" style={{maxWidth: 400}}>
            <div className="card-header">{defaultLanguage}</div>
            <div className="card-body">
              <h5 className="card-title">{defaultName}</h5>
              <p className="card-text">{defaultDescription}</p>
            </div>
          </div>
          </div>
          </React.Fragment>
        );

    }



}



export default Ejercicio1;