import Header from './components/Header'
import Banner from './components/Banner'
import Recipes from './components/Recipes'

function App() {
  return (
    <>
      <Header/>
      <main className="container mx-auto px-6 lg:px-0">
        <Banner/>
        <Recipes/>
      </main>
    </>
  )
}

export default App
