

export class QueueNode {
	value = null;
	next = null;

	constructor(value) {
		this.next = null;
		this.value = value;
	}

}


/** Queue class **/
export class Queue {
	
	root = null;

	/**
	 * Creates a linkedlist
	 * Should initialise the root node of the linked list
	 * and size
	 */
	constructor() {
		//TODO: Implement fields
		
	}

	/**
	 * Gets the root of the linkedlist, 
	 * this would be the starting
	 * node
	 * @return {QueueNode} root - 
	 * 	Root of the linkedlist
	 */
	retrieveRoot() {
		return null;	
	}

	
	/**
	 * Appends an object to the end of the linkedlist
	 * @param {number} obj - 
	 * 	Object to be inserted into the
	 * 	linked list
	 *
	 */
	enqueue(obj) {
		//TODO: Implement append logic
		if(this.root == null) {
			this.root = new QueueNode(obj);
		}
	}

	/**
	 * Removes an element from the queue front, returns it
	 * @return {Object} obj - 
	 * 	Object to be removed or null
	 *
	 */
	dequeue() {
		//TODO: Implement remove logic
		return null;
	}

	/**
	 * Size of the list, number of elements in the list
	 * @return {number} size - 
	 * 	Number of elements in the list
	 */
	size() {
		//TODO: Return the number of elements 
		// in the linked list
		return 0;
	}

}


