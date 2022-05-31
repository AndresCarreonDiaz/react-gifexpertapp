import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  // const handleAdd = () => {
  //     // setCategories([...categories, "new anime"])//MyWay
  //     setCategories( cats => [...cats, 'New Anime'])//Fernando way
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))

        }
      </ol>

    </div>
  )
}
