//imported components
import Sidebar from "./Components/Sidebar/Sidebar"
import Topbar from "./Components/Topbar/Topbar"

function App() {
  return (
    <>
      {/* larger scrren display content */}
      <div className='dashboard-container'>
        <Topbar />
        <div className='main-components-container'>
          <Sidebar />
        </div>
      </div>
      {/* small scren display content */}
      <div className="small-screen-notification">
        <h1>Can't able to view in small screen. Please, switch to big screen devices.</h1>
      </div>
    </>
  )
}

export default App
