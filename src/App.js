import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import './App.css'

// Stateless functional component is used as we are using only render method.
const BooksApp = () => {
      return (
        <div className="app">
          <Routes>
          <Route exact path="/" element={(<HomePage />)}/>
            <Route path="/search" element={ (<SearchPage />) }/>
          </Routes>            
        </div>
      )
}

export default BooksApp
