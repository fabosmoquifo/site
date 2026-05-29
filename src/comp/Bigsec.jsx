import styles from './Bigsec.module.css'

export function Bigsec(props){
    return(
        <div className={styles.ansec}>
            <div className={styles.sec}>
                <img className={styles.im} src={props.sr}/>
                <h1>{props.tit}</h1>
                <h2>{props.stit}</h2>
                <div>{props.children}</div>
            </div>
        </div>
    )
}