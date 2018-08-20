class User {
	constructor(user) {
		this.id = user.id;
		this.firstname = user.firstname;
		this.lastname = user.lastname;
		this.occupation = user.occupation;
		this.location = user.location;
	}

	get_user() {
		return `${this.firstname} ${this.lastname} is a ${this.occupation} `;
	}
}

class Node {
	constructor(data, next_node) {
		this.data = data;
		this.next_node = next_node;
	}

	get_data() {
		return this.data;
	}
	get_next_node() {
		return this.next_node;
	}

	set_next(new_next_node) {
		this.this.next_node = new_next_node;
	}
}

class LinkedList {
	constructor(head, tail) {
		this.head = head;
		this.tail = tail;
	}

	add_to_tail(item) {
		const new_node = new Node(item); // create a node
		if (this.head === undefined) {
			this.head = new_node;
			this.tail = new_node;
			this.head.next_node = this.head.set_next();
			return;
		} else {
			this.tail.next_node = this.tail;
			this.tail = new_node;
		}
	}

	remove_from_head() {
		// check if the head exist
		if (this.head == undefined) {
			return;
		}

		const head = this.head;

		this.head = head.get_next_node();
	}

	remove_from_tail() {}
}

const user1 = new User({
	id: 1,
	firstname: 'Edward',
	lastname: 'Manda',
	occupation: 'Software Engineer',
	location: 'Oklahoma',
});

const list = new LinkedList();
list.add_to_tail(1);
list.add_to_tail(2);
list.add_to_tail(3);
list.add_to_tail(4);
list.add_to_tail(6);
list.add_to_tail(7);
list.add_to_tail(user1);
console.log(list.head.get_next_node().get_data());
