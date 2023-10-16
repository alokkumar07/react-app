import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import CategoriesList from './CategoriesList'
function Categories(props) {

 
  return (
    <div className='cat-container d-flex justify-content-between'>
      <div>

      <span>All Categories</span>
      {CategoriesList && CategoriesList.length >0 && 
      CategoriesList.map((item,index)=>{
        return (
          <span onClick={()=>props.handleCategory && props.handleCategory(item)}   key={index} className='category'>{item}</span>
          )
        })
      }
    </div>
      </div>
  )
}

export default Categories