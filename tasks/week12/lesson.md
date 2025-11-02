
# Week 12 - Vite, Build Systems and React and State


## Vite - Build System

Within the web development space, a common build system and bundler that sits on top of `npm` is `vite`. This build system is focused on web development itself, it will include a few features like:

* Hot Module Reload
* Native ES Module Bindings
* Bundler (rollup), that will optimise imports and minify your application
* Templates and defaults for web frameworks like React and Vue

The main intent is to make frontend development easier and faster, however given the tooling that is involved, it can have its own complexity.

Within the web development space you will find that there are a number of build systems that sit above `npm` which advertise the features that `vite` outline. 


### Getting Started with Vite

To get started, you can start by building a scaffold of your project using:

```
npm create vite@latest  
```

You can then select `React` and `Javascript`, this should allow you to 

Once generated, you can see the contents of the template, so lets breakdown each part.

```
public  src  lint.config.js  package.json  README.md
tsconfig.app.json  tsconfig.node.json  index.html
tsconfig.json      vite.config.ts 
```

* `public` - Folder for default files like `index.html`
* `package.json` - scripts and dependencies
* `lint.config.js` - Default linter configuration
* `vite.config.ts` - Configuration file for vite build system
* `src` - Where your typescript files go

### Changes inside package.json with Vite


With `vite`, the build system also enables running a `development` mode of the webserver that will allow for reloading of the files if changes are detected.

You are able to run the development server using `npm run dev`. This will use the `dev` script within `package.json`.

Within `package.json`, we can observe the following:

```
"scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
}
```

### What kind of web application are we building?

The main focus when we use something like `vite` and a frontend framework like `react` is that we intending to build a web application. These are normally in the form of a Single Page Application (SPA).


The single page application came from more advanced usage of `AJAX` and retrieving data through javascript and updating the DOM elements.

Web-Frameworks evolved to facilitate more control over the DOM and componentise parts of the DOM rather than having to build up things. While logically there could be multiple pages, from the browser's perspective it is a single page and the DOM is manipulated.


## React

React is a web framework that is used to build more complex web applications. This isn't to say you should build everything with react but is to indicate that there is going to be a certain amount of complexity that will need to be managed when your application reaches a certain point.


React's perspective on components and modularisation is to treat classes and functions are components which render HTML (or in the case of React-Native, NativeUI components).

Within `main.tsx`, you will observe:

```
<StrictMode>
  <App />
</StrictMode>    
```

The above `App` being a component which is the result of `App()` when rendered.

\newpage

### Components and Properties


Let's go through what is involved in a component by creating our own.

As a task, let's create a component which displays a message and colours it. By defining a function called Message and making it return `JSX`, this conforms to what React expects a component to be.

```jsx
function Message(props) {
    return (
        <div style={{color: props.textColor}}>
            {props.msg}
        </div>
    )
}
    
```

When using the above component, we would use it in a similar manner to `HTML`, this usually ends up being a source of confusion with React, which is how a `function` and the `JSX` statement are linked. Looking below 

Using the `Message` component will require another component to have linked to it or be in the same file. Within `App.tsx`, we will reset the output to only contain:

```tsx
<div>
    <Message msg={"Hello World"} textColor={"#00FF00"}/>
</div> 
```

We can observe that the properties that are set in the component match the fields of the `Message` function, lets assume that `props` is an object that will contain the following fields `msg` and `textColor`.

Let's keen observe the following from the component (function):

* `function Message(props)`
* `<div style={{color: props.textColor}}>`
* `{props.msg}`

We can see how the parameter is used within the function and that it is an object that contains the fields `msg` and `textColor`. When using the component, we can observe:

* `<Message msg={"Hello World"} textColor={"#00FF00"}/>`

The fields `msg` and `textColor` are set, so, we can see the connection between the fields associated with the `props` parameter and the arguments we pass to `msg` and `textColor` when using the component. We can also see the connection between `Message` used between the two angle brackets and the function called `Message`.

What is not observed is that there is another thing at play, your filename is not `.js` it is `.jsx`, this actually triggers a `jsx` parser to go through and transform the `jsx` into regular `js`.


### So how does this render?


When the react application is rendered, the components are transformed into the final state of the render (for that instance).

So, given:

```
<App />
    -> <div><Message msg={"Hello World"} textColor={'#00FF00'} /></div>
       -> <div><p style="color:'#00FF00'">Hello World</p></div>   

```

We can observe a tree-like structure, although shallow as it may be, this will become more apparent with more complex components.

### Aggregates with Components


To handle collections or aggregates, we can usually trigger rendering of multiple elements as mapped to components.

Using the `Message` component from before, if we have the following:

```js
const messages = ["Hello World", "It is a good day!", "See you later!"] 
```

We could create a list of components by constructing them and adding them into an array, or simply using `.map` method associated with collections.

```jsx
const renderedMessages = messages.map((e) => <Message msg={e} />)
```

Alternatively, we cna just use a regular for-loop to achieve the same thing.

```jsx

const renderedMessages = [];

for(const e of messages) {
  renderedMessages.push(<Message msg={e} />)
}
```

We are able to render the collection within another context like so:

```jsx
<div class="allmessages">
  {renderedMessages}
</div>
```

\newpage

## React Hooks

Within `React` we have a few hooks we will utilise. A common hook is `useState` or in the case of class components, state and props are typically type-arguments for `React.Component`.

As an alternative, as this may seem a little more logical.

```tsx
class Message extends React.Component<{ msg: string }, {}> {

    render() {
        const msg = this.props.msg;

        return (
            <p>{msg>}</p>
        )
    }
}
```


### useState


A primary way to trigger a re-render of a component is to trigger a state change. This is typically combined with event handling.

To create a simple counting component, we will need to have:

* HTML Button
* State which is the number of times a user has clicked a button
* Event that can be triggered by the button and update the state


Lets go through a simple counter component. This will re-render on each click and update the state of the component.

```tsx
function Counter(props): ReactElement {

    const [counter, setCounter] = useState(0);
    const output = `${props.prefix}: ${counter}`;

    const mouseEvent = (e: MouseEvent<HTMLButton>) => {
        const newValue = counter + 1;
        setCounter(newValue);        
    }
    return (<button onClick={mouseEvent}>
            {output}
            </button>)
}
    
```


## References

1. vite, <https://vite.dev/>

2. Your First Component, <https://react.dev/learn/your-first-component>

3. Componentizing our React app, <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_components>

4. useState, <https://react.dev/reference/react/useState>

5. Javascript Events, <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events>

