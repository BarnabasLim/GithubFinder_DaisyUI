
import './App.css';

function App() {
  const themes= ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
  const changeTheme=()=>{
    const htmlElement=document.querySelector('html')
    const attrs=htmlElement.attributes;

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
    <div onClick={changeTheme}>
      <h1 className="text-xl">Hello World</h1>
    </div>
  );
}

export default App;
