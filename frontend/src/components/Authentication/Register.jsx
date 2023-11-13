import Eye from "../../assets/icons/Eye.png";
import { useState } from "react";
function Register(props) {
    let [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div className="form-group">
                <div>
                    <input type="text" id="name-input" placeholder="Введите никнейм" />
                    <input type="text" id="name-input" placeholder="Электронная почта" pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' />
                </div>
                <div>
                    <input type={showPassword ? "text" : "password"} id="pass-input" placeholder="Придумайте пароль" pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' />
                    <img src={Eye} onClick={() => { setShowPassword(!showPassword) }} alt="" />
                </div>
                <div>
                    <input type="password" id="pass2-input" placeholder="Повторите пароль" pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' />
                </div>
                <button className='войти'>Создать</button>
            </div>
        </div>
    );
}

export default Register;