import React from 'react';

import {
  BoxAll,
  SectionTitle,
  Main,
  TextPattern,
  ListOl,
  ListLi,
  Img,
} from '../../styles/pattern/box-all';

import {
  Points, Line,
} from '../../styles/regulation/regulation-box';

import '../../styles/regulation/regulation-box.css';

import Register from '../../assets/img/regulation/01.png';
import Birthday from '../../assets/img/regulation/02.png';
import Friend from '../../assets/img/regulation/03.png';
import Answer from '../../assets/img/regulation/04.png';
import Contract from '../../assets/img/regulation/05.png';
import Rule from '../../assets/img/regulation/06.png';
import Exchange from '../../assets/img/regulation/07.png';

export default function ReagulationBox() {
  return (
    <Main marginBottom="2rem" top="4rem">
      <SectionTitle>Regulamento</SectionTitle>
      <BoxAll
        flexDirection="column"
        alignItems="center"
        margin="1rem"
        color="white"
        paddingTop="1rem"
        marginBottom="100px"
        display="flex"
      >
        <Img src={Register} alt="banner" />
        <SectionTitle>Cadastre-se e Ganhe</SectionTitle>
        <TextPattern>
          Cadastre-se em nossa loja e até 24h você será cadastrado em nosso programa de fidelidade.
          <br />
          E como presente de boas vindas você ganhará
          <Points> 100 pontos </Points>
        </TextPattern>
        <Line />

        <Img src={Birthday} alt="banner" />
        <SectionTitle>Feliz Aniversário!</SectionTitle>
        <TextPattern>
          E é claro que não podemos esquecer desta data tão especial não é mesmo?
          <br />
          Em seu aniversário como presente você ganha mais pontos
          para aproveitar esta data tão querida
          <Points> 100 pontos </Points>
        </TextPattern>
        <Line />

        <Img src={Friend} alt="banner" />
        <SectionTitle>Indique e Ganhe</SectionTitle>
        <TextPattern>
          Indicando um amigo você pode receber mais pontos
          Ganhe mais
          <span className="point"> 100 pontos </span>
          a cada nova indicação
          <br />
          <br />
          Como faço para ganhar?
          <ListOl>
            <ListLi>Seu amigo(a) indicado não pode ser nosso cliente;</ListLi>
            <ListLi>O indicado tem que fazer o cadastro e realizar a primeira compra;</ListLi>
            <ListLi>E até 24h você receberá seus pontos</ListLi>
          </ListOl>
        </TextPattern>
        <Line />

        <Img src={Answer} alt="banner" />
        <SectionTitle>Responda e Ganhe!</SectionTitle>
        <TextPattern>
          Sua opinião é muito importante para nós!
          Envie sua opinião sobre nossa loja, atendimento, estrutura, produtos e ganhe
          <Points> 50 pontos </Points>
        </TextPattern>
        <TextPattern>
          Envie sua opinião quantas vezes quiser e garanta seus pontos.
        </TextPattern>
        <TextPattern>
          É muito importante ouvi-lo, fale como foi seu atendimento,
          como podemos melhorar, pois estamos procurando melhorar
          <br />
          a cada dia que passa e fazê-lo ainda mais feliz.
        </TextPattern>
        <Line />

        <Img src={Contract} alt="banner" />
        <SectionTitle>
          Quem pode participar do programa de fidelidade Fidelity Mais - Zurc S/A?
        </SectionTitle>
        <TextPattern>
          O cadastro no programa de fidelidade da Fidelity Mais - Zurc S/A
          é automático após realizar o cadastro na loja
          <br />
          todos os clientes já estão participando
        </TextPattern>
        <Line />

        <Img src={Rule} alt="banner" />
        <SectionTitle>Feliz Aniversário!</SectionTitle>
        <TextPattern>
          A cada R$ 1,00 (um real) em compras na loja Zurc S/A
          o cliente Fidelity Mais acumula 1 (um) ponto.
        </TextPattern>
        <TextPattern>
          Está paridade poderá ser alterada para patamares superiores em função
          de promoções especiais realizadas ao longo do ano
          <br />
          ou a qualquer momento, a critério da Fidelity Mais - Zurc S/A.
        </TextPattern>
        <Line />

        <Img src={Exchange} alt="banner" />
        <SectionTitle>Como Trocar Meus Pontos?</SectionTitle>
        <TextPattern>
          <ListOl>
            <ListLi>
              A solicitação de prêmios poderá ser realizada somente pelo
              titular do programa de fidelidade Fidelity Mais - Zurc S/A.
            </ListLi>
            <br />
            <ListLi>
              No ato da solicitação e após a aprovação do resgate os pontos
              referente ao prêmio solicitado serão debitados automaticamente.
            </ListLi>
            <br />
            <ListLi>
              Após emitido o comprovante de solicitação de resgate de prêmios
              (enviado por e-mail) o cliente não poderá mais solicitar o
              <br />
              cancelamento do mesmo nem mesmo a troca por algum valor em dinheiro.
            </ListLi>
            <br />
            <ListLi>
              A Fidelity Mais - Zurc S/A reserva-se ao direito de cancelar a solicitação
              de resgate de prêmios nos casos de falsificação, fraude,
              <br />
              mau uso do benefício ou em casos em que o cliente não possua o
              número de pontos necessários para a troca do prêmio ou até por
              <br />
              falta em estoque.
            </ListLi>
            <br />
            <ListLi>
              A solicitação do resgate pode ser efetuada junto com o pedido.
              Caso seja solicitado em outra data, o custo com o frete ficará a
              <br />
              cargo do solicitante (aplicado apenas para resgate de produtos físicos).
            </ListLi>
          </ListOl>
        </TextPattern>
      </BoxAll>
    </Main>
  );
}
