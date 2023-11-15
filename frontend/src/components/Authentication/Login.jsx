import Eye from "../../assets/icons/Eye.png";
import { useState } from "react";

function Login(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Create the submit method.
    const submit = async e => {
        e.preventDefault();
    };

    return (
        <div>
            <form className="form-group" onSubmit={submit}>
                <div>
                    <input
                        type="text"
                        id="login-name-input"
                        placeholder="Никнейм или электронная почта"
                    />
                </div>
                <div>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="login-pass-input"
                        className="pass-input"
                        placeholder="Пароль"
                    />
                    <img src={Eye} onClick={() => { setShowPassword(!showPassword) }} alt="" />
                </div>
                <p className='помошник'>
                    <span>Забыли пароль?</span>
                    <a className='восстановить' href='#'>Восстановить</a>
                </p>
                <button className='войти'>Войти</button>
            </form>
        </div>
    );
}

export default Login;