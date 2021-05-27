import './App.css';
import Header from './components/header.js';
import Products from './components/products.js';
import Footer from './components/footer.js';
import SimpleCart from './components/simplecart.js';

function App() {

  return (
    <>
      <Header />
      <SimpleCart />
      <main style={{ padding: "2rem" }}>
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
