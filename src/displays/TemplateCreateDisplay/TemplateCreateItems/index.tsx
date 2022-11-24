import { Button, Card, Input } from "../../../components";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const TemplateCreateItems = ({ items, setItems }) => {
  const handleAddItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        // Increment id, start with 0 if no items exist
        id: prevItems.length === 0 ? 1 : prevItems[prevItems.length - 1].id + 1,
        name: "",
      },
    ]);
  };

  const handleItemChange = (event, itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, name: event.target.value } : item
      )
    );
  };

  const handleItemDelete = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <Card>
      <h1>TemplateCreateItems</h1>
      <Button
        Icon={faPlus}
        iconProps={{ color: "black" }}
        onClick={handleAddItem}
      >
        Add new item
      </Button>

      {items.map((item) => (
        <div key={item.id} className="flex flex-row gap-2">
          <Input
            value={item.name}
            placeholder="New item name"
            onChange={(event) => handleItemChange(event, item.id)}
          />
          <Button
            className="btn-error"
            Icon={faTrash}
            onClick={() => handleItemDelete(item.id)}
          />
        </div>
      ))}
    </Card>
  );
};

export default TemplateCreateItems;
