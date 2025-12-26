import "./App.css";
import Articulo from "./Components/Article.jsx";
import Separador from "./assets/resources/Seperator.svg"
import Img1 from "./assets/resources/photo_1.png"
import Img2 from "./assets/resources/photo_2.png"
import Img3 from "./assets/resources/photo_3.png"
function App() {
  return (
    <>
    <main>  

      <h1>We release interesting articles 
        about technology</h1>
      <img className="Separador" src={Separador} />
      <div className="container">
        
      <Articulo
        info="imagen de nubes"
        title="Unlocking the Power of Cloud Computing: A Guide to Scalable Solutions"
        date="November 12, 2024"
        img={Img1}
      />
      <Articulo
        info="Imagen de mundo verde con flores"
        title="The Future of AI: How Machine Learning is Revolutionizing Industries"
        date="November 12, 2024"
        img={Img2}
      />
      <Articulo
        info="imagen de nubes"
        title="The Impact of 5G on Business: How Faster Networks are Transforming the Way We Work"
        date="November 12, 2024"
        img={Img3}
      />
      </div>
      </main>
      <footer>
        <a href="https://github.com/DonAlejandro01?tab=repositories">Alejandro Perez</a>
      </footer>
    </>
    
  );
}

export default App;
