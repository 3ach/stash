import { SVG } from '@svgdotjs/svg.js';
import { SVGComponent, SVGProps } from './SVGComponent';
import { Cabinet } from '../models/Cabinet';

interface SidePanelProps extends SVGProps {
    cabinet: Cabinet,
}

export default class SidePanel extends SVGComponent<SidePanelProps> {
    mortise(x: number, y: number) {
        const bitWidth = this.props.cabinet.bitWidth;
        const tenonDepth = this.props.cabinet.depth / 3;
        const thickness = this.props.cabinet.thickness;

        let pathstr = `M ${x} ${y}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 1 ${x + bitWidth} ${y}`
        pathstr += `L ${x + tenonDepth - bitWidth} ${y}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 1 ${x + tenonDepth} ${y}`
        pathstr += `L ${x + tenonDepth} ${y + thickness}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 1 ${x + tenonDepth - bitWidth} ${y + thickness}`
        pathstr += `L ${x + bitWidth} ${y + thickness}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 1 ${x} ${y + thickness}`
        pathstr += 'z';

        return pathstr;
    }

    boxCabinetSide() {
        const bitWidth = this.props.cabinet.bitWidth;
        const tenonDepth = this.props.cabinet.depth / 3;
        const thickness = this.props.cabinet.thickness;
        const cleatDepth = this.props.cabinet.cleatDepth;
        const depth = this.props.cabinet.depth;
        const height = this.props.cabinet.height;
        const cleatHeight = this.props.cabinet.cleatHeight;
        const shelfCount = this.props.cabinet.shelfCount;

        const tenonBack = cleatDepth + ((depth - tenonDepth) / 2);

        let pathstr = "M 0 0 ";
        // Top with mortise 
        pathstr += `L ${tenonBack} 0`;
        pathstr += `L ${tenonBack} ${thickness}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${tenonBack + bitWidth} ${thickness}`
        pathstr += `L ${tenonBack + tenonDepth - bitWidth} ${thickness}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${tenonBack + tenonDepth} ${thickness}`
        pathstr += `L ${tenonBack + tenonDepth} 0`;
        pathstr += `L ${depth + cleatDepth} 0`;

        // Front
        pathstr += `L ${depth + cleatDepth} ${height}`;

        // Bottom with mortise
        pathstr += `L ${tenonBack + tenonDepth} ${height}`;
        pathstr += `L ${tenonBack + tenonDepth} ${height - thickness}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${tenonBack + tenonDepth - bitWidth} ${height - thickness}`
        pathstr += `L ${tenonBack + bitWidth} ${height - thickness}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${tenonBack} ${height - thickness}`
        pathstr += `L ${tenonBack} ${height}`;
        pathstr += `L ${cleatDepth} ${height}`;

        // Cleat interior angle 
        const arcStart = cleatHeight - cleatDepth + ((bitWidth / 2) / Math.tan(Math.PI / 8));
        const arcEndX = cleatDepth - (bitWidth / 2) - (bitWidth / (2 * Math.sqrt(2)));
        const arcEndY = arcStart - (bitWidth / (2 * Math.sqrt(2)));
        pathstr += `L ${cleatDepth} ${arcStart}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${arcEndX} ${arcEndY}`;

        // Cleat exterior angle
        const arcEnd = cleatHeight - ((bitWidth / 2) / Math.tan(Math.PI / 8));
        const arcStartX = (bitWidth / 2) + (bitWidth / (2 * Math.sqrt(2)));
        const arcStartY = arcEnd + (bitWidth / (2 * Math.sqrt(2)));
        pathstr += `L ${arcStartX} ${arcStartY}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 1 0 ${arcEnd}`;
        pathstr += 'z';

        const shelf_space = (height - thickness) / (shelfCount + 1);
        for (let shelf = 1; shelf <= shelfCount; shelf++) {
            pathstr += this.mortise(tenonBack, shelf * shelf_space);
        }

        return pathstr;
    }

    traySide() {
        const bitWidth = this.props.cabinet.bitWidth;
        const tenonDepth = this.props.cabinet.depth / 3;
        const thickness = this.props.cabinet.thickness;
        const cleatDepth = this.props.cabinet.cleatDepth;
        const depth = this.props.cabinet.depth;
        const height = this.props.cabinet.height;
        const cleatHeight = this.props.cabinet.cleatHeight;
        const shelfCount = this.props.cabinet.shelfCount;

        const tenonBack = cleatDepth + ((depth - tenonDepth) / 2);

        let pathstr = "M 0 0 ";
        // Top with mortise 
        pathstr += `L ${tenonBack} 0`;
        pathstr += `L ${tenonBack} ${thickness}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${tenonBack + bitWidth} ${thickness}`
        pathstr += `L ${tenonBack + tenonDepth - bitWidth} ${thickness}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${tenonBack + tenonDepth} ${thickness}`
        pathstr += `L ${tenonBack + tenonDepth} 0`;
        pathstr += `L ${depth + cleatDepth} 0`;

        // Front + bottom
        pathstr += `L ${depth + cleatDepth} ${thickness * 2}`;
        pathstr += `L ${thickness * 3 + cleatDepth} ${thickness * 3}`
        pathstr += `L ${thickness * 2 + cleatDepth} ${height}`
        pathstr += `L ${cleatDepth} ${height}`

        // Back with mortise
        pathstr += `L ${cleatDepth} ${depth - cleatHeight}`
        pathstr += `L ${cleatDepth + thickness} ${depth - cleatHeight}`
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${cleatDepth + thickness} ${depth - cleatHeight - bitWidth}`
        pathstr += `L ${cleatDepth + thickness} ${depth - cleatHeight - tenonDepth + bitWidth}`
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${cleatDepth + thickness} ${depth - cleatHeight - tenonDepth}`
        pathstr += `L ${cleatDepth} ${depth - cleatHeight - tenonDepth}`

        // Cleat interior angle 
        const arcStart = cleatHeight - cleatDepth + ((bitWidth / 2) / Math.tan(Math.PI / 8));
        const arcEndX = cleatDepth - (bitWidth / 2) - (bitWidth / (2 * Math.sqrt(2)));
        const arcEndY = arcStart - (bitWidth / (2 * Math.sqrt(2)));
        pathstr += `L ${cleatDepth} ${arcStart}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${arcEndX} ${arcEndY}`;

        // Cleat exterior angle
        const arcEnd = cleatHeight - ((bitWidth / 2) / Math.tan(Math.PI / 8));
        const arcStartX = (bitWidth / 2) + (bitWidth / (2 * Math.sqrt(2)));
        const arcStartY = arcEnd + (bitWidth / (2 * Math.sqrt(2)));
        pathstr += `L ${arcStartX} ${arcStartY}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 1 0 ${arcEnd}`;
        pathstr += 'z';

        const shelf_space = (height - thickness) / (shelfCount + 1);
        for (let shelf = 1; shelf <= shelfCount; shelf++) {
            pathstr += this.mortise(tenonBack, shelf * shelf_space);
        }

        return pathstr;
    }

    testFit() {
        const thickness = this.props.cabinet.thickness;
        const height = this.props.cabinet.height;
        const tenonDepth = height / 3;
        const bitWidth = this.props.cabinet.bitWidth;
        const kerfWidth = bitWidth * this.props.cabinet.kerf;

        let pathstr = `M 0 0`
        pathstr += `L ${2 * thickness} 0`;
        pathstr += `L ${2 * thickness} ${tenonDepth}`;
        pathstr += `L ${thickness} ${tenonDepth}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${thickness} ${tenonDepth + bitWidth}`;
        pathstr += `L ${thickness} ${height - tenonDepth - bitWidth}`;
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${thickness} ${height - tenonDepth}`;
        pathstr += `L ${2 * thickness} ${height - tenonDepth}`;
        pathstr += `L ${2 * thickness} ${height}`;
        pathstr += `L 0 ${height}`;
        pathstr += `z`;

        const xOffset = (2 * thickness) + kerfWidth;
        pathstr += `M ${xOffset + thickness} 0`
        pathstr += `L ${xOffset + 2 * thickness} 0`
        pathstr += `L ${xOffset + 2 * thickness} ${height}`
        pathstr += `L ${xOffset + thickness} ${height}`
        pathstr += `L ${xOffset + thickness} ${height - tenonDepth + bitWidth}`
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${xOffset + thickness} ${height - tenonDepth}`;
        pathstr += `L ${xOffset} ${height - tenonDepth}`
        pathstr += `L ${xOffset} ${tenonDepth}`
        pathstr += `L ${xOffset + thickness} ${tenonDepth}`
        pathstr += `A ${bitWidth / 2} ${bitWidth / 2} 0 0 0 ${xOffset + thickness} ${tenonDepth - bitWidth}`;
        pathstr += 'z'
        return pathstr;
    }

    svg() {
        switch (this.props.cabinet.cabinetType) {
            case "shelf-box": return SVG().path(this.boxCabinetSide()).fill("none")
            case "tray": return SVG().path(this.traySide()).fill("none")
            case "test-fit": return SVG().path(this.testFit()).fill("none")
        }
    }
} 