import React from 'react';
import PropTypes from 'prop-types';
import { white } from 'constants/colors';
import Navbar from 'components/Navbar';
import MainLayout from 'components/Grid/MainLayout';
import Footer from 'components/Footer';
import 'assets/styles/globalStyles';

const App = ({ children }) => (
  <MainLayout
    backgroundColor={white}
  >
    <Navbar />
    {children}
    <Footer />
  </MainLayout>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
