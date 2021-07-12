import React, {useState} from 'react';
import Image from './components/Image'
import ImageIterator from './components/ImageIterator'
import './App.css';

function App() {
  const urlData150 = 'https://via.placeholder.com/150'
  const urlData50 = 'https://via.placeholder.com/50'
  const [urlEverything, setUrlEverything] = useState('https://via.placeholder.com/320x64/111/eee/?text=width height bg-color text-color')
  const sizes = [32, 64, 128, 256, 512]

  const [imgWidth, setImgWidth] = useState(64)
  const [imgHeight, setImgHeight] = useState(64)

  const handleWidthChange = (e)=>{
    setImgWidth(e.target.value)
    setImgHeight(e.target.value)
    let newUrl = 'https://via.placeholder.com/' +imgWidth+'x' + imgHeight+'/EEE/111/?text=width height bg-color text-color'
    setUrlEverything(newUrl)
  }

  return (
    <div className="App">
      <a href='#'>learn react</a>
      {/* top-level UI */}
      <input type='range' min='32' max='640' step='24' value={imgWidth} onChange={handleWidthChange} />
      <hr/>
      {/* React treats HTML textarea just like input */}
      <textarea value={urlEverything}>content</textarea>
      
      <hr/>
      {/* component instances */}
      <Image whichUrl={urlData150} />
      <hr/>
      <Image whichUrl={urlData50} />
      <hr/>
      <Image whichUrl={urlEverything} />
      <hr/>
      <ImageIterator sizes = {sizes} />
    </div>
  );
}

export default App;
