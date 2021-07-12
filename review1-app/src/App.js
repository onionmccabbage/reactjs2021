import React, {useState} from 'react';
import Image from './Image'
import ImageIterator from './ImageIterator'
import './App.css';

function App() {
  const urlData150 = 'https://via.placeholder.com/150'
  const urlData50 = 'https://via.placeholder.com/50'
  const [urlEverything, setUrlEverything] = useState('https://via.placeholder.com/320x64/EEE/111/?text=width height bg-color text-color')
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
      {/* top-level UI */}
      <input type='range' value={imgWidth} onChange={handleWidthChange} />
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
