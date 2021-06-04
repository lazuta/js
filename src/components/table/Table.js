import {ExcelComponent} from '@core/ExcelComponent';
import { createTable } from './table.template';


export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['click', 'mousedown', 'mouseup', 'mousemove']
        });
    }

    onClick(event) {
        // console.log(event.target)
    }

    onMouseup(event) {
        // console.log(event.target)
    }

    onMousedown(event) {
        // console.log(event.target)
    }

    onMousemove(event) {
        // console.log(event.target)
    }

    toHTML() {
        return createTable();
    }
}
