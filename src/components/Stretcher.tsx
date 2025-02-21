import { SVG } from '@svgdotjs/svg.js';
import { SVGComponent, SVGProps } from './SVGComponent';
import { Cabinet } from '../models/Cabinet';

interface SidePanelProps extends SVGProps {
    cabinet: Cabinet,
}

export default class Stretcher extends SVGComponent<SidePanelProps> {

    svg() {
        const tenonDepth = this.props.cabinet.height / 3;
        const width = this.props.cabinet.width;


        let pathstr = `M 0 0`
        pathstr += `L ${tenonDepth} 0`
        pathstr += `L ${tenonDepth} ${width}`
        pathstr += `L 0 ${width}`
        pathstr += 'z'

        return SVG().path(pathstr);
    }
} 