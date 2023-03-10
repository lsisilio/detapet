import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const {height, width} = Dimensions.get('window');

export default function Politica({navigation}) {

  const final = () => {
    navigation.navigate("Final")
  }

  let dimensions = Dimensions.get("window");
  let imageHeight = Math.round((dimensions.width * 9) / 16);
  let imageWidth = dimensions.width;
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFF" translucent = {true}/>
      <View style={styles.imagem}> 
        <Image style={styles.cachorro} source={require('../images/logo_preto.png')} />
      </View>

    <View style={styles.espaco}>
        <Text style={styles.titulo}> Termos de Serviço </Text>
        <Text style={styles.textos}>
            Termos e Condições de Compra e Venda de DETAPET, com sede na Av. Lacerda Franco, 
            número 271, doravante denominada simplesmente DETAPET, e, de outro lado, o cliente DETAPET, qualificado 
            no momento da compra dos produtos DETAPET, doravante denominado simplesmente Cliente. 
        </Text>

        <Text style={styles.textos}>
            Considerando que a DETAPET realiza venda de produtos e serviços pela internet; Considerando o interesse do 
            Cliente na compra dos produtos oferecidos pela DETAPET ("Produtos") em seus canais de venda; O presente 
            contrato tem por finalidade estabelecer as condições gerais de uso e compra de produtos e serviços do cliente 
            o site DETAPET.
        </Text>

        <Text style={styles.textos}>
            I. Confidencialidade: é de responsabilidade da DETAPET a preservação da confidencialidade de todos os dados e informações fornecidos pelo Cliente no processo de compra. A segurança do site é auditada diariamente e garantida contra a ação de hackers, através do selo "Site Blindado".
        </Text>

        <Text style={styles.textos}>
            II. Serviço de Atendimento ao Cliente (SAC): O cliente dispõe desse serviço para sanar suas dúvidas, solucionar eventuais solicitações ou reclamações a respeito do seu pedido ou de qualquer conteúdo disponibilizado no site. O SAC poderá ser acionado por meio de telefone ou de formulário do site.
        </Text>

        <Text style={styles.textos}>
            III. Política de entrega: o prazo para entrega dos Produtos é informado durante o procedimento de compra, contabilizado em dias úteis. As entregas dos Produtos são realizadas de segunda a sexta-feira, das 8h às 22h. Excepcionalmente, algumas entregas de Produtos podem ocorrer aos sábados, domingos e feriados.
        </Text> 

        <Text style={styles.textos}>
            III.I - A conferência da adequação das dimensões do produto é de responsabilidade do Cliente, que deverá se assegurar de que estas estão de acordo com os limites espaciais dos elevadores, portas e corredores do local da entrega. Não será realizada a montagem ou desmontagem do produto, transporte pela escada e/ou portas e janelas, ou içamento das entregas.
        </Text>

        <Text style={styles.textos}>
            III.II - Serão realizadas até três tentativas de entrega no local informado, em dias alternados, com intervalo de até 48h entre uma entrega e outra. É indispensável que, no endereço solicitado, haja uma pessoa autorizada pelo comprador, maior de 18 anos, e portando documento de identificação para receber a mercadoria e assinar o protocolo de entrega. Se houver três tentativas de entrega sem sucesso, o pedido retornará para o Centro de Distribuição da DETAPET.
        </Text>

        <Text style={styles.textos}>
            III.III - Após a finalização do pedido não é possível alterar a forma de pagamento e/ou endereço de entrega, solicitar adiantamento ou, ainda, prioridade da entrega.
        </Text>

        <Text style={styles.textos}>
            III.IV - O prazo de entrega informado durante o procedimento de compra do Produto leva em consideração o estoque, a região, o processo de emissão da nota fiscal e o tempo de preparo do produto. A cada atualização no status de entrega do pedido, o sistema da DETAPET envia, automaticamente, e-mails de alerta para o Cliente.
        </Text>

        <Text style={styles.textos}>
            III.V - O valor do frete da entrega é calculado com base no local de entrega, peso e dimensões do Produto.
        </Text>

        <Text style={styles.textos}>
            III.VI - A DETAPET não autoriza a transportadora a: entrar no domicílio; entregar por meios alternativos (exemplo: içar produto por janela); realizar instalação ou manutenção de produtos; abrir a embalagem do produto; realizar entrega em endereço diferente do que consta no DANFE; realizar entrega a menor de idade ou sem documento de identificação.
        </Text>

        <Text style={styles.textos}>
            III.VII - A DETAPET não se responsabiliza pela retenção de mercadorias na SEFAZ quando esta se dever exclusivamente a pendências do cliente, sendo, portanto, necessário seu comparecimento no posto fiscal para que a mercadoria seja liberada, tendo em vista que nestes casos as informações referentes a liberações e pagamentos só são passadas aos interessados.
        </Text>

        <Text style={styles.textos}>
            IV. Direito de arrependimento: ao Cliente será facultado o exercício do direito de arrependimento da compra, com a finalidade de devolução do Produto, hipótese na qual deverão ser observadas as seguintes condições: o prazo de desistência da compra do produto é de até 7 (sete) dias corridos, a contar da data do recebimento; em caso de devolução, o produto deverá ser devolvido à DETAPET na embalagem original, acompanhado do DANFE (Documento Auxiliar da Nota Fiscal Eletrônica), do manual e de todos os seus acessórios.
        </Text>

        <Text style={styles.textos}>
            IV.I - O Cliente deverá solicitar a devolução através do Serviço de Atendimento ao Cliente (SAC) ou diretamente no Painel de Controle, no tópico "cancelar pedido". As despesas decorrentes de coleta ou postagem do Produto serão custeadas pela DETAPET.
        </Text>

        <Text style={styles.textos}>
            IV.II - Após a chegada do produto ao Centro de Distribuição, a DETAPET verificará se as condições supra citadas foram atendidas. Em caso afirmativo, providenciará a restituição no valor total da compra.
        </Text>

        <Text style={styles.textos}>
            IV.III - Em compras com cartão de crédito a administradora do cartão será notificada e o estorno ocorrerá na fatura seguinte ou na posterior, de uma só vez, seja qual for o número de parcelas utilizado na compra. O prazo de ressarcimento e, ainda, a cobrança das parcelas remanescentes após o estorno integral do valor do Produto no cartão de crédito do Cliente realizado pela DETAPET, é de responsabilidade da administradora do cartão. Na hipótese de cobrança de parcelas futuras pela administradora do cartão, o Cliente não será onerado, vez que a DETAPET, conforme mencionado acima, realiza o estorno do valor integral do Produto em uma única vez, sendo o crédito referente ao estorno concedido integralmente pela administradora do cartão na fatura de cobrança subsequente ao mês do cancelamento.
        </Text>

        <Text style={styles.textos}>
            IV.IV - Em compras pagas com boleto bancário ou débito em conta, a restituição será efetuada por meio de depósito bancário, em até 10 (dez) dias úteis, somente na conta corrente do(a) comprador(a), que deve ser individual. É necessário que o CPF do titular da conta corrente.
         </Text>

        <Text style={styles.titulo}>
            Política Privacidade
        </Text>

        <Text style={styles.textos}>
            A sua privacidade é importante para nós. É política do DETAPET respeitar a sua privacidade em relação a 
            qualquer informação sua que possamos coletar no site DETAPET, e outros sites que possuímos e operamos.
        </Text>

        <Text style={styles.textos}>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. 
            Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que 
            estamos coletando e como será usado.
        </Text>

        <Text style={styles.textos}> 
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando 
            armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem 
            como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </Text>

        <Text style={styles.textos}>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando 
            exigido por lei.
        </Text>

        <Text style={styles.textos}>  
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não 
            temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas 
            respectivas políticas de privacidade.
        </Text>

        <Text style={styles.textos}>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos 
            fornecer alguns dos serviços desejados.
        </Text>
        
        <Text style={styles.textos}>
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade 
            e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações 
            pessoais, entre em contacto connosco.  Política de Cookies DETAPET
            O que são cookies?
            Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos 
            baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles 
            coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como 
            você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' 
            certos elementos da funcionalidade do site.
        </Text>

        <Text style={styles.textos}>
        Como usamos os cookies?
        Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem 
        opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos 
        </Text>

        <Text style={styles.textos}>
        que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa
        ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.
        </Text>

        <Text style={styles.textos}>
            Desativar cookies
            Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do 
            navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade 
            deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação 
            de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os 
            cookies. Cookies que definimos
            Cookies relacionados à conta
        </Text>

        <Text style={styles.textos}>
            Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e 
            administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em 
            alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.
        </Text>

        <Text style={styles.titulo}>
            Cookies relacionados ao login
        </Text>
        
        <Text style={styles.textos}>
            Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise
            fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando 
            você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.
        </Text>

        <Text style={styles.titulo}>
            Cookies relacionados a boletins por e-mail
        </Text>

        <Text style={styles.textos}>        
            Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados ​​para 
            lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários 
            inscritos / não inscritos.
        </Text>

        <Text style={styles.titulo}>
            Pedidos processando cookies relacionados
        </Text>

        <Text style={styles.textos}>
            Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para 
            garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.
            Cookies relacionados a pesquisas
        </Text>

        <Text style={styles.textos}>
            Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas 
            úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para 
            lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.
        </Text>

        <Text style={styles.titulo}>        
            Cookies relacionados a formulários
        </Text>

        <Text style={styles.textos}>
            Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos 
            formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para 
            correspondência futura.
        </Text>

        <Text style={styles.titulo}>
            Cookies de preferências do site
        </Text>

        <Text style={styles.textos}>
            Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências
            de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies 
            para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas
            preferências. Cookies de Terceiros
            Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha
            quais cookies de terceiros você pode encontrar através deste site.
        </Text>

        <Text style={styles.textos}>
            Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis ​​da Web, para 
            nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem 
            rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar 
            produzindo conteúdo atraente.
            Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.
        </Text>

        <Text style={styles.textos}>
            As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar 
            produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou 
            as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.
            Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. 
            Quando ainda estamos testando novos recursos, esses cookies podem ser usados ​​para garantir que você receba 
            uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários 
            is apreciam.
            À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site 
            realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você,
            pois significa que podemos fazer previsões de negócios com precisão que nos permitem analizar nossos custos de
            publicidade e produtos para garantir o melhor preço possível.  Compromisso do Usuário
            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o DETAPET oferece no site e com 
            caráter enunciativo, mas não limitativo:
        </Text>

        <Text style={styles.textos}>
            A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
            B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou casas de apostas (ex.: Moosh), jogos
            de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
            C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do DETAPET, de seus fornecedores ou 
            terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software
            que sejam capazes de causar danos anteriormente mencionados.  Mais informações
            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se
            precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que 
            você usa em nosso site.
        </Text>

        <Text style={styles.textos}>
            Esta política é efetiva a partir de June/2021.
        </Text>
    </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  imagem: {
    height: height / 4,
    width: width,
    justifyContent: 'center',

  },

  cachorro: {
    alignSelf: 'center',
    width: width / 2.8,
    height: height / 5.8,
  },

  espaco: {
    marginRight: '4%',
    marginLeft: '4%',
    textAlign: 'justify',
  },

  titulo: {
    fontWeight: 'bold',
    marginBottom: '4%',
    fontSize: RFValue(13, 680),
    marginLeft: '-1%'
  },

  textos: {
    marginBottom: '3%',
    textAlign: 'justify',
  }

});