"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// Passing the Payment interface to let PaymentWriter know the type
const PaymentWriter = new index_1.CSVWriter(['id', 'amount', 'to', 'notes']);
PaymentWriter.addRows([{ id: 1, amount: 100, to: "Gülden", notes: "Hugs and Kisses" }, { id: 2, amount: 200, to: "Brian", notes: "More Hugs and Kisses" }]);
PaymentWriter.save('./data/payments.csv');
