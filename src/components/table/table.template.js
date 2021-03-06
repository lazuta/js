const CODE = {
    A: 65,
    Z: 90,
    Error: 1
}

function createRow(content, num) {
    const rezise = num ? '<div class="row-resize" data-resize="row"></div>' : '';

    return `
        <div class="row" data-type="resizable" data-row="${num}">
            <div class="row-info">
                ${num ? num : ''}
                ${rezise}    
            </div>
            <div class="row-data">${content}</div>
        </div>
    `;
}

function createCol(col, index) {
    return `
        <div class="column" data-type="resizable" data-col="${index}">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>    
    `;
}

function createCell(value, index) {
    return `
        <div class="cell" contenteditable data-col="${index}">${value}</div>
    `;
}

export function createTable(row = 30) {
    const countCol = CODE.Z - CODE.A + CODE.Error;
    const rows = [];
    const cols = new Array(countCol)
        .fill('')
        .map((el, index) => {
            return String.fromCharCode(CODE.A + index);
        })
        .map(createCol)
        .join('');

    rows.push(createRow(cols));

    for (let i = 1; i < row; i++) {
        const cells = new Array(countCol)
        .fill('')
        .map(createCell)
        .join('');

        rows.push(createRow(cells, i))
    }

    return rows.join('');
}