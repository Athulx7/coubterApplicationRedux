
import './App.css'
import Counter from './components/Counter'

function App() {
  

  return (
    <>
    <div className='d-flex align-items-center justify-content-center w-100 ' style={{height:'100vh'}} >
      <div className="d-flex align-items-center justify-content-center flex-column bg-light text-primary p-5 rounded">
        <h2>counter application</h2>
        <Counter />
      </div>
      
      
    </div>
      
    </>
  )
}

export default App
