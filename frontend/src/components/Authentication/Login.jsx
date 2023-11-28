import Eye from "../../assets/icons/Eye.png";
import { useState } from "react";
import { axiosCall, accessTokenIsValid, refreshTokenLS } from '../../conf/axios.js'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../conf/common.js";

function Login(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Create the submit method.
    const submit = async e => {
        e.preventDefault();
        const user = {
            'username': username,
            'password': password
        }
        const data = await axiosCall('api/token/create/', user, null, "POST")
        console.log(data)
        localStorage.setItem(ACCESS_TOKEN_KEY, data.access)
        localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh)
    };

    function fireSetUsername(e) { setUsername(e.target.value) } 
    function fireSetPassword(e) { setPassword(e.target.value) } 

    
    return (
        <div>
            <form className="auth-form" onSubmit={submit}>
                <div>
                    <input
                        type="text"
                        id="login-name-input"
                        onChange={fireSetUsername}
                        placeholder="Никнейм или электронная почта"
                    />
                </div>
                <div>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="login-pass-input"
                        onChange={fireSetPassword}
                        className="pass-input"
                        placeholder="Пароль"
                    />
                    <img src={Eye} onClick={() => { setShowPassword(!showPassword) }} alt="" />
                </div>
                <p className='forget-password'>
                    <span>Забыли пароль?</span>
                    <a className='Recover' href='#'>Восстановить</a>
                </p>
                <button className='войти'>Войти</button>
            </form>
        </div>
    );
}

export default Login;