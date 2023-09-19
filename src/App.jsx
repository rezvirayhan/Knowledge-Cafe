
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, SetBookmarks] = useState([])
  const [redingTime, SetRedingTime] = useState(0)
  const handleMarkAsReed = time => {
    const newRedaingTime = redingTime + time;
    SetRedingTime(newRedaingTime)

  }
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    SetBookmarks(newBookmarks)
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsReed={handleMarkAsReed}></Blogs>
        <Bookmarks bookmarks={bookmarks} redingTime={redingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
