import React from 'react'
import BookList from './components/BookList'

const App = () => {
  const books=[
    {id:1, title:"Wings of Fire", author:"Dr.A.P.J.Abdul Kalam", genre:"Autobiography", isAvailable:true},
    {id:1, title:"Rich Dad Poor Dad", author:"Robert Kiyosaki", genre:"Finance", isAvailable:false},
    {id:1, title:"Ponniyin Selvan", author:"Kalki", genre:"Historic Fiction", isAvailable:true}
  ]

  return (
    <div style={{margin:"20px"}}>
      <h1 style={{textAlign:"center"}}>Digital Library</h1>
      <BookList books={books}/>
    </div>
  )
}

export default App