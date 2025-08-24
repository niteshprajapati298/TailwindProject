import Sidebar  from "./components/Sidebar"


const App = () => {
  return (
   <div
      className="h-screen w-screen bg-cover bg-center flex "
      style={{ backgroundImage: "url('/Background.png')" }}
    >
    <Sidebar/>
      <div className="right">
      <nav>
        
      </nav>
      </div>
    </div>
  )
}

export default App
