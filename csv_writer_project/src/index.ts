interface Payment {
	id: number,
	amount: number,
	to: string,
	notes: string,
}

type PaymentColumns = ('id'| 'amount'| 'to' | 'notes')[];

class CSVWriter {
	constructor(private columns: PaymentColumns) {
		this.csv = this.columns.join(',')
	 }

	private csv: string;

	addRows(values: Payment[]): void {

	}

	private formatRow(p: Payment):string {
		return this.columns.map(col => p[col]).join(',')
	}
}

const writer = new CSVWriter(['id' , 'amount' , 'to' , 'notes'])