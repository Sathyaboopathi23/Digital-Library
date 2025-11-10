import React from 'react'
import BookCard from './BookCard'

const BookList = ({books}) => {
  return (
    <div style={{display:"flex",gap:"15px"}}>
        {books.map((book)=>(
            <BookCard 
               key={book.id}
               title={book.title}
               author={book.author}
               genre={book.genre}
               isAvailable={book.isAvailable}
            />
            ))}
        
    </div>
  )
}

export default BookList