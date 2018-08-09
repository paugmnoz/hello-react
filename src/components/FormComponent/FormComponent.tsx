import * as React from 'react';

const FormComponent = ({onValidate}: any) => {

   const submitToValidate = (event: any)=> {
    event.preventDefault();
    console.log(event.target.user.value, event.target.pass.value);
}

    return (
        <div>
            <form onSubmit={submitToValidate}>
                <div><input type="text" name="user" id="" /></div>
                <div><input type="text" name="pass" id="" /></div>
                <div><button>GO</button></div>
            </form>
        </div>
    )
}

export default FormComponent;