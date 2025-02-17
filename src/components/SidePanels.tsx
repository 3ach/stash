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

            <SidePanel
                x={props.strokeWidth + props.cabinet.depth + (1.5 * props.cabinet.bitWidth)}
                y={props.strokeWidth / 2}
                rotation={0}
                strokeWidth={props.strokeWidth}
                cabinet={props.cabinet}
            />
        </>
    )
} 