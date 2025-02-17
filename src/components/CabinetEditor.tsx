import { Cabinet } from "../models/Cabinet"

type CabinetEditorProps = {
    cabinet: Cabinet,
    updateCabinet: (c: Cabinet) => void,
}

export default function CabinetEditor(props: CabinetEditorProps) {
    const updateDepth = (depth: number) => {
        props.updateCabinet({
            ...props.cabinet,
            depth: depth,
            tenonDepth: depth / 3,
        })
    }

    const updateHeight = (height: number) => {
        props.updateCabinet({
            ...props.cabinet,
            height: height,
        })
    }

    const updateWidth = (width: number) => {
        props.updateCabinet({
            ...props.cabinet,
            width: width,
        })
    }

    const updateShelfCount = (count: number) => {
        props.updateCabinet({
            ...props.cabinet,
            shelfCount: count
        })
    }

    const updateBitWidth = (width: number) => {
        props.updateCabinet({
            ...props.cabinet,
            bitWidth: width,
            kerf: (width * 1.5),
        })
    }

    const updateStockThickness = (thickness: number) => {
        props.updateCabinet({
            ...props.cabinet,
            thickness: thickness,
        })
    }

    return (
        <>
            <label >
                Cabinet depth: {'  '}
                <input defaultValue={props.cabinet.depth} onBlur={(e) => updateDepth(parseFloat(e.target.value))} />
            </label>
            <br />
            <label >
                Cabinet height: {'  '}
                <input defaultValue={props.cabinet.height} onBlur={(e) => updateHeight(parseFloat(e.target.value))} />
            </label>
            <br />
            <label >
                Cabinet width: {'  '}
                <input defaultValue={props.cabinet.width} onBlur={(e) => updateWidth(parseFloat(e.target.value))} />
            </label>
            <br />
            <label >
                Shelf count: {'  '}
                <input defaultValue={props.cabinet.shelfCount} onBlur={(e) => updateShelfCount(parseFloat(e.target.value))} />
            </label>
            <br />
            <label >
                Bit width: {'  '}
                <select defaultValue={props.cabinet.bitWidth.toString()} onChange={(e) => updateBitWidth(parseFloat(e.target.value))}>
                    <option value="0.125">1/8"</option>
                    <option value="0.25">1/4"</option>
                </select>
            </label>
            <br />
            <label >
                Stock thickness: {'  '}
                <select defaultValue={props.cabinet.thickness.toString()} onChange={(e) => updateStockThickness(parseFloat(e.target.value))}>
                    <option value="0.25">1/4"</option>
                    <option value="0.5">1/2"</option>
                    <option value="0.75">3/4"</option>
                </select>
            </label>
        </>
    )
}