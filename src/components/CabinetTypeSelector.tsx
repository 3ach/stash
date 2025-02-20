import { Cabinet, CabinetType, cabinetTypes } from "../models/Cabinet"

type CabinetTypeSelectorProps = {
    cabinet: Cabinet,
    updateCabinet: (c: Cabinet) => void,
}

function cabinetTypeToName(cabinetType: CabinetType): string {
    switch (cabinetType) {
        case "shelf-box": return "Box with shelves"
        case "tray": return "Tray"
    }
}

export default function CabinetTypeSelector(props: CabinetTypeSelectorProps) {
    const update = (updatedType: CabinetType) => {
        switch (updatedType) {
            case "shelf-box": props.updateCabinet({...props.cabinet, cabinetType: updatedType, shelfCount: 3, height: 12}); break;
            case "tray": props.updateCabinet({...props.cabinet, cabinetType: updatedType, shelfCount: 0, height: (props.cabinet.cleatHeight * 3)}); break;
        }
    }
    const options = cabinetTypes.map((cabinetType, idx) => <option key={idx} value={cabinetType}>{cabinetTypeToName(cabinetType)}</option>)

    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900">
                Cabinet type: {'  '}
                <select
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    defaultValue={cabinetTypeToName(props.cabinet.cabinetType)} 
                    onChange={(e) => update(e.target.value as CabinetType)}
                >
                    {options}
                </select>
            </label>
        </>
    )
}