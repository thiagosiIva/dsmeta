import NotificationButton from './components/NotificationButton'
import Header from './components/header'
import SalesCard from './components/SalesCard'

function App() {

  return (
    <>

      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <div className="dsmeta-card">
              <SalesCard />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
