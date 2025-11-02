
/**
 * StackNode for holding data
 */
export class StackNode {
	value = null;
	next = null;

	constructor(value) {
		this.next = null;
		this.value = value;
	}

}

/**
 * Stack 
 */
export class Stack {
	
	root = null;

	/**
	 * Creates a stack
	 * Should initialise the root node of the linked list
	 * and size
	 */
	constructor() {
		//TODO: Implement fields
		
	}

	/**
	 * Gets the root of the stack, 
	 * this would be the starting node
	 * @return {StackNode} root - 
	 * 	Root of the linkedlist
	 */
	peek() {
		return null;	
	}

	
	/**
	 * Adds an element to the stack, replaces the top of the stack
	 * with the new one.
	 * @param obj
	 */
	push(obj) {
		//TODO: Implement append logic
	}

	/**
	 * Removes the top element from stack, returns it
	 * @return obj - Object to be removed or null
	 *
	 */
	pop() {
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


