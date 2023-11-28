import './Home.css';
import Banner from '../../Banner/Banner';

function Home() {
  return (
    <div className="blog-home">
      <div className="blog-welcome">
        <h2>Bem-vindo ao nosso Blog</h2>
        <p>
          Explore uma variedade de conteúdos interessantes e informativos. Aqui você encontrará notícias, dicas, e muito mais!
        </p>
      </div>

      <Banner />

      <div className="blog-testimonials">
        <h2>Depoimentos de Nossos Leitores</h2>
        <div className="testimonial">
          <p>
            "Encontrei inspiração e conhecimento valioso no blog. Obrigado por compartilharem informações tão úteis!"
          </p>
          <p>
            <strong>Leitor Feliz</strong>
          </p>
        </div>
        <div className="testimonial">
          <p>
            "As postagens do blog me ajudaram a entender melhor alguns tópicos complexos. Recomendo a todos que buscam aprendizado contínuo."
          </p>
          <p>
            <strong>Curioso por Conhecimento</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
