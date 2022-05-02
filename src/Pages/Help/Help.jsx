import { Container, Title, Box, BoxWithLink} from "../../Styles/Pages/help";

export default function Help() {
  return (
    <Container>
      <Title>Busque ajuda</Title>
      <p>
        A baixo temos algumas indicações sobre onde conseguir apoio
        especializado!
      </p>

      <Box>
        <h3>Humanidades 2020</h3>
        <br />
        <span>
          Para o público em geral uma opção é a iniciativa{" "}
          <strong>Humanidades 2020</strong>, vários psicólogos se uniram para
          construir um canal de atendimento aberto e direto. O desejo é ajudar o
          público em geral a ter uma escuta ativa, solidária e empática capaz de
          minimizar o sofrimento emocional, inspirou{" "}
          <strong>74 psicólogos e 10 psiquiatras</strong> a se engajarem
          voluntariamente no projeto. Em um mês, o grupo, sem vínculo com
          qualquer instituição, atendeu a <strong>600 ligações.</strong>
        </span>
        <br />
        <span>
          Os voluntários do projeto disponibilizam seus números de telefone e
          quem quiser ser atendido pode falar direto com eles por WhatsApp. Ana
          Luiza Novis: (21) 99609-9346 e a Laura Machado: (21) 98820-6989, são
          as psicólogas responsáveis.
        </span>
      </Box>

      <BoxWithLink onClick={() =>{window.open('https://www.cvv.org.br/')}}>
        <h3>CVV – Centro de Valorização da Vida</h3>
        <br />
        <span>
          Apoio emocional e prevenção ao suicídio.{" "}
          <strong>Atendimento gratuito e anônimo</strong> via telefone ou chat.
          Durante a pandemia eles investiram no aumento de ramais da linha{" "}
          <strong>188</strong> para melhorar o atendimento remoto, que é
          gratuito e está disponível <strong>24 horas por dia</strong>. São
          atendimentos pontuais que podem ajudar muito em diversas situações, e
          caso necessário eles também podem indicar maior acompanhamento com
          psicólogo ou psiquiatra.{" "}
        </span>
      </BoxWithLink>
    </Container>
  );
}
