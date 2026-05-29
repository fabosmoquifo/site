import styles from './Home.module.css'
import anim from '../comp/Section.module.css'
import logo from '../assets/pretlogo.png'
import {Button} from '../comp/Button'
import gay from '../assets/game.png'
import bic from '../assets/fabo.png'
import mon from '../assets/money.png'
import yt from '../assets/music.png'
import hom from '../assets/homeic.png'
import {Bsnoimg} from '../comp/Bsnoimg'
import beta from '../assets/betinha.png'

export function Preturbado(){
    return(
        <div className={styles.pag}>
            <title>Preturbado</title>
            <div className={styles.con}>
                <img src={logo} className={styles.im}/>
                <div id={styles.but}>
                    <a href='/site/'><Button rot='Home' ic={hom}/></a>
                    <a href='/site/Fabo'><Button rot='Fabo' ic={bic}/></a>
                    <a href='/site/F329'><Button rot='F329' ic={yt}/></a>
                    <a href='/site/Gaymes'><Button rot='Gaymes' ic={gay}/></a>
                    <a href='/site/Apoia'><Button rot='Apoia' ic={mon}/></a>
                </div>
            </div>
            <div className={styles.con}>
                <Bsnoimg tit='Quem é Preturbado?'>
                    <p>
                    É a pura nata do Fabo. Desde que criei uma conta no Instagram com esse nome, sempre usei o Preturbado pra me expressar, falar
                    o que eu penso sem ser julgado, pois raramente teria alguém pra sequer me ouvir. Por isso o conteúdo que posto no 
                    <a href='https://www.youtube.com/@preturbado99'> canal do YouTube do Preturbado</a> é sempre bem cru, só eu falando o que
                    penso sobre determinado assunto com praticamente zero filtros.
                    </p>
                    <p>
                    Acho que falta muito disso na internet atual. Tudo agora é sobre atrair o maior número de pessoas possível pro seu conteúdo,
                    pra farmar dinheiro em cima disso com anúncios insuportáveis. Eu não vivi pra ver, mas sei que nem sempre a internet foi assim,
                    e genuinamente acho que deveria voltar a ser como era antes. Óbvio que é impossível derrubar toda essa parte comercial da
                    internet, pois tudo que envolve dinheiro sendo enfiado no bolso de grandes empresários raramente cai, mas não quero que nada
                    caia nem nada disso, só quero que a parte humana da internet seja um pouco mais presente. Por isso estou fazendo esse site e
                    pretendo trabalhar em alguns outros projetos, quero tornar pelo menos o meu moquifinho um lugar mais humano.
                    </p>
                </Bsnoimg>
            </div>
            <center><Bsnoimg tit="Pensamento da Vez"/></center>
            <div className={styles.con} style={{gap:'40px'}}>
                <div className={anim.ansec} style={{width:'20%', height:'20%'}}><img style={{width:'100%', height:'100%'}}src={beta}/></div>
                <div style={{marginTop:'100px'}}><Bsnoimg tit='Preturbado diz:' mw='700px'>
                <p>
                sera que um dia alguem realmente vai parar pra ler esses textinhos q eu vou escrever aqui? acho dificil. quem em sã consciência
                pararia pra ler os pensamentos aleatórios de um mlk que nem conhece?
                </p>
                </Bsnoimg></div>
            </div>
        </div>
    )
}