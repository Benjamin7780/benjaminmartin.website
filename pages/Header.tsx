import styles from '../styles/Header.module.css'

export default function Header({actualPage, setActualPage} : {actualPage:any, setActualPage:any}){
    return(
        <header className={styles.Header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><button onClick={()=>{setActualPage({actual: "Knowledge"})}}>Knowledges</button></li>
                    <li><button onClick={()=>{setActualPage({actual: "AboutMe"})}}>About Me</button></li>
                    <li><button onClick={()=>{setActualPage({actual: "HireMe"})}}>Hire me!</button></li>
                </ul>
            </nav>
        </header>
    );
}