const CODE = {
    A: 65,
    Z: 90,
    Error: 1
}

function createRow(content, num) {
    return `
        <div class="row">
            <div class="row-info">${num ? num : ''}</div>
            <div class="row-data">${content}</div>
        </div>
    `;
}

function createCol(col) {
    return `
        <div class="column">${col}</div>    
    `;
}

function createCell(value) {
    return `
        <div class="cell" contenteditable>${value}</div>
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