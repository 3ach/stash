import { Cabinet } from "../models/Cabinet"
import CabinetPropEditor from "./CabinetPropEditor"
import CabinetPropSelector from "./CabinetPropSelector"

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
                itemName="Cabinet depth (in)"
                propName="depth"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            <CabinetPropEditor
                itemName="Cabinet height (in)"
                propName="height"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            <CabinetPropEditor
                itemName="Cabinet width (in)"
                propName="width"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            <CabinetPropEditor
                itemName="Shelf count (in)"
                propName="shelfCount"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            <CabinetPropSelector
                itemName="Stock thickness"
                propName="thickness"
                options={[['1/4"', 0.25], ['1/2"', 0.5], ['3/4"', 0.75]]}
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
        </div>
        <div className="inline-block p-1.5">
            <h1 className="text-2xl font-bold">Machine options</h1>
            <CabinetPropSelector
                itemName="Bit size"
                propName="bitWidth"
                options={[['1/8"', 0.125], ['1/4"', 0.25]]}
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
            <CabinetPropSelector
                itemName="Cleat thickness"
                propName="cleatDepth"
                options={[['1/2"', 0.5], ['3/4"', 0.75]]}
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            <CabinetPropEditor
                itemName="Cleat height (in)"
                propName="cleatHeight"
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
        </div>
        </>
    )
}