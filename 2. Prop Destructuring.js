// Prop destructuring is a technique in JavaScript that allows you to extract specific values from an object and assign them to variables. In the context of React, 
// props destructuring is used to simplify the process of accessing and using props passed down to a component.
// Instead of accessing props directly using the dot notation, you can use object destructuring to extract specific properties of the props object and assign them to variables. 
// For example, consider the following component:


function MyComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

// In this component, we're using the props object to access the title and description properties. However, we can use destructuring to make this code more concise and easier to read:


function MyComponent({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

// In this version of the component, we're using object destructuring to extract the title and description properties from the props object and assign them to 
// variables with the same name. This allows us to use those variables directly in the JSX markup, without having to prefix them with props.
// Prop destructuring is a simple and powerful technique that can make your React components more readable and maintainable. It can also help reduce the amount of code you 
// need to write, especially when you're working with large and complex components that receive many props.