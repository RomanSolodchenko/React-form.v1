import React, {useState} from 'react';
import Validation from './validation';


const Signupform = () => {

   const handleFormSubmit = (event) =>{
       event.preventDefault(); // данная функция предотвращает перезагрузку страницы принажатии на кнопку сиг-ап, для отправки формы
        setErrors(Validation(values));// проверка введенных данных 

   } 

    const [values, setValues] = useState({ // отслеживание введеных значений и установка начальных
        fullname:"",
        email:"",
        password:""
        });


const handleChange = (event) =>{
setValues({
    ...values,
    [event.target.name]: event.target.value
});
}// введеные данные пользователем и присвоение этих знчений

const [errors, setErrors] = useState({

})


  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Registration</h2>
        </div>
            <form action="" className="form-wrapper">

                <div className="name">
                    <label htmlFor="" className="label">Name</label>
                    <input type="text" 
                    className="input" 
                    name='fullname' 
                    value={values.fullname} 
                    onChange = {handleChange} // отслеживать значение
                    />

                    {errors.fullname && <p className="error">{errors.fullname}</p>}
                    
                </div>

                <div className="email">
                    <label htmlFor="" className="label">Email</label>
                    <input type="email"
                     className="input"
                      name='email'
                       value={values.email}
                       onChange = {handleChange}
                       />
                       {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="password">
                    <label htmlFor="" className="label">Password</label>
                    <input type="password"
                     className="input"
                      name='password'
                       value={values.password}
                       onChange = {handleChange}
                       />
                       {errors.password && <p className="error">{errors.password}</p>} 
                </div>
<div>
    <button className="submit" onClick={handleFormSubmit}>sign up</button>
</div>
</form>

      </div>
    </div>
  );
};

export default Signupform;
