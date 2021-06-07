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

            document.onmousemove = e => {
                const delta = e.pageX - coords.right;
                const value = coords.width + delta;
                document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
                    .forEach(el => {
                        el.style.width = value + 'px';
                    });
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
