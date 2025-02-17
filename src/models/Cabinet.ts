export type Cabinet = {
    depth: number,
    height: number,
    width: number,
    cleatHeight: number,
    cleatDepth: number,
    thickness: number,
    tenonDepth: number,
    shelfCount: number,

    bitWidth: number,
    kerf: number,
}

export function scaleCabinet(cabinet: Cabinet, scale: number): Cabinet {
    return {
        depth: cabinet.depth * scale,
        height: cabinet.height * scale,
        width: cabinet.width * scale,
        cleatHeight: cabinet.cleatHeight * scale,
        cleatDepth: cabinet.cleatDepth * scale,
        thickness: cabinet.thickness * scale,
        tenonDepth: cabinet.tenonDepth * scale,
        shelfCount: cabinet.shelfCount,

        bitWidth: cabinet.bitWidth * scale,
        kerf: cabinet.kerf * scale,
    }
}