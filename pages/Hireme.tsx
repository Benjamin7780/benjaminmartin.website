import styles from '../styles/HireMe.module.css'
export default function HireMe(){
    return(
        <div className={styles.HireContainer}>
            <p>Do you like my work and you want to hire me?</p>
            <p>There is my Contact Media</p>
            <a href="https://www.linkedin.com/in/benjam%C3%ADn-mart%C3%ADn-583250247/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="mailto:benjaminm7780@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
        </div>
    );
}