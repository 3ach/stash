import SidePanels from './SidePanels';
import Shelves from './Shelves';
import { Cabinet } from '../models/Cabinet'

type CabinetLayoutProps = {
    cabinet: Cabinet,
    strokeWidth: number,
}

export default function CabinetLayout(props: CabinetLayoutProps) {
    return (
        <>
            <SidePanels cabinet={props.cabinet} strokeWidth={props.strokeWidth}/>
            <Shelves cabinet={props.cabinet} strokeWidth={props.strokeWidth}/>
        </>
    )
}