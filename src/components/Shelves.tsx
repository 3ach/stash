import Shelf from './Shelf';
import { Cabinet } from '../models/Cabinet';

type ShelfProps = {
    cabinet: Cabinet,
    strokeWidth: number,
}

export default function Shelves(props: ShelfProps) {
    const kerfWidth = props.cabinet.kerf * props.cabinet.bitWidth;
    let shelves = [];

    let x = props.strokeWidth / 2;
    let y = props.strokeWidth / 2 + props.cabinet.height + kerfWidth;
    for (let shelf = 0; shelf < props.cabinet.shelfCount + 2; shelf++) {
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

    return shelves;
} 