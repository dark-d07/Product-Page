import React from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Product List</h1>
      </header>
      <main>
        <ProductList />
      </main>
      <footer className="app-footer">
        <p>© 2023 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
