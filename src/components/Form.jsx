import React, {useState} from 'react';
import Signupform from './SignupForm';
import Registeredform from './RegisteredForm';



const Form = () => {
    const [formIsSubmit, setFormIsSubmit] = useState(false);

    const submitForm = () =>{
        setFormIsSubmit(true);
    }

    return (
        <div>
            {!formIsSubmit ? <Signupform submitForm={submitForm}/> : <Registeredform/>}
        </div>
    );
}

export default Form;
