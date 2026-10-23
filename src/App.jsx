import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import HomePage from './Pages/HomePage'
import './Components/Style.css'

function App() {
  return (
    <div className="portfolio-shell">
      <Header />
      <main className="page-content">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
