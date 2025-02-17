import { useState } from 'react'
import './App.css'

import CabinetLayout from './components/CabinetLayout.tsx';
import CabinetEditor from './components/CabinetEditor.tsx';
import { scaleCabinet } from './models/Cabinet.ts';

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
    tenonDepth: depth / 3,
    bitWidth: bitWidth,
    shelfCount: 3,
    kerf: (1.5 * bitWidth)
  });

  const scaledCabinet = scaleCabinet(cabinet, 50);

  const strokeWidth = 1;
  const overallWidth = (2 * (strokeWidth + scaledCabinet.depth)) + scaledCabinet.cleatDepth + scaledCabinet.kerf - (strokeWidth / 2);
  const shelfRows = Math.ceil(scaledCabinet.shelfCount / 2) + 1;
  const overallHeight = scaledCabinet.height + strokeWidth + (scaledCabinet.kerf * (shelfRows)) + ((scaledCabinet.width + strokeWidth) * shelfRows);

  return (
    <>
    <CabinetEditor cabinet={cabinet} updateCabinet={setCabinet} />
    <hr />
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={overallWidth} height={overallHeight}>
        <CabinetLayout cabinet={scaledCabinet} strokeWidth={strokeWidth} />
      </svg>
    </>
  )
}

export default App
