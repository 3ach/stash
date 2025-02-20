import SidePanel from './SidePanel';
import { Cabinet } from '../models/Cabinet'

type SidePanelProps = {
    cabinet: Cabinet,
    strokeWidth: number,
}

export default function SidePanels(props: SidePanelProps) {
    return (
        <>
            <SidePanel
                x={props.strokeWidth / 2}
                y={props.strokeWidth / 2}
                rotation={180}
                strokeWidth={props.strokeWidth}
                cabinet={props.cabinet}
            />

            {props.cabinet.cabinetType != "test-fit" ? <SidePanel
                x={props.strokeWidth + props.cabinet.depth + (props.cabinet.kerf * props.cabinet.bitWidth)}
                y={props.strokeWidth / 2}
                rotation={0}
                strokeWidth={props.strokeWidth}
                cabinet={props.cabinet}
            /> : null}
        </>
    )
} 