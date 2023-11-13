import Eye from "../../assets/icons/Eye.png";
import { useState } from "react";

function Login(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Create the submit method.
    const submit = async e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        };
    };

    return (
        <div>
            <div className="form-group">
                <div>
                    <input type="text" id="name-input" placeholder="Никнейм или электронная почта" />
                </div>
                <div>
                    <input type={showPassword ? "text" : "password"} id="pass-input" placeholder="Пароль" />
                    <img src={Eye} onClick={() => { setShowPassword(!showPassword) }} alt="" />
                </div>
                <p className='помошник'>
                    <span>Забыли пароль?</span>
                    <a className='восстановить' href='#'>Восстановить</a>
                </p>
                <button className='войти'>Войти</button>
            </div>
        </div>
    );
}

export default Login;