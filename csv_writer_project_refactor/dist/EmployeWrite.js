"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter(['id', 'name', 'role', 'salary']);
employeeWriter.addRows([
    { id: 1, name: 'Thor', salary: 10000, role: 'King of Asgard' },
    { id: 2, name: 'Loki', salary: 15000, role: 'King of Illusions' },
    { id: 3, name: 'Mobius', salary: 23000, role: 'TVA Employee' },
]);
employeeWriter.save('data/employee.csv');
