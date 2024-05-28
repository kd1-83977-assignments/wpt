import {Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Properties from './screens/Properties'
import AddProperty from './screens/AddProperty'
import PropertyDetails from './screens/PropertyDetails'
// import Login from './screens/Login'
// import Login from './screens/Login'



function App() {
  return (
    <div className='container'>
     <Routes>
      <Route path='' element={<Login/>} />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      <Route path='properties' element={<Properties/>}/>
      <Route path='add-property' element={<AddProperty/>}/>
      <Route path='property-details' element={<PropertyDetails/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>

     </Routes>

     <ToastContainer/>

    </div>
  )
}

export default App
