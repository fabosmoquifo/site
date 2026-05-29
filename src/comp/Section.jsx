import styles from './Section.module.css'
import {Button} from './Button'
import a from '../assets/ar.png'
import {HashLink} from 'react-router-hash-link'

export function Section(props){
    return(
        <div className={styles.ansec}>
            <div className={styles.sec}>
                <h1>{props.tit}</h1>
                <h2>{props.stit}</h2>
                <img className={styles.im} src={props.sr}/>
                <div className={styles.in}><HashLink smooth to={props.goto}
                ><Button wid='150px' rot="Saiba mais" ic={a}/></HashLink></div>
            </div>
        </div>
    )
}