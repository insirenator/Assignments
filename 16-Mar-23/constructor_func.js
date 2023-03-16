function User(name, id) {
	this.name = name;
	this.id   = id;
}

const user1 = new User('john', 10);
const user2 = new User('alice', 20);
const user3 = new User('bob', 30);

console.table([user1, user2, user3]);