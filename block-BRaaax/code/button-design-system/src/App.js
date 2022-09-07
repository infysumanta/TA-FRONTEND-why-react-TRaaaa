import Button from "./Button";

function App() {
  return (
    <div className="container">
      <Button label="Button" />
      <Button label="Button" disabled={true} />
      <Button label="Button" disabled={false} />
      <Button
        label="Button"
        size="medium"
        type="primary"
        onClickHandler={() => alert("You Clicked Me!")}
      />
      <Button label="Button" size="small" />
      <Button label="Button" size="medium" />
      <Button label="Button" size="large" />

      <Button label="Button" type="primary" />
      <Button label="Button" type="secondary" />
      <Button label="Button" type="tertiary" />
    </div>
  );
}

export default App;
