// Parent component
function ParentComponent() {
    // Define a user object
    const user = {
      name: "John",
      age: 30,
      occupation: "Developer",
      hobbies: ["reading", "running", "cooking"]
    };
  
    // Pass the user object as a prop called 'user' to the ChildComponent
    return <ChildComponent user={user} />;
  }
  
  // Child component
  function ChildComponent({ user }) {
    // Use prop destructuring to extract the 'name', 'age', 'occupation', and 'hobbies' properties from the 'user' prop
    const { name, age, occupation, hobbies } = user;
  
    // Render the user's information using the extracted properties
    return (
      <div>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{occupation}</p>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }

// In this example, we have a parent component called ParentComponent that defines an object called user containing several properties such as name, age, occupation, and hobbies.
// We then pass this user object down to the child component ChildComponent as a prop called user. Inside the ChildComponent, we use prop destructuring to extract the properties 
//name, age, occupation, and hobbies from the user prop.
// We can then use these extracted properties directly in our JSX markup to display the user's information. The hobbies property is an array, 
// so we use the map() function to loop through each hobby and render a list item for each one.
// Prop destructuring is a convenient and readable way to extract specific properties from a prop object passed down to a component. 
// It can help make our code more concise and easier to read, especially when we have complex data structures being passed as props.