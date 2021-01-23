import React from 'react';
import Footer from 'components/organisms/Footer';
import PageTemplate from './template/PageTemplate';
import HeaderSection from './components/organisms/HeaderSection';
import InfoSection from './components/organisms/InfoSection';

const App = () => (
  <PageTemplate>
    <HeaderSection />
    <InfoSection />
    <Footer />
  </PageTemplate>
);
export default App;
