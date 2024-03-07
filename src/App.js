import './App.css';
import Header from './Components/Header';
import Description from './Components/Description';
import movieGif from './images/H95B.gif';
import tv from './images/tv.png';
import screenimg from './images/movie.gif';
import Download from './Components/Download';
import kids from './images/kids.png';
import mobilePic from './images/mobile-0819.jpg';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer'





function App() {
  return (
    <div className="App">
      <Header />
      <Description 
        title = "Enjoy on your TV"
        desc = "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        img={movieGif}
        tv = {tv}
      />
      <Download
      title = "Download your shows to watch offline"
      desc= "Save your favorites easily and always have something to watch."
      img = {mobilePic}
      />
      <Description 
      title = "Watch everywhere"
      desc = "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      img = {screenimg}
      />
      <Download
      title = "Create profiles for kids"
      desc= "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      img = {kids}
      />
      <FAQ /> 
      <Footer />
      
    </div>
  );
}

export default App;
