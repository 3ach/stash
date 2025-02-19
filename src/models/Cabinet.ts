
export const cabinetTypes = ["shelf-box", "tray"] as const;
export type CabinetType = typeof cabinetTypes[number];

export type Cabinet = {
    cabinetType: CabinetType,
    depth: number,
    height: number,
    width: number,
    cleatHeight: number,
    cleatDepth: number,
    thickness: number,
    shelfCount: number,

    bitWidth: number,
    kerf: number,
}

export function scaleCabinet(cabinet: Cabinet, scale: number): Cabinet {
    return {
        cabinetType: cabinet.cabinetType,
        depth: cabinet.depth * scale,
        height: cabinet.height * scale,
        width: cabinet.width * scale,
        cleatHeight: cabinet.cleatHeight * scale,
        cleatDepth: cabinet.cleatDepth * scale,
        thickness: cabinet.thickness * scale,
        shelfCount: cabinet.shelfCount,

        bitWidth: cabinet.bitWidth * scale,
        kerf: cabinet.kerf,
    }
}