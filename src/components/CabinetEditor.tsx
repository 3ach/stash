import { Cabinet, CabinetType } from "../models/Cabinet"
import CabinetPropEditor from "./CabinetPropEditor"
import CabinetTypeSelector from "./CabinetTypeSelector"

type CabinetEditorProps = {
    cabinet: Cabinet,
    updateCabinet: (c: Cabinet) => void,
}

function propertyNameToLabel(name: keyof Cabinet): string {
    switch (name) {
        case "thickness": return "Stock thickness";
        case "shelfCount": return "Shelf count";
        case "depth": return "Cabinet depth";
        case "height": return "Cabinet height";
        case "width": return "Cabinet width";
        case "bitWidth": return "Bit size";
        case "kerf": return "Kerf width (bit diameters)";
        case "cleatDepth": return "Cleat thickness";
        case "cleatHeight": return "Cleat height";
        case "cabinetType": return "Cabinet type";
    }
}

function cabinetTypeToEditableProperties(cabinetType: CabinetType): (keyof Cabinet)[][] {
    switch (cabinetType) {
        case "shelf-box": return [["thickness", "shelfCount"], ["depth", "height", "width"]]
        case "tray": return [["thickness"], ["depth", "width"]]
    }
}

export default function CabinetEditor(props: CabinetEditorProps) {
    let [firstCol, secondCol] = cabinetTypeToEditableProperties(props.cabinet.cabinetType); 

    let firstColEditors = firstCol.map((property) => <CabinetPropEditor
        itemName={propertyNameToLabel(property)}
        propName={property}
        updateCabinet={props.updateCabinet}
        cabinet={props.cabinet}
    />)

    let secondColEditors = secondCol.map((property) => <CabinetPropEditor
        itemName={propertyNameToLabel(property)}
        propName={property}
        updateCabinet={props.updateCabinet}
        cabinet={props.cabinet}
    />)

    return (
        <>
        <div className="inline-block p-1.5">
            <h1 className="text-2xl font-bold">Cabinet options</h1>
            <div className="inline-block p-1.5">
            <CabinetTypeSelector
                updateCabinet={props.updateCabinet}
                cabinet={props.cabinet}
            />
            {firstColEditors}
            </div>
            <div className="inline-block p-1.5">
            {secondColEditors}
            </div>
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