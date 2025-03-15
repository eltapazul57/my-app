import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import messages from "./locales/messages";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;
  return lang.startsWith("es") ? "es" : "en"; //Español default
};

const App = () => {
  const locale = getBrowserLanguage(); 

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
};

export default App;
