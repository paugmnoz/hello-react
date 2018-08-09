import * as React from 'react';
import FormComponent from '../../components/FormComponent/FormComponent';

class Login extends React.Component {

    public state = {
        isLogged: false
    }

    constructor( props:any) {
        super(props);
        this.validate = this.validate.bind(this);
        }

    public validate (user: string, password: string) {
        if (user === 'camila' && password === '1234') {
            return this.setState({ isLogged: true})
        }
        this.setState({ isLogged: false})
    }


    public render() {
        return (
            <div> 
                {this.state.isLogged ?
                <h1>Estoy Loggeado</h1> :   
                <h1>No Estoy Loggeado</h1>}
                <FormComponent onValidate={this.validate}/> </div>
        )
    }
}

export default Login;