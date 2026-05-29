import styles from './Home.module.css'
import anim from '../comp/Section.module.css'
import logo from '../assets/apologo.png'
import {Button} from '../comp/Button'
import gay from '../assets/music.png'
import bic from '../assets/fabo.png'
import mon from '../assets/game.png'
import yt from '../assets/yt.png'
import hom from '../assets/homeic.png'
import pix from '../assets/emcop.jpg'
import {Bsnoimg} from '../comp/Bsnoimg'

export function Apoia(){
    return(
        <div className={styles.pag}>
            <title>Apoia</title>
            <div className={styles.con}>
                <img src={logo} className={styles.im}/>
                <div id={styles.but}>
                    <a href='/'><Button rot='Home' ic={hom}/></a>
                    <a href='/Fabo'><Button rot='Fabo' ic={bic}/></a>
                    <a href='/F329'><Button rot='F329' ic={gay}/></a>
                    <a href='/Preturbado'><Button rot='Preturbado' ic={yt} wid='110px'/></a>
                    <a href='/Gaymes'><Button rot='Gaymes' ic={mon}/></a>
                </div>
            </div>
            <div className={styles.con} style={{flexDirection:'column', alignItems:'center',gap:'50px'}}>
                <Bsnoimg tit='Faça uma doação!' mw='700px'>
                    <h2>Doe qualquer valor para meu Pix e me faça feliz :)</h2>
                    <b>ATENÇÃO:</b>
                    <p>Ao fazer uma doação para a chave Pix abaixo, você concorda que qualquer quantia doada é MEU, para
                        MEU uso pessoal e/ou em meus projetos. Em caso de arrependimento da doação, comunique-me o mais cedo possível por Email
                        para solicitar um reembolso. O contato deve ser feito num período de 5 dias, após isso será entendido que posso gastar
                        o dinheiro. Resumindo, tenha certeza que quer fazer uma doação!
                    </p>
                </Bsnoimg>
                <Bsnoimg>
                    <div className={anim.ansec}><img src={pix}/></div>
                    <center><h2>Último doador(a):</h2>
                    <h1>Chaveiro</h1>
                    <h3>Muito obrigado pelo seu apoio! :)</h3>
                    </center>
                </Bsnoimg>
            </div>
        </div>
    )
}