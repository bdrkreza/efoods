import AppRouter from "./AppRouter"
import Header from "./components/header/Header"
import "./Scss/_global.scss"

const App = () => {
  return (
    <>
        <AppRouter>
          <Header/>
        </AppRouter>
    </>
  )
}

export default App
