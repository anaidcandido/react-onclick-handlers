//function TestButton(): JSX.Element {
//  function handleClick() {
//    console.log("This is only a Test Button");
//  }
//  return (
//    <button onClick={handleClick}>
//      Make me do something when I'm clicked...
//    </button>
//  );
//}

export default TestButton;

function TestButton():JSX.Element{
  return (
    <button onClick={() => window.open("a new function")}
    >
        Make me open a new window
    </button>
  )
} 
