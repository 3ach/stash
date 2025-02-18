import SidePanels from './SidePanels';
import Shelves from './Shelves';
import { scaleCabinet, Cabinet } from '../models/Cabinet'

type CabinetLayoutProps = {
    cabinet: Cabinet,
    strokeWidth: number,
    scaleToHeight?: number,
}

export default function CabinetLayout(props: CabinetLayoutProps) {
    const depth = props.cabinet.depth;
    const height = props.cabinet.height;
    const width = props.cabinet.width; 
    const shelfCount = props.cabinet.shelfCount;
    const cleatDepth = props.cabinet.cleatDepth;
    const kerfWidth = props.cabinet.kerf * props.cabinet.bitWidth;
    const strokeWidth = props.strokeWidth;

    const shelfRows = Math.ceil(shelfCount / 2) + 1;
    let overallWidth = (2 * (strokeWidth + depth)) + cleatDepth + kerfWidth - (strokeWidth / 2);
    let overallHeight = height + strokeWidth + (kerfWidth * (shelfRows)) + ((width + strokeWidth) * shelfRows);

    let cabinet = props.cabinet;
    if (props.scaleToHeight) {
        let scalingFactor = props.scaleToHeight / overallHeight;

        cabinet = scaleCabinet(cabinet, scalingFactor);
        overallWidth *= scalingFactor;
        overallHeight *= scalingFactor;
    }
    
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={overallWidth} height={overallHeight}>
                <SidePanels cabinet={cabinet} strokeWidth={strokeWidth} />
                <Shelves cabinet={cabinet} strokeWidth={strokeWidth} />
            </svg>
        </>
    )
}