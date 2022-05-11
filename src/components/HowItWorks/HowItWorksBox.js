import React from 'react';

import {
  SectionTitle,
  Main,
  BoxAll,
  TextPattern,
} from '../../styles/pattern/box-all';

export default function HowItWorksBox() {
  return (
    <Main marginBottom="2rem" top="4rem">
      <SectionTitle>Como Funciona</SectionTitle>
      <BoxAll
        flexDirection="column"
        alignItems="justify"
        margin=".5rem"
        color="white"
        padding="1rem"
        display="flex"
      >
        <TextPattern>
          Vamos ao passo a passo do programa de fidelidade para entender
          como funciona.
        </TextPattern>

        <TextPattern>
          1 - Após clicar no botão outros em seguida como funciona o programa de fidelidade,
          irá aparecer algumas opções.
        </TextPattern>

        <TextPattern>
          Clicando em prêmio você consegue ver quais as opções de prêmios estão disponíveis
          para troca e a descrição de cada prêmio.
        </TextPattern>

        <TextPattern>
          Clicando em Resgatar ira aparecer um tela de confirmação para resgatar aquele prêmio.
        </TextPattern>

        <TextPattern>
          2 - O próximo ícone é de extrato, onde você pode consultar o seu histórico
          de pontuação e resgate no programa de fidelidade.
        </TextPattern>

        <TextPattern>
          Informando o seu CPF ou CNPJ e clicando na lupa ira consultar seu
          histórico no de acumulo e resgate;
        </TextPattern>

        <TextPattern>
          3 - O próximo é satisfação, onde você responda e indica para ganhar pontos mensais.
        </TextPattern>

        <TextPattern>
          4 - O próximo icone você encontrará, outras opções informativas para entender como o
          programa de fidelidade funciona.
        </TextPattern>
      </BoxAll>
    </Main>
  );
}
