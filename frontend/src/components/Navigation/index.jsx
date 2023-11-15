import { Outlet, Link } from 'react-router-dom'
import styles from './style.scss'


export default function Navigation() {
    return (
        <div className='main-navbar' style={styles}>
            <h2>Nav</h2>
            <Outlet />
        </div>
    )
}
