import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainHeaderComponent from './components/salHeader';
import MainFooterComponent from './components/salFooter';
import SearchBar from './components/search';

function bringToSearch(){
}

function App() {
  return (
    <div onKeyPress={bringToSearch}>
      <header className="center"><MainHeaderComponent></MainHeaderComponent></header>
      <SearchBar></SearchBar>

      <MainFooterComponent></MainFooterComponent>
    </div>
  );
}

export default App;
