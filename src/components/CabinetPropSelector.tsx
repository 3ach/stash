import { Cabinet } from "../models/Cabinet"

type CabinetPropSelectorProps = {
    cabinet: Cabinet,
    itemName: string,
    propName: keyof Cabinet,
    options: [string, number][],
    updateCabinet: (c: Cabinet) => void,
}

export default function CabinetPropSelector(props: CabinetPropSelectorProps) {
    const update = (valueStr: string) => {
        const val = parseFloat(valueStr);
        props.updateCabinet({...props.cabinet, [props.propName]: val});
    }
    const options = props.options.map(([name, value], idx) => (<option key={idx} value={value}>{name}</option>))

    return (
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900">
                {props.itemName}: {'  '}
                <select
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    defaultValue={props.cabinet[props.propName].toString()} 
                    onChange={(e) => update(e.target.value)}
                >
                    {options}
                </select>
            </label>
        </>
    )
}