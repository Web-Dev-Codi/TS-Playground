"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n';
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log("file saved to", filename);
    }
    addRows(values) {
        let rows = values.map(v => this.formatRow(v));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    formatRow(p) {
        return this.columns.map(col => p[col]).join(',');
    }
}
const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);
writer.addRows([{ id: 1, amount: 100, to: "Gülden", notes: "Hugs and Kisses" }, { id: 2, amount: 200, to: "Brian", notes: "More Hugs and Kisses" }]);
writer.save('./data/payments.csv');
