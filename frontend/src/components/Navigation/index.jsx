import { Outlet, Link } from 'react-router-dom'
import styles from './style.scss'


export default function Navigation() {
    return (
        <main style={styles}>
            <nav className='main-navbar'>
                <div className="upper-nav">
        
                </div>
                <Outlet />
            </nav>
        </main>
    )
}
