
# Week 12 - Exercises

## 1. Recipe for React

You are tasked with creating a react app that will outline the ingredients for web application and what it is made of.

You will need to create the following components.


* `Recipe`, this component will represent a list of ingredients, it will use a `<ul>` tag, as it will contain `<li>` items inside it. It will have `name` and `ingredients` properties. `ingredients` will be an array of elements which must contain two fields:
  `name` and `amount`.

* `Ingredient`, this component will have the properties `name` and `amount` which are represented as strings. This will be represented as a `<li>` tag, consider how this relates to the `Recipe` component.

  Examples of `name` and `amount`:
    'JSX', 'A smidge of'

List the following recipes on your website:

React:
  * A little bit of JSX
  * Plenty of components
  * 10mg of coffee

Vite:
  * 1 cup of npm
  * A byte of a rollup
  * 20grams of nodejs



## 2. Shopping List


Construct a react application that will allow the user to input shopping list items to a list. You will need to construct the following components:

1. `App` - This will simply enclose the components.

2. `ShoppingList` - Component that will encompass the shopping items and list them when rendered. Consider using a `<ul>` tag.

3. `ShoppingItem` - Component that will represent an individual shopping item, this could be simply represented as a `<li>` tag.

4. `ItemInput` - Component that will handle user input and add it to the `ShoppingList`.

Consider styling your components using `css`. Centre the application and adjust your input to be below the shopping list.


## 3. Flash Cards


You are to build a flash-card application. The domain the flash-card application will be used for is for the domain you are already specialising in.

Implement the following components

1. `App` - Asking the user to outline the number flash cards they want

2. `Flashcard` - A component with a text field that is displayed, this text should be large

3. `FlashcardControls` - A component which controls what flashcard you are currently up to. This should have a button to go to the next flash card in the list given. The controls should have a `Next` and `Reset` button, as outlined prior, `next` is to to trigger the next flash card on screen while `Reset` is to restart from the beginning.

You can use the following list to help test your flashcard application

* What is `nodejs` used for?
* Modules in `nodejs` are recorded in what file?
* What is a callback in javascript?
* What does the `class` keyword do in javascript?
* Where are modules located in a node project?
* How do you install a package with `npm`?

## 4. Wiring up our todo-app to the api-server

Last week you would have implemented a todo-api, if you have not completed that task, it is advisable to complete that task before starting this one.

Once you can confirm that your API is current running, you are to create an applicaiton that will have the following comoponents:

* `App` - Application that will hold onto a view, based on the context it is currently in.

* `TodoListView` - Component that will list all the tasks in the database along with a button to `Add A Task`. All todos listed here will only have their title.

* `TodoView` - Component that will how a specific todo and its details. This will allow the user to modify a todo inside that view. You may want to have an `UpdateTodoView` as well.

* `AddTodoView` - Component that will allow the user to add a todo to the database and become viewable.

Consider how you will construct navigation within this system. You want to ensure that you can always go back to the previous view.

You are free to construct your own components that will be used in the views above.

