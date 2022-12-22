import { useState } from 'react'
import { NewCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['The Flash']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <NewCategory
        onNewCategory={value => onAddCategory(value)}/>


      {categories.map((category) => (
        <GifGrid 
          key ={ category } 
          category={category}
        />
      ))}

      {/* Gif Item */}
    </>
  )
}
