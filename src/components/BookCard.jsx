import React from 'react'

const BookCard = ({title, author, genre, isAvailable}) => {
    const availability={color: isAvailable ? "green" : "red", fontWeight: "bold"}
  return (
    <div style={{border:"1px solid black", padding:"15px",width:"300px"}}>
        <h3>{title}</h3>
        <p><b>Author:</b> {author}</p>
        <p><b>Genre:</b> {genre}</p>
        <p style={availability}>{isAvailable ? "In Stock" : "Checked Out"}</p>
    </div>
  )
}

export default BookCard