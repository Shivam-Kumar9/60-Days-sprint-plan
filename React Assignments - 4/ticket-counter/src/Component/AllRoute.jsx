import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pagas/Home'
import PrivateRoutes from './PrivateRoutes'
import About from '../Pagas/About'
import Tasks from '../Pagas/Tickets page/Tickets'
import Login from '../Pagas/Login'
import Contect from '../Pagas/Contect'
import ViewTicket from '../Pagas/Tickets page/ViewTicket'
import CreateTicket from '../Pagas/Tickets page/CreateTicket'
import EditTicket from '../Pagas/Tickets page/EditTicket'

export default function AllRoute() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contect' element={<Contect/>}/>
    <Route path='/about' element={<PrivateRoutes>
            <About/>
        </PrivateRoutes>
    }/>
    <Route path='/ticket' element={ <PrivateRoutes>
            <Tasks/>
        </PrivateRoutes>}/>

    <Route path='/ticket/view/:id' element={ <PrivateRoutes>
            <ViewTicket/>
        </PrivateRoutes>}/>
    <Route path='/ticket/create' element={ <PrivateRoutes>
            <CreateTicket/>
        </PrivateRoutes>}/>
    <Route path='/ticket/edit/:id' element={ <PrivateRoutes>
            <EditTicket/>
        </PrivateRoutes>}/>
   
    <Route path='/login' element={<Login/>}/>
   </Routes>
  )
}
