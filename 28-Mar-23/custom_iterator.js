class Record {
	constructor() {
		this._records = [];
	}
	add(name, id) {
		this._records.push({id, name});
	}
	[Symbol.iterator]() {
		return this._records.values();
	}
}

let classRecord = new Record();
classRecord.add("Shakeeb", 12);
classRecord.add("Hira", 9);
classRecord.add("Saieeda", 14);

for (const record of classRecord) {
	console.log(record);
}