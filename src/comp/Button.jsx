import styles from './Button.module.css'

export function Button(props){
    return(
        <div className={styles.con}>
            <div className={styles.kid} style={{width: props.wid}}>
                <img src={props.ic} style={{width: 20}}/>
                <div style={{paddingLeft: 5}}>{props.rot}</div>
            </div>
        </div>
    )
}