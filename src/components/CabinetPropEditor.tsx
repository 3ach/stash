import { Cabinet } from "../models/Cabinet"

type CabinetPropEditorProps = {
    cabinet: Cabinet,
    itemName: string,
    propName: keyof Cabinet,
    updateCabinet: (c: Cabinet) => void,
}

export default function CabinetPropEditor(props: CabinetPropEditorProps) {
    const update = (valueStr: string) => {
        const val = parseFloat(valueStr);
        props.updateCabinet({...props.cabinet, [props.propName]: val})
    }

    const updateIfEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (e.key == 'Enter') {
            update(target.value)
        }
    }

    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900">
                {props.itemName}: {'  '}
                <input 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" 
                    defaultValue={props.cabinet[props.propName]} 
                    onBlur={(e) => update(e.target.value)} 
                    onKeyDown={updateIfEnterPressed}/>
            </label>
        </>
    )
}