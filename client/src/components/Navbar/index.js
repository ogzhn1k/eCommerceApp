import React from 'react'
import { Link } from "react-router-dom";
import styles from "./styles.module.css"
import { Button } from '@chakra-ui/react'

function Navbar() {
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <Link to="/">eCommerce</Link>
                    </div>
                    <ul className={styles.menu}>
                        <li>
                            <Link to="/">Products</Link>
                        </li>

                    </ul>
                </div>
                <div className={styles.right}>
                    <Link to="/signIn">
                        <Button colorScheme='pink' variant='outline'>Login</Button>
                    </Link>
                    <Link to="/signUp">
                        <Button colorScheme='pink' variant='outline'>Register</Button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar