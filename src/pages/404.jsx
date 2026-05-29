import styles from './Home.module.css'
import ids from './404.module.css'
import logo from '../assets/fof.png'
import {Bsnoimg} from '../comp/Bsnoimg'

export function Erro(){
    return(
        <div className={styles.pag}>
            <title>Erro 404</title>
            <div className={styles.con} id={ids.col}>
                <img src={logo} className={styles.im} id={ids.notilt}/>
                <Bsnoimg>
                    <div id={ids.c}>
                        <p>Me parece que essa página não existe, parça.</p>
                        <a href='/site/'>Come home.</a>
                    </div>
                </Bsnoimg>
            </div>
        </div>
    )
}