import styles from './Home.module.css'
import logo from '../assets/fablogo.png'
import {Button} from '../comp/Button'
import gay from '../assets/game.png'
import mus from '../assets/music.png'
import mon from '../assets/money.png'
import yt from '../assets/yt.png'
import hom from '../assets/homeic.png'
import {Bigsec} from '../comp/Bigsec'
import cab from '../assets/fabofoto.jpg'
import mail from '../assets/mail.png'

export function Fabo(){
    return(
        <div className={styles.pag}>
            <title>Fabo</title>
            <div className={styles.con}>
                <img src={logo} className={styles.im}/>
                <div id={styles.but}>
                    <a href='/'><Button rot='Home' ic={hom}/></a>
                    <a href='/F329'><Button rot='F329' ic={mus}/></a>
                    <a href='/Preturbado'><Button rot='Preturbado' ic={yt} wid='110px'/></a>
                    <a href='/Gaymes'><Button rot='Gaymes' ic={gay}/></a>
                    <a href='/Apoia'><Button rot='Apoia' ic={mon}/></a>
                </div>
            </div>
            <div className={styles.con}>
                <Bigsec tit='Quem é esse caba?' sr={cab}>
                    <p>
                    Eu? Sou só um moleque com alguns recursos tecnológicos e um sonho. Desde que eu tinha uns 10 anos de idade
                    eu me interesso por programação, principalmente de jogos. Esse interesse foi crescendo com o passar dos anos,
                    tanto que fiz questão de cursar o ensino médio numa escola técnica que oferece um curso de Desenvolvimento de
                    Sistemas, o que fez meu fascínio pela área crescer ainda mais e de quebra me inspirou a fazer esse site.
                    </p>
                    <p>
                    Minha presença na internet sempre foi bem forte. Eu tive muitos canais no YouTube, dos quais a maioria eu
                    cheguei até a deletar; mas o mais """"famoso"""" deles ainda tá de pé e eu só não posto mais lá, o
                    <a href='https://www.youtube.com/@farofa9999/'> Farofa.</a> Já joguei muitos jogos, tenho contas em muitos
                    lugares, fiz muitas amizades online, enfim, tantas coisas que é até difícil lembrar. Esse site é mais uma das
                    formas que eu inventei de marcar minha presença na internet, e também de juntar todos os meus trabalhos
                    pessoais em um lugar só. Uma espécie de blog inspirado no conceito de "Indie web" que eu vi um vídeo sobre
                    a um tempo atrás.
                    </p>
                    <p>
                        Falando em trabalhos pessoais, tenho um canal no YouTube ainda """""ativo""""", o
                        <a href='/Preturbado'> Preturbado</a>, onde posto conteúdo variado, que é essencialmente só eu falando o
                        que penso de algo. Além disso, faço músicas inspiradas pelo Yun Li, sendo o nome do meu "alter ego de rap"
                        <a href='/F329'> F329.</a> Faço essas músicas desde que tenho uns 13 anos de idade e acho que é o que eu 
                        faço de melhor. E, pra fechar, faço <a href='/Gaymes'> jogos.</a> Quer dizer, pretendo fazer. Os jogos
                        que fiz até agora foram feitos numa plataforma muito limitada, pois não tinha computador até alguns meses
                        atrás e tive que fazê-los pelo celular, mas ainda sim fiz muitos jogos por essa plataforma, que
                        infelizmente se perderam pelo tempo e tudo que restou foram dois jogos. Mas eu me lembro vividamente de 
                        ter feito MUUUUUITO mais.
                    </p>
                    <p>É isso. Esse é o Fabo!!1!</p>
                </Bigsec>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <a href='mailto:fab.felix1057@gmail.com' style={{color:'black', textDecoration:'none'}}>
                        <Button rot='Mande-me um Email' wid='190px' ic={mail}/>
                    </a>
                    <p style={{fontSize: 13}}>Não garanto que vou ler nem responder.</p>
            </div>
        </div>
    )
}