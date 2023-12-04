import Eye from "../../assets/icons/Eye.png"
import { useState } from "react"
import { toast } from 'react-toastify'
import { registerNewUser } from "../../conf/axios.js"


function Register(props) {
    let [showPassword, setShowPassword] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setError] = useState({})

    const PATTERN = /^[a-zA-Z0-9]+$/;

    function fireSetUsername(e) {
        const val = e.target.value
        if (val.length !== 0) {
            if (!PATTERN.test(val)) {
                setError({ ...errors, usernameErr: 'Никнейм может содержать только латинские буквы и цифры' })
            } else {
                setError({ ...errors, usernameErr: '' })
            }
        } else {
            setError({ ...errors, usernameErr: '' })
        }
        setUsername(val)
    }
    function fireSetPassword(e) {
        const val = e.target.value
        const inputName = e.target.name


        let errName = inputName === "password" ? 'passwordErr' : 'password2Err'

        if (val.length !== 0) {
            if (!PATTERN.test(val)) {
                setError({ ...errors, [errName]: 'Пароль может содержать только латинские буквы и цифры' })
            } else {
                setError({ ...errors, [errName]: '' })
            }
        } else {
            setError({ ...errors, [errName]: '' })
        }

        inputName === "password" ? setPassword(val) : setPassword2(val)
    }
    function fireSetEmail(e) {
        e.preventDefault()
        // const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        const val = e.target.value
        // if (val.length !== 0) {
        //     if (!emailPattern.test(val)) {
        //         setError({ ...errors, emailErr: 'Некорректный email' })
        //     } else {
        //         setError({ ...errors, emailErr: '' })
        //     }
        // } else {
        //     setError({ ...errors, emailErr: '' })
        // }
        setEmail(val)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (password !== password2) {
            setError({ ...errors, password2Err: 'Пароли не совпадают' })
            return
        }
        if (errors.usernameErr || errors.passwordErr ||
            errors.password2Err || errors.emailErr) {
            toast.error('Пожалуйста, заполните все поля корректно', { toastId: 9 })
            return
        }
        try {
            registerNewUser(username, password, password2, email)
            toast.success('Успешное регистрация, вы сейчас можете войти', { toastId: 10 })
            e.target.reset()
            props.reloadAuthPage()
        } catch (err) {
            toast.error('Что то произошло не так, повторите попытку', { toastId: 10 })
        }
    }

    return (
        <div>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text" id="register-name-input"
                        placeholder="Введите никнейм"
                        onChange={fireSetUsername}
                    />
                    <p className="error">
                        {errors.usernameErr}
                    </p>

                    <input type="email" id="register-email-input" placeholder="Электронная почта"
                        onChange={fireSetEmail}
                    />
                    <p className="error">
                        {errors.emailErr}
                    </p>
                </div>
                <div>
                    <input
                        id="register-pass-input"
                        type={showPassword ? "text" : "password"}
                        className="pass-input"
                        placeholder="Придумайте пароль"
                        name="password"
                        onChange={fireSetPassword}
                    />
                    <img src={Eye} onClick={() => { setShowPassword(!showPassword) }} alt="" />
                    <p className="error">
                        {errors.passwordErr}
                    </p>
                </div>
                <div>
                    <input
                        id="pass2-input"
                        type="password"
                        placeholder="Повторите пароль"
                        name="password2"
                        onChange={fireSetPassword}
                    />
                    <p className="error">
                        {errors.password2Err}
                    </p>
                </div>
                <button className='войти'>Создать</button>
            </form>
        </div>
    );
}

export default Register;