import Shelf from './Shelf';
import Stretcher from './Stretcher';
import { Cabinet, CabinetType } from '../models/Cabinet';

type ShelfProps = {
    cabinet: Cabinet,
    strokeWidth: number,
}

function cabinetTypeToBaseShelfCount(cabinetType: CabinetType): number {
    switch (cabinetType) {
        case "shelf-box": return 2
        case "tray": return 1
    }
}

function cabinetTypeToStretcherCount(cabinetType: CabinetType): number {
    switch (cabinetType) {
        case "shelf-box": return 0
        case "tray": return 1
    }
}

export default function Shelves(props: ShelfProps) {
    const kerfWidth = props.cabinet.kerf * props.cabinet.bitWidth;
    const shelves = [];

    let shelfCount = cabinetTypeToBaseShelfCount(props.cabinet.cabinetType) + props.cabinet.shelfCount;

    let x = props.strokeWidth / 2;
    let y = props.strokeWidth / 2 + props.cabinet.height + kerfWidth;
    for (let shelf = 0; shelf < shelfCount; shelf++) {
        if (shelf % 2 == 0) {
            x = props.strokeWidth / 2;
            if (shelf > 0) {
                y += props.cabinet.width + kerfWidth;
            }
        } else {
            x += props.cabinet.depth + kerfWidth;
        }

        shelves.push(<Shelf key={shelf} x={x} y={y} strokeWidth={props.strokeWidth} rotation={0} cabinet={props.cabinet} />)
    }

    let stretcherCount = cabinetTypeToStretcherCount(props.cabinet.cabinetType);
    for (let stretcher = shelfCount; stretcher < stretcherCount + shelfCount; stretcher++) {
        if (stretcher % 2 == 0) {
            x = props.strokeWidth / 2;
            if (stretcher > 0) {
                y += props.cabinet.width + kerfWidth;
            }
        } else {
            x += props.cabinet.depth + kerfWidth;
        }

        shelves.push(<Stretcher key={stretcher} x={x} y={y} strokeWidth={props.strokeWidth} rotation={0} cabinet={props.cabinet} />)
    }

    return shelves;
} 