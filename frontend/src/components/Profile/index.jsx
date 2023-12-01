import './style.scss'
import { logoutEntirely } from '../../conf/common.js'
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate()
    function logout() {
        navigate('/auth')
        logoutEntirely()
    }

    return (
        <div id="profile-component">
            <h1>Profile</h1>

            <hr />

            <button className='danger-btn' onClick={logout}>
                Logout
            </button>
        </div>
    );
}

export default Profile;