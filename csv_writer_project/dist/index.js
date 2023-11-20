"use strict";
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',');
    }
    addRows(values) {
    }
    formatRow(p) {
        return this.columns.map(col => p[col]).join;
    }
}
const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);
