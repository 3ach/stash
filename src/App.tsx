import { useState } from 'react'
import './App.css'

import CabinetLayout from './components/CabinetLayout.tsx';
import CabinetEditor from './components/CabinetEditor.tsx';
import { scaleCabinet } from './models/Cabinet.ts';
import SVGDownloadButton from './components/SVGDownloadButton.tsx';

function App() {
  const bitWidth = .125;
  const depth = 8;
  const [cabinet, setCabinet] = useState({
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

  const scaledCabinet = scaleCabinet(cabinet, 25);
  const strokeWidth = 1;

  return (
    <>
      <div>
        <div className="inline-block">
          <CabinetEditor cabinet={cabinet} updateCabinet={setCabinet} />
        </div>
        <SVGDownloadButton className="real-size-layout" />
      </div>
      <hr className="p-3"/>
      <CabinetLayout cabinet={scaledCabinet} strokeWidth={strokeWidth} />
      <div className='hidden' id='real-size-layout'>
        <CabinetLayout cabinet={cabinet} strokeWidth={strokeWidth} />
      </div>
    </>
  )
}

export default App
