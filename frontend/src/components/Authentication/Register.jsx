import Eye from "../../assets/icons/Eye.png";
import { useState } from "react";


function Register(props) {
    let [showPassword, setShowPassword] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState({})

    const PATTERN = /^[a-zA-Z0-9]+$/;

    function fireSetUsername(e) {
        const val = e.target.value
        if (val.length !== 0) {
            if (!PATTERN.test(val)) {
                setError({ ...error, usernameErr: 'Никнейм может содержать только латинские буквы и цифры' })
            } else {
                setError({ ...error, usernameErr: '' })
            }
        } else {
            setError({ ...error, usernameErr: '' })
        }
        setUsername(val) 
    } 
    function fireSetPassword(e) {
        const val = e.target.value
        const inputName = e.target.name

     
        let errName = inputName === "password"  ?  'passwordErr' : 'password2Err'

        if (val.length !== 0) {
            if (!PATTERN.test(val)) {
                setError({ ...error, [errName]: 'Пароль может содержать только латинские буквы и цифры' })
            } else {
                setError({ ...error, [errName]: '' })
            }
        } else {
            setError({ ...error, [errName]: '' })
        }

        inputName === "password"  ?  setPassword(val) : setPassword2(val) 
    } 
   

    return (
        <div>
            <form className="auth-form">
                <div>
                    <input type="text" id="register-name-input" placeholder="Введите никнейм" />
                    <input type="text" id="register-email-input" placeholder="Электронная почта" pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' />
                </div>
                <div>
                    <input 
                        id="register-pass-input" 
                        type={showPassword ? "text" : "password"} 
                        className="pass-input" 
                        placeholder="Придумайте пароль" 
                        name="password"
                    />
                    <img src={Eye} onClick={() => { setShowPassword(!showPassword) }} alt="" />
                </div>
                <div>
                    <input 
                        id="pass2-input" 
                        type="password" 
                        placeholder="Повторите пароль" 
                        name="password2"
                    />
                </div>
                <button className='войти'>Создать</button>
            </form>
        </div>
    );
}

export default Register;