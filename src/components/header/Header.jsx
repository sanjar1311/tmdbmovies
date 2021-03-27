import {useContext} from 'react'
import {Link} from 'react-router-dom'

import {Context} from '../Context'
import {SearchIcon} from '../../assets/icons/Icons'
import './Header.scss'

function Header() {

  const {theme, setTheme} = useContext(Context)

  return(
    <>
      <header className={theme? 'dark' : 'light'}>
        <div className="container header-inner">
          <Link to="/" className="logo">Movie<span className="logo-inner"> uz</span></Link>
          <form className="search-form" action="#">
            <input type="search" placeholder="Search movies..."/>
            <button type="submit"><SearchIcon/></button>
          </form>
          <div className="controllers">
            <button onClick={()=> {
              setTheme(!theme)
            }}>{theme? '☀️' : '🌙'}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header