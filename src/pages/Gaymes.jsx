import styles from './Home.module.css'
import logo from '../assets/gaylogo.png'
import {Button} from '../comp/Button'
import gay from '../assets/music.png'
import bic from '../assets/fabo.png'
import mon from '../assets/money.png'
import yt from '../assets/yt.png'
import hom from '../assets/homeic.png'
import {Bsnoimg} from '../comp/Bsnoimg'
import {Bigsec} from '../comp/Bigsec'
import ids from './Gaymes.module.css'
import down from '../assets/down.png'
import dog from '../assets/doggo.jpg'
import dogpic from '../assets/dd.png'

export function Gaymes(){
    return(
        <div className={styles.pag} id={ids.h}>
            <title>Gaymes</title>
            <div className={styles.con}>
                <img src={logo} className={styles.im}/>
                <div id={styles.but}>
                    <a href='/site/'><Button rot='Home' ic={hom}/></a>
                    <a href='/site/Fabo'><Button rot='Fabo' ic={bic}/></a>
                    <a href='/site/F329'><Button rot='F329' ic={gay}/></a>
                    <a href='/site/Preturbado'><Button rot='Preturbado' ic={yt} wid='110px'/></a>
                    <a href='/site/Apoia'><Button rot='Apoia' ic={mon}/></a>
                </div>
            </div>
            <div className={styles.con}>
                <Bsnoimg tit='Jogos?'>
                    <p>
                    Como eu disse em "Quem é esse caba?", na página <a href='/Fabo'>Fabo</a>, meu principal interesse no ramo de informática é
                    justamente na programação de jogos. Não lembro exatamente como começou, mas meu fascínio por esse tipo de programação se
                    fortaleceu muito graças a Youtubers como <a href='https://www.youtube.com/@Bot%C3%A3oSelect'>Botão Select</a>,
                    <a href='https://www.youtube.com/@Danidev'> Dani</a> e principalmente <a href='https://www.youtube.com/@GEMAPLYS'>Gemaplys</a>.
                    Acho que eu nunca teria tentado fazer jogos se não fosse por esses caras fazerem uma boa parte da minha infância e começo
                    da minha adolescência, porém, como eu também citei na página Fabo, tudo que eu tinha pra desenvolver jogos até poucos meses
                    atrás era um celular e o aplicativo Pocket Code.
                    </p>
                    <p>
                    Óbvio que os jogos que fiz nesse aplicativo não são exatamente os melhores jogos do mundo, mas foi certamente uma época
                    notável da minha vida. Eu me divertia fazendo aqueles projetinhos, naquela desculpa de linguagem de programação.
                    Infelizmente tudo que sobrou dessa época foram dois joguinhos sobre um cachorro perdido, que eu devo detalhar mais afundo em
                    suas respectivas seções da página.
                    </p>
                </Bsnoimg>
            </div>
            <center><Bsnoimg tit='Lançamentos'/></center>
            <div className={styles.con} id="lanc">
                <Bigsec tit='Doggoventures' stit='22/08/2024' sr={dog}>
                    <p>
                    "Doggoventures" é o segundo jogo da saga do Doggo, o cachorro perdido que eu mencionei em "Jogos?". A saga do Doggo é bem
                    complexa, na verdade. Doggoventures contaria a parte da saga em que ele fica preso na Cidade dos Gatos, e seria basicamente
                    um Undertale: o Doggo ia ter que arrumar um jeito de sair dali, ia encontrar um monte de inimigos no caminho dele, porém com
                    toda uma questão de moral envolvida, pois afinal, será que os gatos realmente são os inimigos da história? Quem invadiu o
                    território deles foi você, o Doggo.
                    </p>
                    <p>
                    Eu sei, eu sei. "Cidade dos Gatos", "Saga do Doggo", do que cacetes esse moleque tá falando? Tinha toda uma lore por trás
                    de tudo isso que se conectava inclusive com o mundo onde se passava os vídeos do canal 
                    <a href='https://www.youtube.com/@farofa9999'> Farofa</a>. Aliás, praticamente tudo que eu produzia nessa época era parte
                    dessa lore. Esse Doggo, inclusive, é o mesmo cachorro que é boss final do "Jumpy Cat" e do "Jumpy Cat 2", dois jogos
                    que viraram praticamente lost media, tendo sobrado só uma gameplay do Jumpy Cat 2 no canal Preturbado
                    (<a href='https://youtu.be/LLU7FkzOX0k?si=xvfuEWciWsJLg_ml'>assista ela aqui</a>) e um trailer do lançamento também do
                    Jumpy Cat 2 no canal Farofa (<a href='https://youtu.be/aQVO8kS_QZE?si=DcdHn_dPlCo-kPm3'>assista ele aqui</a>).
                    </p>
                    <p>
                    Então, "Saga do Doggo" é, nada mais nada menos, do que o passado do vilão de Jumpy Cat. Algo interessante é que como eu
                    mencionei antes, Doggoventures ia ser tipo um Undertale, ou seja, ia ter várias rotas e vários finais, só que o final
                    canônico pra lore seria o final da "rota genocida" do jogo. Insano, né? Mas eu diria que ia ser mais tipo um Deltarune, pois
                    eu ia separar a história em vários capítulos, porém adivinha só! Eu só fiz o primeiro capítulo!! yEsS!! Não tem literalmente
                    mais nada dessa saga e nem de nada pra contar a história. Talvez um dia eu reviva toda essa lore, mas não contem muito com
                    isso.
                    </p>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <a id={ids.ai} href='https://www.mediafire.com/file/e1fyg6ewpgee1a2/doggoventures.apk/file'>
                    <Button rot='Baixe o jogo' wid='150px' ic={down}/>
                    </a>
                    <p style={{fontSize: 13}}>Disponível apenas em .apk</p>
                    </div>
                </Bigsec>
            </div>
            <div className={styles.con}>
                <Bigsec tit='Dungeon Dog' sr={dogpic} stit='26/01/2024'>
                    <p>
                    "Dungeon Dog" é o primeiro jogo da Saga do Doggo. Ele é uma espécie de point & click bem bunda que eu tinha feito lá pra 2021
                    e remasterizei em 2024. Se os gráficos dessa versão já são ruins, imagina como eram os da versão original, que fiz quando tinha
                    12 anos. Ainda bem que se perdeu com o tempo.
                    </p>
                    <p>
                    O jogo se passa numa """"""masmorra"""""", onde o Doggo foi jogado por um cara por ter mijado no quintal dele, ou algo assim.
                    Isso nem é dito no jogo, eu só me lembro desse ser o motivo que eu inventei pra explicar porque caralhos tem um cachorro em
                    uma masmorra. O mapa do jogo é extremamente curto e o puzzle não faz muito sentido, mas foi o melhor que eu consegui fazer com
                    12 anos de idade e o Pocket Code.
                    </p>
                    <p>
                    Nem a música do jogo se salva de ser uma merda. O Dungeon Dog original nem música tinha, isso era uma feature exclusiva do
                    remaster, e é meio bunda por razões que eu expliquei em "Dungeon Dog OST", na página <a href="/F329">F329</a>.
                    </p>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <a id={ids.ai} href='https://www.mediafire.com/file/8hqyml68qz3x52t/dungeon_dog.apk/file'>
                    <Button rot='Baixe o jogo' wid='150px' ic={down}/>
                    </a>
                    <p style={{fontSize: 13}}>Disponível apenas em .apk</p>
                    </div>
                </Bigsec>
            </div>
        </div>
    )
}