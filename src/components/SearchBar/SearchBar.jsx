import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('')

   function handleInputChange(e){
      setCharacter(
         e.target.value
      )
   }
   return (
      <div>
         <input type='search' onChange={handleInputChange}/>
      <button onClick={()=> onSearch(character)}>Agregar</button>
      </div>
   );
}
