import { t } from 'i18next';
import React, { useState } from 'react';
import styles from './LanguageSwitcher.module.css'

const languages = [
{ value: '', text: "Options" },
{ value: 'en', text: "English" },
{ value: 'bg', text: "Български" },
{ value: 'ru', text: "Русский" },

]

const LanguageSwitcher = () => {

  const [lang, setLang] = useState('');
  // This function put query that helps to
  // change the language
  // DO NOT TOUCH IT - Deployment only
  const handleChange = e => {
      e.preventDefault()
      setLang(e.target.value);
      let loc = "http://localhost:3000/";
      window.location.replace(loc + "?lng=" + e.target.value);
  }

  return (
    <div className={`${styles.lang_switch}`}>
      <div>Language</div>
            <select 
                className={`${styles.option}`}
                value={lang} onChange={handleChange}> 
                  {languages.map(item => {
                      return (<option
                          key={item.value}
                          value={item.value}>{item.text}</option>);
                  })}
            </select>
    </div>
  );
};

export default LanguageSwitcher;
