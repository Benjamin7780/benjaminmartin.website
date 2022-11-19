import Image from "next/image";
import styles from '../styles/AboutMe.module.css'
export default function AboutMe(){

    return(
        <div className={styles.divContainer}>
            <div>
            <Image src="" alt="" placeholder="blur" width={300} height={300}></Image>
            </div>
            <p className={styles.myname}>Benjamin Martin</p>
            <p className={styles.yearsOld}>19 Years Old, Argentina</p>
            <p className={styles.introduction}>Hello, my name is Benjamin Martin and I am a Front-End Developer with a Huge experience in the Developing field, with more than a year of job experience. I work as a freelancer from home and I am always looking for new opportunities.</p>
            <p className={styles.experience}>I am a JavaScript developer with over 1 year of experience making works in the enviroment of consuming APIS and Database Connections(MySQL, SQL Server, Dynamo DB)</p>
        </div>
    );
}