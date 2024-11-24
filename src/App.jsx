// src/App.js
import React, { useState } from 'react';

import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import MenuList from './components/MenuList';
import { CurrencyProvider } from './context/CurrencyContext';
import { categoryTranslations } from './utils/categoryTranslations'; // Importa as traduções
import * as data from "./data" // Importa todas as categorias de uma vez

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Appetizers');
 
  return (
    <div>
      <CurrencyProvider>
        <GlobalStyles />
        <Header category={categoryTranslations[selectedCategory]} setSelectedCategory={setSelectedCategory}/>
        <MenuList items={data[selectedCategory]} />
      </CurrencyProvider>
    </div>
  );
};

export default App;
