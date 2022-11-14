import { Outlet, Link } from "react-router-dom";
import styles from './Layout.module.scss'

const Layout = () => {
    return (
        <>
            <nav className={styles.header}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />

            <footer className={styles.footer}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                </ul>
            </footer>
        </>
    )
};

export default Layout;