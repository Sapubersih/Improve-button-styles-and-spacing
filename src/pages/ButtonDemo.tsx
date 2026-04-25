import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";

const ButtonDemo = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Improved Button Styles</h2>

      <ButtonGroup>
        <Button label="Primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Danger" variant="danger" />
      </ButtonGroup>
    </div>
  );
};

export default ButtonDemo;
