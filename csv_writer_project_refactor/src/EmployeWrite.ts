import { CSVWriter } from "./index";

interface Employee {
    id: number;
    name: string;
    role: string;
    salary: number;
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary']);

employeeWriter.addRows([
    { id: 1, name: 'Thor', salary: 10000, role: 'King of Asgard' },
    { id: 2, name: 'Loki', salary: 15000, role: 'King of Illusions' },
    { id: 3, name: 'Mobius', salary: 23000, role: 'TVA Employee' },
]);

employeeWriter.save('data/employee.csv');