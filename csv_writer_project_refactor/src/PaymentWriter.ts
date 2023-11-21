import { CSVWriter } from "./index"

interface Payment {
    id: number,
    amount: number,
    to: string,
    notes: string,
}
// Passing the Payment interface to let PaymentWriter know the type
const PaymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes']);

PaymentWriter.addRows([{ id: 1, amount: 100, to: "Gülden", notes: "Hugs and Kisses" }, { id: 2, amount: 200, to: "Brian", notes: "More Hugs and Kisses" }]);

PaymentWriter.save('./data/payments.csv');