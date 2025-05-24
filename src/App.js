// import React from 'react';
// import Navbar from './assets/components/Navbar';
// import Services from './assets/components/Services';
// import WorkSamples from './assets/components/WorkSamples';
// import ClientReviews from './assets/components/ClientReviews';
// import TrustedClients from './assets/components/TrustedClients';
// import Contact from './assets/components/Contact';
// import Footer from './assets/components/Footer';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Services />
//       <WorkSamples />
//       <ClientReviews />
//       <TrustedClients />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
