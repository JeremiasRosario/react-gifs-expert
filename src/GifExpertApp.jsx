import { useState } from "react";
import { AddCategory, GifGrid} from './components';


function GifExpertApp() {

 const [categories, setCategories] = useState(['One Punch'])

 const onAddCategory =(newCategory) =>{

  newCategory = newCategory.charAt(0).toUpperCase() + newCategory.slice(1);

    if ( categories.includes(newCategory)) return;

    setCategories (set => [newCategory, ...categories]);

 }

  return (
    <>
    
        <h1>GifExpertApp</h1>

         <AddCategory /* setCategories={setCategories} */

           onNewCategory= {e => onAddCategory(e)}

        />


        {   categories.map((category) => ( 
              <GifGrid 
              key={category} 
              category={category}/>
          ))
        }
            







    </>
  )
}

export default GifExpertApp