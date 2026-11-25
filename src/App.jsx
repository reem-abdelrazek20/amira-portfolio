import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import WorksPage from './pages/WorksPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import './styles.css';

export default function App() {
  return <BrowserRouter><ScrollToTop/><Header/><Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/works" element={<WorksPage/>}/>
    <Route path="/works/:id" element={<ProjectDetailPage/>}/>
    <Route path="*" element={<HomePage/>}/>
  </Routes><Footer/></BrowserRouter>;
}
