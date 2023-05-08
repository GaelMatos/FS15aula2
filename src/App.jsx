import './App.css'
import Artigo from './components/Artigo'
import Categoria from './components/Categoria/Categoria';

const App = () => {


  return (
    <>
     <Categoria>
     <Artigo
       titulo={'Velório de Palmirinha ocorre hoje em cerimônia aberta ao público'}
        descricao={'Cozinheira e apresentadora morreu aos 91 anos e estava internada desde 11 de abril. Público terá acesso ao velório, Cemitério do Morumby, das 11h às 13h. Sepultamento será reservado aos amigos e à família.'}
  link={'https://g1.globo.com/sp/sao-paulo/noticia/2023/05/08/velorio-aberto-ao-publico-de-palmirinha-e-realizado-nesta-segunda-feira-em-sao-paulo-enterro-sera-reservado.ghtml'} />  

      <Artigo 
      titulo={'Previsão do tempo: Frente fria chega ao Sul e provoca virada no tempo; centro do país segue quente e seco'}
        descricao={'Umidade do ar inspira atenção em vários estados do Sudeste e Centro-Oeste, e também em parte do Nordeste; veja a previsão completa no Hora 1.'}
        link={'https://g1.globo.com/hora1/noticia/2023/05/08/previsao-do-tempo-frente-fria-chega-ao-sul-e-provoca-virada-no-tempo-centro-do-pais-segue-quente-e-seco.ghtml'}
      />

      <Artigo
       titulo={'Os 25 anos de Iris do Goo Goo Dolls... vocalista diz que segredo do hit é mensagem simples'}
        descricao={'Ao g1, cantor explica problemas de saúde e comemora fase pai de família sem álcool: Tive medo de não ser bom o suficiente se não bebesse. Série Quando eu hite item artistas que sumiram.'}
     link={'https://g1.globo.com/pop-arte/musica/noticia/2023/05/08/os-25-anos-de-iris-do-goo-goo-dolls-vocalista-diz-que-segredo-do-hit-e-mensagem-simples.ghtml'}/>
 
     </Categoria>
     <Categoria>
     <div>cliente1</div>
     <div>cliente1</div>
     <div>cliente1</div>
     <div>cliente1</div>
     <div>cliente1</div>    
     </Categoria>
     </>  
  );
}



export default App
