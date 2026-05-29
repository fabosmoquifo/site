import styles from './Home.module.css'
import logo from '../assets/logo.png'
import radjo from '../assets/radjo.jpg'
import {Section} from '../comp/Section'
import {Button} from '../comp/Button'
import ovo from '../assets/ovodepascoa.wav'
import bic from '../assets/fabo.png'
import gay from '../assets/game.png'
import mus from '../assets/music.png'
import mon from '../assets/money.png'
import yt from '../assets/yt.png'
import dog from '../assets/doggo.jpg'
import prtbd from '../assets/pfp.jpg'

export function Home(){
    const som = new Audio(ovo);
    const ovof = () => {som.play()}
    return(
        <div className={styles.pag}>
            <title>Fabo's Moquifo</title>
            <div className={styles.con}>
                <img src={logo} className={styles.im} onClick={ovof}/>
                <div id={styles.but}>
                    <a href='/Fabo'><Button rot='Fabo' ic={bic}/></a>
                    <a href='/F329'><Button rot='F329' ic={mus}/></a>
                    <a href='/Preturbado'><Button rot='Preturbado' ic={yt} wid='110px'/></a>
                    <a href='/Gaymes'><Button rot='Gaymes' ic={gay}/></a>
                    <a href='/Apoia'><Button rot='Apoia' ic={mon}/></a>
                </div>
            </div>
            <div className={styles.con}>
                <Section tit="Último lançamento do F329" stit="Radjo" sr={radjo} goto='/F329#ul'/>
                <Section tit="Pensamento da Vez" stit='No que Preturbado está pensando?' sr={prtbd} goto='/Preturbado'/>
                <Section tit="Último lançamento de gaymes" stit="Doggoventures" sr={dog} goto='/Gaymes#lanc'/>
            </div>
        </div>
    )
}