import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

export default function Nav({onSearch}){
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}