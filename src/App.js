import './App.css';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import Header from './Header/Header';
import Modal from './Modal/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Modal />
      <div className="cards">
        <Card
          tipo="Tecnologia"
          titulo="Cursos de TI tem maiores indices de evasão."
          descricao="E de acordo com a mais recente edição do Mapa do Ensino Superior no Brasil, a evasão é ainda mais expressiva em cursos na área de tecnologia, atingindo 66,5% dos alunos."
          autor="Anônimo"
          imagemSrc={require("./img/card1.jpg")}
        />

        <Card
          tipo="Games"
          titulo="O ganhador do GOTY de 2022 está com o menor preço histórico no PC."
          descricao="Desenvolvido pela FromSoftware, o GOTY de 2022 é um dos títulos mais acessíveis do gênero, conhecido pelo seu alto nível de dificuldade. Seu preço base é de R$ 229,90, mas caiu cerca de 34%."
          autor="Vladimir Lucas"
          imagemSrc={require("./img/card2.jpg")}
        />
      </div>
    </div>
  );
}

export default App;
