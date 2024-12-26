// src/App.js
import React, { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import MenuList from './components/MenuList';
import { categoryTranslations } from './utils/categoryTranslations'; // Importa as traduções

import {
  Appetizer,
  Appetizers,
  Mains,
  ToShare,
  Desserts,
  ClassicDrinks,
  Exclusive,
  NonAlcoholicDrinks,
  Combos,
  Doses,
  Bottles,
  SoftDrinks,
  Beers,
  Kids,
  WineRose,
  WineTinto,
  WineWhite,
  Espumant,
  Champagnes,
} from './data';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Appetizers');

  const dataCategories = {
    Appetizer,
    Appetizers,
    Mains,
    ToShare,
    Kids,
    Desserts,
    ClassicDrinks,
    Exclusive,
    SoftDrinks,
    NonAlcoholicDrinks,
    Beers,
    Doses,
    Bottles,
    Combos,
    Espumant,
    Champagnes,
    WineWhite,
    WineRose,
    WineTinto,
  };

 
  return (
    <div className='divCentral'>
      <GlobalStyles />
      <Header category={categoryTranslations[selectedCategory]} setSelectedCategory={setSelectedCategory}/>
      <MenuList items={dataCategories[selectedCategory]} />
    </div>
  );
};

export default App;
