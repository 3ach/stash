import SidePanels from './SidePanels';
import Shelves from './Shelves';
import { Cabinet } from '../models/Cabinet'

type CabinetLayoutProps = {
    cabinet: Cabinet,
    strokeWidth: number,
}

export default function CabinetLayout(props: CabinetLayoutProps) {
    const depth = props.cabinet.depth;
    const height = props.cabinet.height;
    const width = props.cabinet.width; 
    const shelfCount = props.cabinet.shelfCount;
    const cleatDepth = props.cabinet.cleatDepth;
    const kerfWidth = props.cabinet.kerf * props.cabinet.bitWidth;
    const strokeWidth = props.strokeWidth;

    const overallWidth = (2 * (strokeWidth + depth)) + cleatDepth + kerfWidth - (strokeWidth / 2);
    const shelfRows = Math.ceil(shelfCount / 2) + 1;
    const overallHeight = height + strokeWidth + (kerfWidth * (shelfRows)) + ((width + strokeWidth) * shelfRows);
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={overallWidth} height={overallHeight}>
                <SidePanels cabinet={props.cabinet} strokeWidth={strokeWidth} />
                <Shelves cabinet={props.cabinet} strokeWidth={strokeWidth} />
            </svg>
        </>
    )
}