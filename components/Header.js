import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChangeLanguage = () => {
    setLanguage(language === 'en' ? 'ka' : 'en');
  };

  return (
    <header>
      <h1>{language === 'en' ? 'Todo List' : 'დავალებების სია'}</h1>
      <button onClick={handleChangeLanguage}>
        {language === 'en' ? 'ქართული' : 'English'}
      </button>
    </header>
  );
};

export default Header;
