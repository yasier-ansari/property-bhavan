import Gallery from './components/Gallery.jsx';
import Navbar from './components/Navbar.jsx';
import PropertyDetail from './components/PropertyDetail.jsx';
import Similar from './components/Similar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='mt-20 px-16 mx-auto font-main'>
        <Gallery />
        <PropertyDetail />
        <Similar />
      </main>
    </div>
  );
}

export default App;
