// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import Skills from "./Components/Skills";
// import Languages from "./Components/Languages";
// import Projects from "./Components/Projects";
// import LatestPosts from "./Components/LatestPosts";
// import Newsletter from "./Components/Newsletter";
// import Footer from "./Components/Footer";

//second way

import {Navbar,Hero,Skills,Languages,Projects,LatestPosts,Newsletter,Footer} from "./Components/Components"
// this is the best way of importing 
function App() {
  return (
    <div className="bg-white text-black">
      <Navbar /> 
      <Hero />
      <Skills/>
      <Languages/>
      <Projects />
      <LatestPosts />
      <Newsletter />
      <Footer />





    </div>
  );
}

export default App;
