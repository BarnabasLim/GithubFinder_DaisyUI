import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({title}) => {
  const themes= ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
  const changeTheme=()=>{
    const htmlElement=document.querySelector('html')
    // const attrs=htmlElement.attributes;

    // for(const attr in attrs){
    //   console.log("here",attr, attrs.length)
    //   // console.log("here There",attrs[1])
    // }
    // for(let i=0;i<attrs.length;i++){
    //   console.log("here There",attrs[i].nodeValue,attrs[i].nodeName)
    // }
    const currTheme=htmlElement.getAttribute("data-theme")
    console.log(themes.indexOf(currTheme),themes.length-1)
    if(themes.indexOf(currTheme)!==themes.length-1){
      htmlElement.setAttribute("data-theme", themes[themes.indexOf(currTheme)+1]);
      console.log(themes[themes.indexOf(currTheme)+1])
    }else{
      htmlElement.setAttribute("data-theme", themes[0]);
      console.log(themes[0])
    }
    // console.log("overall", attrs)
  }
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2" >
                <FaGithub className="inline pr-2 text-3xl"/>
                <Link to='/' className='text-lg font-bold align-middle' onClick={changeTheme}>
                    {title}
                </Link>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                        Home
                    </Link>
                    <Link to='/About' className='btn btn-ghost btn-sm rounded-btn'>
                        About
                    </Link>
                </div>
            </div>
        </div>
    
    </nav>
  )
}

Navbar.defaultProps={
    title:'Github Finder',
}

Navbar.propTypes={
    title: PropTypes.string,
}

export default Navbar