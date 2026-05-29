import styles from './Bigsec.module.css'

export function Bsnoimg(props){
    return(
        <div className={styles.ansec}>
            <div className={styles.sec} style={{maxWidth: props.mw}}>
                <h1>{props.tit}</h1>
                <div>{props.children}</div>
            </div>
        </div>
    )
}