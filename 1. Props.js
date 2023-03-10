// Props are a way for components to receive data from their parent component and use it to render themselves. 
// Essentially, a parent component can pass down information to its child component via props.
// For example, imagine you have a parent component that renders a list of names, and you want to pass down each name as a prop to 
// a child component that will render each name as a list item. You would define a prop in the child component like this

function ListItem(props) {
    return <li>{props.name}</li>;
  }

  // Then, in the parent component, you would render the child component and pass in the name prop like this:

  function NameList() {
    const names = ["Alice", "Bob", "Charlie"];
    return (
      <ul>
        {names.map(name => <ListItem name={name} />)}
      </ul>
    );
  }

//   In this example, the parent component is passing down the name prop to each instance of the child component, which then uses that prop to 
//   render the name as a list item.

