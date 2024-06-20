import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import LandingPage from './pages/LandingPage';
//import LandingPageNEW from './pages/LandingPageNEW';
import NewCredForm from './pages/NewCredForm';
import Layout from '../src/components/Layout';
//<Route path="/404" exact element={<NotFound />} />
//<Route path="/utform" exact element={<LandingPageNEW />} />
          
function App() {
  return (
    <div className="Home">
      <header className="py-16"></header>
      <div className="App-body">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" exact element={<NewCredForm />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </div>
    );
}

export default App;
