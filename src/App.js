import React from 'react';
import Footer from 'components/organisms/Footer';
import PageTemplate from './template/PageTemplate';
import HeaderSection from './components/organisms/HeaderSection';
import InfoSection from './components/organisms/InfoSection';
import FormSection from './components/organisms/FormSection';

const App = () => (
  <PageTemplate>
    <HeaderSection />
    <main>
      <InfoSection />
      <FormSection />
    </main>
    <Footer />
  </PageTemplate>
);
export default App;
