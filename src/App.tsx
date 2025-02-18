import { useState } from 'react'
import './App.css'

import CabinetLayout from './components/CabinetLayout.tsx';
import CabinetEditor from './components/CabinetEditor.tsx';
import { Cabinet } from './models/Cabinet.ts';
import SVGDownloadButton from './components/SVGDownloadButton.tsx';

function App() {
  const bitWidth = .125;
  const depth = 8;
  const [cabinet, setCabinet] = useState<Cabinet>({
    cabinetType: "shelf-box",
    depth: depth,
    height: 12,
    width: 10,
    cleatHeight: 2.5,
    cleatDepth: .75,
    thickness: .5,
    bitWidth: bitWidth,
    shelfCount: 3,
    kerf: 1.5,
  });

  const strokeWidth = 1;

  return (
    <>
      <div>
        <div className="inline-block">
          <CabinetEditor cabinet={cabinet} updateCabinet={setCabinet} />
          <SVGDownloadButton className="real-size-layout" />
        </div>
      </div>
      <hr className="p-3"/>
      <CabinetLayout cabinet={cabinet} scaleToHeight={window.innerHeight - 300} strokeWidth={strokeWidth} />
      <div className='hidden' id='real-size-layout'>
        <CabinetLayout cabinet={cabinet} strokeWidth={strokeWidth} />
      </div>
    </>
  )
}

export default App
