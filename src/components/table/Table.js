import {ExcelComponent} from '@core/ExcelComponent';
import { createTable } from './table.template';

import {$} from '@core/dom';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        });
    }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            const $resize = $(event.target);
            const $parent = $resize.closets('[data-type="resizable"]');
            const coords = $parent.getCoords();

            const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`);
            const rows  = this.$root.findAll(`[data-row="${$parent.data.row}"]`);

            document.onmousemove = e => {
                if ($parent.data.col) {
                    const delta = e.pageX - coords.right;
                    const value = coords.width + delta;
                    cells.forEach(el => {
                        el.style.width = value + 'px';
                    });
                } else {
                    const delta = e.pageY - coords.bottom;
                    const value = coords.height + delta;
                    rows.forEach(el => {
                        el.css = value + 'px';
                    });
                }
            }

            document.onmouseup = () => {
                document.onmousemove = null;
            }
        }
    }

    toHTML() {
        return createTable();
    }
}
