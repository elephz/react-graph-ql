import { useState } from 'react';
import CharactersList from './pages/CharactersList';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Nav from './components/Nav';

// V.6
import Create from './pages/Create';
import Update from './pages/Update';
import  FetchMedia  from './function/FetchMedia';


function App() {
  
  const [page,setPage] = useState(1)
  const [search,setSearch] = useState(null)
  const {error,data,loading} = FetchMedia(page,search)
  
  return (
    <>
     <Nav search={search} setSearch={setSearch} / >
      <div className="App">
        <Routes>
          <Route path="/" element={
              <CharactersList 
                  page={page} 
                  setPage={setPage} 
                  error={error}
                  data={data}
                  loading={loading}
              />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/{id}" element={<Update />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
