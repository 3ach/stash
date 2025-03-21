import { SVG } from '@svgdotjs/svg.js';
import { SVGComponent, SVGProps } from './SVGComponent';
import { Cabinet } from '../models/Cabinet';

interface SidePanelProps extends SVGProps {
    cabinet: Cabinet,
}

export default class Shelf extends SVGComponent<SidePanelProps> {

    svg() {
        const tenonDepth = this.props.cabinet.depth / 3;
        const thickness = this.props.cabinet.thickness;
        const depth = this.props.cabinet.depth;
        const width = this.props.cabinet.width;

        const tenonBack = (depth - tenonDepth) / 2;

        let pathstr = `M 0 ${thickness}`
        pathstr += `L ${tenonBack} ${thickness}`
        pathstr += `L ${tenonBack} 0`
        pathstr += `L ${tenonBack + tenonDepth} 0`
        pathstr += `L ${tenonBack + tenonDepth} ${thickness}`
        pathstr += `L ${depth} ${thickness}`
        pathstr += `L ${depth} ${width - thickness}`
        pathstr += `L ${tenonBack + tenonDepth} ${width - thickness}`
        pathstr += `L ${tenonBack + tenonDepth} ${width}`
        pathstr += `L ${tenonBack} ${width}`
        pathstr += `L ${tenonBack} ${width - thickness}`
        pathstr += `L 0 ${width - thickness}`
        pathstr += 'z'

        return SVG().path(pathstr);
    }
} 