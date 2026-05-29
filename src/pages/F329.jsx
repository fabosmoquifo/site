import styles from './Home.module.css'
import ids from './F329.module.css'
import logo from '../assets/f32logo.png'
import {Button} from '../comp/Button'
import gay from '../assets/game.png'
import bic from '../assets/fabo.png'
import mon from '../assets/money.png'
import yt from '../assets/yt.png'
import hom from '../assets/homeic.png'
import mus from '../assets/music.png'
import ar from '../assets/ar.png'
import {Bsnoimg} from '../comp/Bsnoimg'
import {Bigsec} from '../comp/Bigsec'
import pic from '../assets/radjo.jpg'
import pic2 from '../assets/m3.jpg'
import pic3 from '../assets/barmen.jpg'
import pic4 from '../assets/mizera.jpg'
import pic5 from '../assets/etectapes.jpg'
import pic6 from '../assets/justthefeet.jpg'
import pic7 from '../assets/stanger.jpg'
import pic8 from '../assets/chungus.jpg'
import pic9 from '../assets/luvsux.jpg'
import pic10 from '../assets/theforsaken.jpg'
import pic11 from '../assets/fff4bttf.jpg'
import pic12 from '../assets/hbh.jpg'
import pic13 from '../assets/8bit.png'
import pic14 from '../assets/ddost.png'
import pic15 from '../assets/lol.png'
import pic16 from '../assets/merda.png'
import pic17 from '../assets/coco.png'
import pic18 from '../assets/bosta.png'

export function F329(){
    return(
        <div className={styles.pag} id={ids.h}>
            <title>F329</title>
            <div className={styles.con}>
                <img src={logo} className={styles.im}/>
                <div id={styles.but}>
                    <a href='/'><Button rot='Home' ic={hom}/></a>
                    <a href='/Fabo'><Button rot='Fabo' ic={bic}/></a>
                    <a href='/Preturbado'><Button rot='Preturbado' ic={yt} wid='110px'/></a>
                    <a href='/Gaymes'><Button rot='Gaymes' ic={gay}/></a>
                    <a href='/Apoia'><Button rot='Apoia' ic={mon}/></a>
                </div>
            </div>
            <div className={styles.con}>
                
                <Bsnoimg tit='Quem é F329?'>
                    <p>
                    Como eu disse na página <a href='/Fabo'> Fabo</a>, F329 é o meu "alter ego" de rap. Em outras palavras, é
                    o meu nome de "artista musical". Eu faço músicas inspiradas no estilo do Yun Li e compartilho elas no canal
                    <a href='https://www.youtube.com/@fodase99'> F329</a>, no YouTube. Lá também existem algumas composições
                    instrumentais, porém direi mais sobre essas no próximo parágrafo. Apesar de algumas não se encaixarem tanto
                    nessa categoria, as músicas que faço são para expressar sentimentos e até narrar acontecimentos reais, dos
                    quais me incomodaram ou incomodam o suficiente para transformá-los em arte, numa tentativa de me livrar
                    deles no processo. Dramático, não é? Mas é só meu jeito de lidar com as coisas. Cada um tem o seu, e o meu
                    geralmente é fazer músicas de diferentes estilos.
                    </p>
                    <p>
                    Também faço músicas no estilo 8-bits, porém todas as minhas composições nesse estilo infelizmente acabaram
                    se perdendo. Todas essas composições são, geralmente, feitas pelo FL Studio Mobile, plataforma com qual
                    me acostumei desde os 13 anos de idade, porém ultimamente tenho tentado me acostumar com o aplicativo
                    FamiStudio, no computador.
                    </p>
                </Bsnoimg>
            </div>
            <center><Bsnoimg tit='Lançamentos'/></center>
            <div className={styles.con} id={ids.rad}>
                <div id="ul"></div>
                <Bigsec tit='Radjo' stit='31/03/2026' sr={pic}>
                <p>
                "Radjo" é o segundo álbum da trilogia "Etec Tapes". Em "Quem é F329?", eu tinha dito que perdi todas as minhas
                composições em 8-bits; não perdi apenas elas, perdi TODAS as composições que tinha no FL Studio. Isso inclui as 
                versões originais de algumas músicas desse álbum. Apenas metade do álbum se salvou, pois já estava exportada em 
                áudio. Todo o resto teve que ser refeito do zero, mas no fim deu tudo certo.
                </p>
                <p>
                Foi muito divertido fazer esse álbum, e foi o meu primeiro trabalho pessoal em que eu estabeleci um prazo
                concreto pra entregar, sendo ele o próprio dia do lançamento, 31 de março. Eu consegui entregar um trabalho
                PESSOAL dentro de um prazo específico estabelecido por MIM MESMO. Seria eu um profissional do mercado de trabalho?
                Enfim, foi um álbum mais de zoeira mesmo, não expressei tantos sentimentos reais que nem geralmente faço nos meus
                álbuns... exceto 'Não Use "Drogas"', e até um pouco de "Sobra Nada". Não dá pra ser F329 sem um pouco de
                realidade.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtube.com/playlist?list=PLqrp2aM01CfRSLffMJgtro3lLY5T9HvCt&si=gdAdaZ4cnNsZoyr4'>
                    <Button rot='Playlist do álbum' wid='150px' ic={mus}/>
                    </a>
                    <a id={ids.ai} href='https://youtu.be/iE1ELPqIsfA?si=8JCvcnVWjcXWRTuN'>
                    <Button rot='Vídeo do álbum' wid='150px' ic={yt}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Melancolia III' stit="29/08/2025" sr={pic2}>
                <p>
                "Melancolia III" é a terceira e última música da trilogia "Melancolia". O tema dessa música em específico está relacionado com a
                Saga das "Drogas", onde eu descrevo um pouco da situação de forma bem melancolica, por isso o nome.
                </p>
                <p>
                A ideia de uma terceira música na série Melancolia existia desde 2024 com o lançamento de "Melancolia 2", no álbum "The Forsaken",
                porém só veio se concretizar de fato após um acontecimento pessoal na minha vida que me fez perceber que talvez certas pessoas
                realmente não valessem a pena de ter por perto. O acontecimento em si foi meio foda-se, me incomodei demais com pouca coisa, mas
                a conclusão, apesar de tudo, esteve certa desde sempre. A música trata o assunto de forma bem dramática, expressando todos os
                sentimentos e pensamentos que vieram ao pensar na situação em que me encontrava. Típico F329.
                </p>
                <p>
                A foto da capa foi tirada aleatoriamente por um amigo meu. Ele tinha dito que dava uma boa foto de perfil, mas ele tirou ela no
                timing perfeito pra transformar em uma capa de álbum, nesse caso single. Então eu só coloquei um filtro preto e branco na foto,
                escrevi "melancolia III" e "f329" por cima e plau. A minha cara na foto tá meio esquisita porque ele tirou ela no momento em
                que eu tava cantando "Run To The Hills" do Iron Maiden. Específico pra cacete, eu sei, mas é esse o tipo de merda que eu guardo na
                memória.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtu.be/4TaEc6lXY1Y?si=WNvXD0ZPKEpjuMxu'>
                    <Button wid='150px' rot='Ouça o single' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Barulheira Mental' stit="04/08/2025" sr={pic3}>
                <p>
                "Barulheira Mental" é o terceiro e último álbum da trilogia "lol". Mesmo sendo parte dessa trilogia que nunca se levou muito a
                sério, cada música desse álbum tem um significado. Todos os álbuns da trilogia foram inspirados no estilo heavy metal e
                principalmente na banda Metallica, porém esse foi o álbum que levou essa inspiração muito mais a sério.
                </p>
                <p>
                A instrumentação do álbum é inteiramente baseada em samples de guitarra de distorção e baterias, tudo padrão do FL Studio, como
                de praxe na trilogia lol. Como as músicas são instrumentais, os significados das músicas ficam implícitos, ou seja, só eu sei de
                verdade o que essas músicas significam, e portanto só eu posso apreciar ele pelo o que ele é de verdade... filosófico.
                </p>
                <p>
                A capa é um desenho que eu fiz aleatoriamente no começo de 2025. Achei que a visão meio infernal do desenho combinava com a
                sonoridade pesada do álbum, e eu tava certo, porque ouvir as músicas desse álbum sem ficar encarando a capa é muito mais bunda do
                que imaginar esse monte de mão se batendo ao som de um trash metal fodido, exemplo <a href='https://youtu.be/W544RGqD6bo?si=BsWj86WYOyrxM_xr'>
                Blood Red Fire</a>.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtube.com/playlist?list=PLqrp2aM01CfScUDIahAxi-9Ocp0AoQYbT&si=x0nE_xQqMJ9954BG'>
                    <Button rot='Ouça o álbum' wid='150px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Mizera' stit="14/07/2025" sr={pic4}>
                <p>
                "Mizera" é o segundo álbum da possível trilogia "Luv Sux". Esse álbum é todo sobre a Saga das "Drogas", principalmente sobre a
                apelidada Mizera. Sim, Mizera é uma pessoa. A música <a href='https://youtu.be/kxMvKVH1cz0?si=XrYY5yBiChFkqqHC'>
                Mizera</a> deixa isso a entender, inclusive.
                </p>
                <p>
                Mizera é um álbum totalmente tradicional F329. É de músicas cringe sobre romance e tristeza, falo de uma guria específica
                praticamente o álbum todo, fazendo parecer que tô obcecado (e talvez eu tava mesmo), enfim, um clássico do F329. Não vou mentir,
                eu gosto da sonoridade desse álbum. Ele é muito cringe por conta dos temas que aborda? Sim, mas pelo menos os instrumentais são
                legais, em sua maioria. <a href='https://youtu.be/ZodnMRO5fHw?si=Dz28TVUdlnYQHZzA'>Alto Demais</a>,
                mesmo, é minha favorita de todas que já fiz, e é desse álbum.
                </p>
                <p>
                A capa também é uma das minhas melhores. São só coisas aleatórias escritas em diferentes cores, mas eu gosto da vibe que passa.
                O vídeo desse álbum é, no momento que eu escrevo isso, o lançamento mais visto do F329, com fodendo 931 views. Sei que é um
                número minúsiculo pros padrões do YouTube, mas puta que pariu, 931 pessoas me viram falar sobre uma guria que eu gostava por 18
                minutos consecutivos. Isso pra mim é insano, como que eles aguentaram essa tortura? Acho que eu matei 931 pessoas de cringisse...
                E pior que sempre que eu olho esse número cresce, ou seja, todo dia eu mato alguém com esse álbum...
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtube.com/playlist?list=PLqrp2aM01CfSP6CDHf43QKxTNIPMgRhMz&si=B862aNv0JH1Mtjy_'>
                    <Button rot='Playlist do álbum' wid='150px' ic={mus}/>
                    </a>
                    <a id={ids.ai} href='https://youtu.be/1FxoWtLUFf8?si=xPvg2X_pWtA-WfvP'>
                    <Button rot='Vídeo do álbum' wid='150px' ic={yt}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Etec Tapes' stit="31/03/2025" sr={pic5}>
                <p>
                "Etec Tapes" é o primeiro álbum de sua possível trilogia. Esse álbum é totalmente insano. Ele desvia se difere completamente do
                padrão de um álbum do F329, sendo mais puxado pro humor e pro absurdo. Claro, alguns elementos de tristeza podem ser
                vistos aqui e ali, afinal, ainda é um álbum do F329, mas tudo nele é em prol da zueira, o que foi uma mudança total na época
                de seu lançamento.
                </p>
                <p>
                O Etec Tapes foi feito meio que no susto. Entrei numa escola nova, conheci uns moleque que gostavam de Yun Li assim como eu e
                eles me convenceram a ouvir os quatro Bondas. Ouvi, gostei, e aos poucos comecei a copiar. De beatzinha em beatzinha foi
                nascendo um álbum, e assim se fez o Etec Tapes. Esse e a sua continuação são os únicos álbuns onde eu faço feat com pessoas,
                outra mudança na fórmula do F329 que provavelmente nunca mais vai ser vista depois do fim da possível trilogia.
                </p>
                <p>A capa do álbum é uma paródia de This Old Dog do Mac DeMarco, por razão nenhuma.</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtube.com/playlist?list=PLqrp2aM01CfQCwfQi-HLCds6xOzmRd6CU&si=mQXVPglzXVx0DIK4'>
                    <Button rot='Playlist do álbum' wid='150px' ic={mus}/>
                    </a>
                    <a id={ids.ai} href='https://youtu.be/nsAIT3xYnxg?si=rn6YNNDqPOhi1nT7'>
                    <Button rot='Vídeo do álbum' wid='150px' ic={yt}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Just The Feet' stit="15/01/2025" sr={pic6}>
                <p>
                "Just The Feet" é um EP, feito pra retornar o F329 às suas "origens" após uma mudança de estilo feita em "Quote & Quote". Meio
                cringe o fato de que eu só canto em inglês nesse EP? Talvez, mas é inegável que ele é uma das melhores coisas que eu já fiz.
                Principalmente <a href='https://youtu.be/4ABR4pBhZsE?si=mqhq80ciNzO4tjOE'>Rain Bath</a>.
                </p>
                <p>
                É triste o quão atemporal as duas músicas desse EP são. Ele foi feito visando situações que me ocorreram a dois anos atrás, e
                mesmo assim eu ainda me sinto representado pela letra visando situações de hoje em dia. Se eu dissesse que Rain Bath tem
                conexão com a Saga das "Drogas", seria acreditável, pois a música fala sobre amigos ruins que eu tive; mas eu estaria
                mentindo, pois só conheci as "Drogas" por volta de março de 2025, dois meses depois do lançamento desse EP.
                </p>
                <p>
                A capa é uma foto tirada pela mesma guria de quem eu falo em Luv Sux. Ela colocou um filtro que aumentou meu nariz pra deixar a
                foto mais engraçada, e eu só inverti a foto e foda-se. O nome "Just The Feet" é um trocadilho, pois "The Feet" tem a mesma pronuncia
                que "Defeat", derrota em inglês. Ou seja, a tradução do nome do EP não seria "Só os Pés", mas sim, "Só Derrota".
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtube.com/playlist?list=PLqrp2aM01CfQpk97c4qyHc1JYcukFd-AV&si=x2BViS62F5rFTZRX'>
                    <Button rot='Ouça o EP' wid='150px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Quote & Quote' stit="15/10/2024" sr={pic7}>
                <p>
                "Quote & Quote" é um álbum... exótico, pra dizer o mínimo. Sendo sincero, eu acho que esse álbum é uma das piores coisas que eu já
                fiz na vida, como ser humano. Não ligo de estar exagerando, esse álbum é um exagero de tão ruim mesmo. Ele é cringe, gado e goré,
                eu não tanko ele.
                </p>
                <p>
                Eu tentei sei lá por qual razão fazer um álbum com um gênero totalmente diferente do que eu tava acostumado a produzir. F329
                sempre foi rap, trap, esse tipo de merda, inpirado no Yun Li. Daí do nada eu invento de fazer uma bosta inspirada nos primeiros
                álbuns do Coldplay, e assim se fez o pior álbum do mundo. Tudo bem que os três álbuns da trilogia "lol", principalmente o
                Barulheira Mental, também são diferentes do convencional do F329, mas pelo menos aqueles álbuns são audíveis, Quote & Quote
                não deveria nunca ter existido pra começo de conversa.
                </p>
                <p>
                Até a capa dessa merda é horrível. Pros curiosos, isso é a arcada dentaria da minha mãe. Por quê? Eu com meus 15 anos de idade e
                poucos neurônios achei que seria muito do rock só porque essa bosta é uma caveira. Eu disse que essa porra era cringe.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtube.com/playlist?list=PLqrp2aM01CfTAM-aLyNeFUVQvDgjDLePX&si=CG85aM-i8npZ4_1m'>
                    <Button rot='NÃO OUVE ESSA MERDA POR FAVOR' wid='200px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Chungus' stit="16/09/2024" sr={pic8}>
                <p>
                "Chungus" é o segundo álbum da trilogia "lol". É o mais foda-se dos três. Não sei explicar, parece que ele só existe. Tenho
                memórias muito vagas da produção dele. É assim com os três álbuns, na verdade, mas com esse o sentimento de que eu nem me
                esforcei pra fazer é bem maior.
                </p>
                <p>
                Eu escolhi os instrumentos pra fazer esse álbum basicamente no aleatório. Ele já tem uma vibe mais rock do que o primeiro lol
                pelo menos, mas ainda não chega nem aos pés do Barulheira Mental. Inspirações pra fazer ele incluem Metallica, Coldplay... e só.
                Por isso ele é o mais esquisito, ele é meio sem inspiração. Eu tava sem inspiração de viver quando fiz ele, meados de 2024 foi
                uma época meio complicada pra mim.
                </p>
                <p>
                A capa é uma foto borrada de um professor que eu tinha na época. Tenho medo que se um dia eu me tornar famoso isso me dê problemas,
                pois não pedi a permissão dele pra usar. Nem fui eu que tirei essa foto, na verdade. Não faço a menor ideia do porquê o nome Chungus.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtu.be/hQoG29VqiUo?si=JEqHixtOyzN1Nay1'>
                    <Button rot='Ouça o álbum' wid='150px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Luv Sux' stit="11/07/2024" sr={pic9}>
                <p>
                "Luv Sux" é o primeiro álbum da sua possível trilogia. Esse álbum me divide um pouco. Eu gosto das três primeiras músicas, mesmo
                que sejam bem cringe, e as duas últimas são merda pura. Dois desperdícios de sample, samples muito boas inclusive.
                </p>
                <p>
                Devo dizer que a sonoridade do álbum não é das melhores, afinal, eu tava no começo da minha """"""carreira"""""", mas as ideias
                de letra que ele trás são interessantes... Exceto Stupid Love e De Novo. Essas são só muito cringe mesmo. Eu cantando que nem
                morto também não ajuda. O tema do álbum também tinha que ser o mais cringe possível: anti-romance. Tipo, não, meu eu de 15 anos,
                não é legal e descolado falar que "o amor é uma bosta". Isso já deixou de ser legal a muito tempo atrás, quando a moda de Sad Boy
                simplesmente faleceu.
                </p>
                <p>
                A capa do álbum e daorinha pelo menos. É tão cringe quanto todo o resto, mas eu gosto da vibe dela. É uma boa representação
                visual da situação que eu passei pra fazer o álbum.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtube.com/playlist?list=PLqrp2aM01CfRm8MB9dvKJ1sj8wg3R8Oub&si=lAQ_FD4VBHZPPNL2'>
                    <Button rot='Ouça com moderação' wid='190px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='The Forsaken' stit="23/04/2024" sr={pic10}>
                <p>
                "The Forsaken" foi o primeiro álbum de rap que eu fiz. Nem sei se dá pra chamar de álbum, já que só tem 4 músicas, mas eu
                considero. Justamente por ser o primeiro, ele tá RIDICULAMENTE longe de ser sequer bom, mas ele tem um espaço especial no meu
                coração.
                </p>
                <p>
                A sonoridade desse álbum é do caralho, tá? Pelo menos <a href='https://youtu.be/prAP7yGYteo?si=_8VVIAudlsjsADgi'>Verdade</a> é
                muito foda. É uma das melhores coisas que fiz até hoje. O tema das músicas é meio jogado. O álbum em si não tem um tema, eu só
                falo de algumas coisas que tavam passando na minha cabeça na época, que incluem depressão, ódio à escola e negligência. Isso no
                começo de 2024, hein? Mal sabia eu que depois piorava.
                </p>
                <p>
                A capa é insana. É meio cringe mas eu gosto. Mesma coisa pro nome. Se eu não me engano, eu só fiz o álbum por causa da capa.
                O conceito todo de um álbum de música onde eu reclamo da vida só surgiu porque eu tirei foto do meu olho, meti um filtro e
                escrevi "f329, THE FORSAKEN".
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtube.com/playlist?list=PLqrp2aM01CfQxKjjgQyEV-0OBCKEw6PgQ&si=nQg5azRQl2rFIF6v'>
                    <Button rot='Ouça o álbum' wid='150px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Faro- Faro- Farofa 4: Back to the Front OST' stit="19/04/2024" sr={pic11}>
                <p>
                Esse álbum (me recuso a reescrever o nome dele) é o conjunto de músicas que eu usei no quarto episódio da série Faro- Faro- Farofa.
                Resumo da ópera, é um produto derivado de uma outra época minha na internet. Ele existir no mesmo ambiente que outras coisas que
                eu faço como F329 hoje em dia é meio que um erro.
                </p>
                <p>
                A maioria das músicas do álbum são cópias baratas de músicas que eu ouvia na época. "The End...?" é cópia de One do Metallica,
                "Walkin'" é, surpreendentemente, cópia de I Walk do Yun Li (mesmo que não pareça) e "Challenge" é uma cópia BEM descarada de 
                Knights of Cydonia do Muse. As únicas músicas totalmente originais são Pod Quest e Le Grand, que é minha favorita.
                </p>
                <p>A capa é legal. Eu gosto de como eu usei o preto e branco alternadamente, que é uma característica da própria série.</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtube.com/playlist?list=PLqrp2aM01CfQkYuKXbt4YZEaTyeAeSZgA&si=wdO8QnnCx6S7YW9m'>
                    <Button rot='Ouça o álbum' wid='150px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Happy Birthday Homies' stit="29/03/2024" sr={pic12}>
                <p>
                "Happy Birthday Homies" é um single. Eu não sei porque ele existe. Não tem nada sobre esse single que faça ele ser especial pra mim,
                eu inclusive não gosto dele. A qualidade dele é horrível, porque ele é de antes do The Forsaken, da época em que minhas músicas
                eram todas uma merda.
                </p>
                <p>
                Acho que o objetivo era fazer uma música mais puxada pra zueira por razão nenhuma, dado o tema de aniversário e a sample que eu
                usei... ao mesmo tempo que eu falo sério do nada (?????) é bizarro, não sem nem a que conclusão chegar. Essa merda e o Quote &
                Quote da uma briga boa hein, puta que pariu.
                </p>
                <p>A capa é OK. Quanto mais eu tento espremer algo pra falar sobre esse lixo do caralho, menos eu acho.</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtu.be/XbHxFHLMW2c?si=z64G8lYx8y2ewP7W'>
                    <Button rot='Vai querer ouvir essa merda?' wid='290px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='8-Bit Shit' stit="15/02/2024" sr={pic13}>
                <p>
                "8-Bit Shit", juntamente com "Dungeon Dog OST", são os dois únicos indícios que sobraram no YouTube de que eu realmente
                trabalhei com músicas 8-bit, o que é uma pena, pois ambos são ruins. Eu já fiz muita coisa melhor que infelizmente foi perdida
                no incidente que eu mencionei tanto em "Quem é F329?" quanto em "Radjo".
                </p>
                <p>
                A sonoridade desse EP é justamente o que faz ele não ser muito bom. Eu não sabia configurar o instrumentos 8-bit
                direito, e acabou ficando barulhento demais. Mas apesar disso, as melodias que eu montei nesse álbum são interessantes.
                Não é minha melhor estruturação, afinal, eu também tava começando na minha carreira 8-bits na época, então não é perfeito,
                mas as ideias são legais.
                </p>
                <p>
                A capa é engraçada, pra dizer o mínimo. Esse EP é o lançamento que eu mais esqueço da existência, mas bah, foda-se. Vou usar
                esse espacinho do final pra desabafar: eu meio que perdi a vontade de fazer músicas 8-bit depois do incidente. Eu lembro
                que fazia elas sem nenhum propósito, mas aos poucos um propósito foi se formando. Eu fui montando toda uma lore na minha
                cabeça conforme as músicas foram acumulando. Cada melodia tinha um significado, e, num belo dia, aquele universo todo que eu
                imaginei... se foi. Um simples erro acabou com tudo, inclusive com a minha vontade de continuar.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtu.be/OWePjAC-iaU?si=GRqvB5q-xzxxwBDk'>
                    <Button rot='Ouça tudo que restou.' wid='200px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Dungeon Dog OST' stit="26/01/2024" sr={pic14}>
                <p>
                "Dungeon Dog OST" é o conjunto das músicas que tocam num joguinho que eu fiz. O nome do jogo é Dungeon Dog, e é um dos jogos que
                você pode baixar na página <a href='/Gaymes'>Gaymes</a> aqui no Moquifo.
                </p>
                <p>
                Apesar de ter o mesmo problema que eu descrevi no 8-Bit Shit, eu gosto da OST do DD. O motif principal é muito bom, e mesmo
                barulhenta a música titular é muito boa também. Cold Dungeon é melhor ainda. Lembro que fiz essa música mirando na vibe de um
                lugar frio e escuro. Na minha opinião, eu acertei na mosca. Big, Evil Bat é okzinha, já fiz músicas de batalha bem melhores que 
                infelizmente se perderam no incidente. Enfim, bom álbum apesar de tudo.
                </p>
                <p>
                A capa é meio bunda. Bem bunda na real. Eu podia ter feito uma capa melhor se eu tivesse tentado de verdade, sinceramente.
                Eu poderia falar um pouco sobre o jogo aqui, mas eu provavelmente já vou fazer isso na página <a href='/Gaymes'>Gaymes</a>,
                então se quiser saber, só ir lá.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtu.be/ajHtXU9Mo1k?si=cPobGFmFO4w9y46-'>
                    <Button rot='Ouça o álbum' wid='150px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='lol' stit="29/12/2023" sr={pic15}>
                <p>
                "lol" é não só o primeiro álbum de sua trilogia como o primeiro álbum que eu fiz como F329, o que é irônico, porque eu já tinha
                feito três singles antes, todos sendo músicas de rap com letra, e o primeiro álbum que eu fiz é logo um álbum instrumental todo
                bizarro.
                </p>
                <p>
                Eu não sei que droga que eu fumei pra escolher os instrumentos que eu usei nesse álbum, mas vou dizer que isso tornou a sonoridade
                do álbum uma das mais únicas que eu já fiz. Mesmo que Chungus e Barulheira Mental sejam parte da mesma trilogia, nenhum outro
                álbum que eu fiz soa que nem o lol. A ideia de cada música ter um significado começou aqui, Chungus foi o único álbum que foi
                feito no foda-se, porque até o primeiro lol tem significado.
                </p>
                <p>
                A capa é literalmente só uma foto que eu tirei no foda-se, taquei um texto e falei "tabao". O contexto desse álbum é interessante.
                Eu fiz ele inteiro em um dia, férias de 2023, quando minha vó tinha ido viajar e eu fiquei praticamente sozinho em casa durante
                3 meses. Foi uma experiência interessante, e esse álbum é um resumo musical das coisas que eu senti e pensei nesse período.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtube.com/playlist?list=PLqrp2aM01CfR3ooMSOIy_imJEQqObKvp5&si=U9dynKnKbb1BI1R7'>
                    <Button rot='Playlist do álbum' wid='150px' ic={mus}/>
                    </a>
                    <a id={ids.ai} href='https://youtu.be/4fVEXacZbGI?si=rlVcM3p_pyya3kob'>
                    <Button rot='Vídeo do álbum' wid='150px' ic={yt}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='É Setembro' stit="05/10/2023" sr={pic16}>
                <p>
                "É Setembro" é um dos singles que eu lancei no comecinho da vida do F329. Eu sinceramente não gosto muito dessa época. Se tem
                uma época cringe na história do F329, é essa. Essa música nem tá disponível no canal principal do F329, e sim no
                <a href='https://www.youtube.com/channel/UCG_MFKnmDo_Ci_zTh8l_lWg'> F329 - Tema</a>. E sim, isso significa que essa música
                também está no Spotify, o que é muito irônico, porque essa música é muito ruim.
                </p>
                <p>
                Eu lembro que gravei a sample de ukulele eu mesmo, e gravei o """"""baixo"""""" também (era um violão muito horrível). Talvez seja
                por isso que essa música é bem bunda. A letra fala sobre Setembro amarelo, que é engraçado também, porque graças a uma limitação 
                do OneRPM (plataforma que eu usei pra postar no Spotify), a música só foi postada em Outubro. Tudo errado com essa merda. O jeito
                que eu abordo esse tema também é horrível. Eu tinha 14 anos e tava tentando fazer uma música séria. OBVIAMENTE ia ficar uma merda.
                </p>
                <p>A capa é outra bosta. Eu fiz tudo nessa música com o cu, puta que pariu... eu era um merda quando tinha 14 anos.</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtu.be/GU_Z70vaEGw?si=5uY2882KTHWj8w5t'>
                    <Button rot='Ouve isso nao vei pfv' wid='200px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Escravo Desse Pensamento' stit="22/07/2023" sr={pic17}>
                <p>
                "Escravo Desse Pensamento" é um dos singles que eu fiz no começo da vida do F329. Essa música, apesar de ser bem bunda, tem uma 
                história interessante. O celular em que eu fiz ela era completamente fodido. O touchscreen dele tava todo ferrado, por isso a capa
                é toda torta em alguns pontos, e mesmo com o touch fodido eu fiz uma música que é até audível.
                </p>
                <p>
                A sonoridade dessa música, pelo menos da instrumental, é até que daorinha. A letra é cringe, eu canto que nem um bosta, mas a
                instrumental é legalzinha de ouvir. Uma pena que eu tinha 14 anos e não sabia escrever uma letra decente, essa música poderia
                ter sido audível de verdade se eu tivesse experiência e um celular que prestasse, mas infelizmente não tinha.
                </p>
                <p>
                A capa é cringe e bunda desconsiderando e considerando o fato de que o celular era fodido. Era pra ser """"""profundo"""""", mas,
                novamente, eu tinha 14 anos.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtu.be/2DFtxUpE-qU?si=NSRCvtMZp025hydI'>
                    <Button rot='Ouve isso nao vei pfv' wid='200px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
                <Bigsec tit='Melancolia' stit="02/06/2023" sr={pic18}>
                <p>
                Parabéns, você chegou. Se estava se perguntando qual a primeira música do F329, é essa aqui mesmo. Além disso também é a primeira
                de sua trilogia. Vou te dizer: não gosto dessa música. Até um tempo atrás eu conseguia dizer que ela tem um espaço no meu coração
                mesmo sendo horrível, mas aos poucos esse espaço foi sumindo. Essa música é MUITO cringe.
                </p>
                <p>
                A sonoridade é interessante. Não acho a beat dessa música ruim, mas PUTA QUE PARIU. Eu não consigo ignorar o quão cringe é a letra
                e o jeito que eu canto. É graças a essa bosta que eu percebo que evoluí e evoluí muito, principalmente na minha lírica. Não sei se
                posso dizer que sei escrever uma letra boa, mas de fato as letras que escrevo hoje em dia são melhores que essa merda.
                </p>
                <p>
                Fiz a capa com a bunda. Vou dizer uma coisa: todos os lançamentos que eu falei que são uma bosta, incluindo esse, eles foram
                necessários pra eu me tornar o que eu me tornei. Falo mal mesmo, até porque ruins essas merdas são, mas se eu nunca tivesse
                feito essas merdas, eu nunca teria evoluído. Isso é uma mensagem praqueles que querem criar algo e não conseguem. Vou falar
                o óbvio, mas saiba que nada que você começar a criar vai ser bom de primeira, nem de segunda, nem de terceira. Eu nem acho 
                que as coisas que eu faço hoje em dia sejam boas, mas isso é só mais um motivo pra eu continuar, porque quanto mais eu
                trabalhar, cada vez melhor o meu trabalho vai ficar. Então não pare de criar.
                </p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a id={ids.ai} href='https://youtu.be/ZKRIN6NfVTI?si=c5h0zKhxF9u8DIwp'>
                    <Button rot='Ouve isso nao vei pfv' wid='200px' ic={mus}/>
                    </a>
                </div>
                </Bigsec>
            </div>
        </div>
    )
}