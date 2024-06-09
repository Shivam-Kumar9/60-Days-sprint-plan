import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pagas/Home'
import PrivateRoutes from './PrivateRoutes'
import About from '../pagas/About'
import Tasks from '../pagas/Tickets page/Tickets'
import Login from '../pagas/Login'
import Contect from '../pagas/Contect'
import ViewTicket from '../pagas/Tickets page/ViewTicket'
import CreateTicket from '../pagas/Tickets page/CreateTicket'
import EditTicket from '../pagas/Tickets page/EditTicket'

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
