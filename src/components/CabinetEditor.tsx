import { Cabinet } from "../models/Cabinet"
import CabinetPropEditor from "./CabinetPropEditor"

type CabinetEditorProps = {
    cabinet: Cabinet,
    updateCabinet: (c: Cabinet) => void,
}

export default function CabinetEditor(props: CabinetEditorProps) {
    return (
        <>
        <div className="inline-block p-1.5">
            <h1 className="text-2xl font-bold">Cabinet options</h1>
            <CabinetPropEditor
                itemName="Cabinet depth"
                propName="depth"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            <CabinetPropEditor
                itemName="Cabinet height"
                propName="height"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            <CabinetPropEditor
                itemName="Cabinet width"
                propName="width"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            <CabinetPropEditor
                itemName="Shelf count"
                propName="shelfCount"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            <CabinetPropEditor
                itemName="Stock thickness"
                propName="thickness"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
        </div>
        <div className="inline-block p-1.5">
            <h1 className="text-2xl font-bold">Machine options</h1>
            <CabinetPropEditor
                itemName="Bit size"
                propName="bitWidth"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            <CabinetPropEditor
                itemName="Kerf width (bit diameters)"
                propName="kerf"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
        </div>
        <div className="inline-block p-1.5">
            <h1 className="text-2xl font-bold">Wall details</h1>
            <CabinetPropEditor
                itemName="Cleat thickness"
                propName="cleatDepth"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            <CabinetPropEditor
                itemName="Cleat height"
                propName="cleatHeight"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
        </div>
        </>
    )
}