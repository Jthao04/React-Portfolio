import Header from './components/header'
import Footer from './components/Footer'
import Navigation from './components/navigation'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main className="mx-3">
      <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
