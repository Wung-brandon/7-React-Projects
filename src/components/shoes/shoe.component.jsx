import './shoe.component.css'
import ImageComponent from '../image.component'
// import { NavLink, Outlet } from 'react-router-dom'
import shoeData from '../data'
import { useState } from 'react'

export default function ShowShoe(){
    const [filteredData, setFilterData] = useState(shoeData)
    const [userInput, setInputData] = useState("")
    const [selectedButton, setSelectedButton] = useState("")

    function handleChange(e){
        const value = e.target.value
        setInputData(value)
        
        const filteredShoes = shoeData.filter((item) => (selectedButton ? item.color === selectedButton : true) && item.color.toLowerCase().includes(value.toLowerCase()))
        setFilterData(filteredShoes)
    }
    
    function handleButtonFilter(color){
        setSelectedButton(color)
        const filterButton = shoeData.filter((item) => (color ? item.color === color : true) && item.color.toLowerCase().includes(userInput.toLowerCase()))
        setFilterData(filterButton)
    }
 
    return(
        <div className="shoes">
            <h2>Shoe Filtering</h2>
            <input 
                type='text' 
                placeholder='Search Color of shoe' 
                onChange={handleChange} 
                value={userInput}
                className='search'
            />
            <div className="shoe-btn">
                
                <button onClick={() => handleButtonFilter('')}>All</button>
                <button onClick={() => handleButtonFilter('white')} style={{backgroundColor:'white', color:"black"}}>White</button>
                <button onClick={() => handleButtonFilter('red')} style={{backgroundColor:'red'}}>red</button>
                <button onClick={() => handleButtonFilter('blue')} style={{backgroundColor:'blue'}}>blue</button>
                <button onClick={() => handleButtonFilter('green')} style={{backgroundColor:'green'}}>green</button>
                <button onClick={() => handleButtonFilter('black')} style={{backgroundColor:'black'}}>black</button>
            </div>

            <div className="images">
                {filteredData.map((shoe) => {
                    return(
                        <div className='shoe-box'>
                            <ImageComponent src={shoe.img} alt='image' />
                            <h2>{shoe.name}</h2>
                            <p>{shoe.reviews}</p>
                        
                        </div>
                    )
                })}
             
            </div>
            

        </div>
    )
}