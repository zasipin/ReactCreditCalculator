import React from 'react';
import { connect } from 'react-redux';
import { setActiveLanguage, getLanguages } from 'react-localize-redux';

const LanguageSelector = ({ languages, setActiveLanguage }) => (
  <ul>
    { languages.map(language => 
      <li key={language.code}><button onClick={ () => setActiveLanguage(language.code) }>{ language.code }</button></li>
    )}
  </ul>
)

const mapStateToProps = state => ({ languages: getLanguages(state.locale) });
const mapDispatchToProps = { setActiveLanguage };

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);