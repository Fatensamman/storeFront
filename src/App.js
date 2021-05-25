import './App.css';
import Header from './components/header.js'
import Products from './components/products.js'
import Footer from './components/footer.js'

function App() {
  return (
    <>
      <Header />
      <main style={{margin:"2rem",width:"98.5%"}}>
        
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
