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
          tipo="Tipo do Card"
          titulo="Título do Card"
          descricao="Descrição do Card. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          autor="Autor do Card"
          imagemSrc="./img/banner"
        />

        <Card
          tipo="Tipo do Card"
          titulo="Título do Card"
          descricao="Descrição do Card. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          autor="Autor do Card"
          imagemSrc="./img/banner"
        />
      </div>
    </div>
  );
}

export default App;
