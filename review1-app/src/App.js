import React, {useState} from 'react';
import Image from './Image'
import ImageIterator from './ImageIterator'
import './App.css';

function App() {
  const urlData150 = 'https://via.placeholder.com/150'
  const urlData50 = 'https://via.placeholder.com/50'
  const [urlEverything, setUrlEverything] = useState('https://via.placeholder.com/320x64/EEE/111/?text=width height bg-color text-color')
  const sizes = [32, 64, 128, 256, 512]

  const [imgInfo, setImgInfo] = useState({w:64, h:64, bg:0xfff, fg:0x000})

  const handleWidthChange = (e)=>{
    setImgInfo = {w:e.target.value, h:64, bg:0xfff, fg:0x000}
  }

  return (
    <div className="App">
      {/* top-level UI */}
      <input type='range' value={imgInfo.w} onChange={handleWidthChange} />
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
