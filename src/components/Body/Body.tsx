import estrelafull from '../../images/estrela.png';
import estrelaempty from '../../images/estrela (1) 1.png'
import imagem1 from '../../images/Frame 28.png';
import imagem2 from '../../images/Frame 29.png';
import like from '../../images/joia.png';
import dislike from '../../images/hand 1.png';
import menudots from '../../images/menu.png';
import arrowdown from '../../images/fi-br-angle-small-down.png';
import arrowright from '../../images/fi-br-angle-small-right.png';
import plus from '../../images/Plus.png';
import './Body.css';

function Body() {
  return (
  <div>

    <div className='titulo-espacamento'>
      <div className='plano-fundo'>
        <div className='superior-div'>
          <div className='titulo'>GOD OF WAR: RAGNARÖK</div>
          <div className='avaliacao-da-ratings'>AVALIAÇÃO DA RATINGS<br />
            <nav>
              <button className="avaliacao-button">
                <img src={estrelafull} alt="estrela colorida" className="estrela-icon"/>
                9,6<span className="transparencia">/10</span>
              </button>
            </nav>
          </div>
          <div className='sua-avaliacao'>SUA AVALIAÇÃO<br />
            <nav>
              <button className="avaliacao-button">
                <img src={estrelaempty} alt="estrela vazia" className="estrela-icon"/>
                Avaliar
              </button>
            </nav>     
          </div>
        </div>
      
        <div className='inferior-div'>
          <img src={imagem1} alt="GOW1" className="imagem-1" />
          <img src={imagem2} alt="GOW2" className="imagem-2" />
        </div>
      </div>
    </div>      

    <div className='drop-menu-container'>
      <div className='destaque-espacamento'>        
          <nav>
            <button className="drop-menu-button, drop-menu-texto">
              <img src={arrowright} alt="seta direita" className="arrow-left-icon"/>ENREDO
            </button> 
          </nav>       
      </div>
      <div style={{marginBottom: "55px"}} className='destaque-texto'>Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.</div>
    </div>

    <div className='drop-menu-container'>
      <div className='destaque-espacamento'>        
          <nav>
            <button className="drop-menu-button, drop-menu-texto">
              <img src={arrowright} alt="seta direita" className="arrow-left-icon"/>AVALIAÇÕES DOS USUÁRIOS
            </button> 
          </nav>
          <nav>
            <button className="drop-menu-button, drop-menu-avaliar-texto">
              <img src={plus} alt="mais" className="plus-icon"/>Avaliar
            </button>
          </nav>          
      </div>
    </div>
    
    <div className='avaliacao-destaque'>
      <div className='destaque-espacamento'>
        <div className='destaque-box'>AVALIAÇÃO EM DESTAQUE</div>
        <div className="destaque-nota">
          <img src={estrelafull} alt="estrela colorida" className="estrela-icon"/>10<span className="transparencia">/10</span>
        </div>
      </div>

      <div className='destaque-espacamento-nome-data'>
        <div className='destaque-nome'>CaioHalbert</div>
        <div className='destaque-data'>9 de novembro de 2022</div>
      </div>

      <div className='destaque-titulo'>What an incredible sequel!</div>
      <div className='destaque-texto'>A fantastic and strong continuation of its predecessor, God of War Ragnarök is not afraid to take unexpected turns, or slow its pace for you to fully explore an environment. It has the same upgrading system as before, but with better armor, in my opinion. Atreus is a little bit older now and it's so great to see everybody reprise their magnificent roles.</div>
      <div className='destaque-texto'>I don't want to give away too much in this review, but it's definitely worth buying. One of the best looking games on PS5. It'll definitely be a game of the year contender with Elden Ring. If you're new to the series, I recommend you start with God of War (2018) If you have the dedication, you could always start from the very first one. They're all on the PS+ collection. I still have yet to beat this newest entry, but I wanted to spread the good word as soon as possible: Ragnarök is here and it is beautiful.</div>

      <div className='destaque-espacamento'>
          <div className='like-dislike'>
            <nav>
              <button className="ratio">
                <img src={like} alt="positivo" className="joia-icon"/>33
              </button>
            </nav>
            <nav>
              <button className="ratio">
                <img src={dislike} alt="negativo" className="joia-icon"/>11
              </button>
            </nav>                    
          </div>

          <nav>
              <button className="ratio">
                <img src={menudots} alt="tres pontos" className="joia-icon"/>
              </button>
            </nav>
      </div>
    </div>

    <div className='avaliacao-destaque'>
      <div className='destaque-espacamento'>
        <div className='destaque-box'>AVALIAÇÃO EM DESTAQUE</div>
        <div className="destaque-nota">
          <img src={estrelafull} alt="estrela colorida" className="estrela-icon"/>10<span className="transparencia">/10</span>
        </div>
      </div>

      <div className='destaque-espacamento-nome-data'>
        <div className='destaque-nome'>ClaudiaRayara</div>
        <div className='destaque-data'>14 de novembro de 2022</div>
      </div>

      <div className='destaque-titulo'>This game took part of my soul...</div>

      <div className='aviso-spoiler'>
        <div className='spoiler-espacamento'>

          <div className='spoiler-texto'>Warning: Spoilers!</div>

          <nav>
            <button className="ratio">
              <img src={arrowdown} alt="seta lado" className="estrela-icon"/>
            </button>
          </nav>
        </div>
      </div>
     
      <div className='destaque-espacamento'>
          <div className='like-dislike'>
            <nav>
              <button className="ratio">
                <img src={like} alt="positivo" className="joia-icon"/>24
              </button>
            </nav>
            <nav>
              <button className="ratio">
                <img src={dislike} alt="negativo" className="joia-icon"/>6
              </button>
            </nav>                    
          </div>

          <nav>
              <button className="ratio">
                <img src={menudots} alt="tres pontos" className="joia-icon"/>
              </button>
            </nav>
      </div>
    </div>    
  
  </div>
  );
}

export default Body;
