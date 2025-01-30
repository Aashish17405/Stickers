import { useState, useRef } from "react";

function CustomStickersPage() {
  const [elements, setElements] = useState([]);
  const canvasRef = useRef(null);

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      text: type === "text" ? "New Text" : "",
    };
    setElements([...elements, newElement]);
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const element = elements.find((el) => el.id === Number.parseInt(id));
    if (element) {
      const rect = canvasRef.current.getBoundingClientRect();
      const updatedElement = {
        ...element,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setElements(
        elements.map((el) =>
          el.id === updatedElement.id ? updatedElement : el
        )
      );
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Create Custom Stickers</h1>
      <div className="flex">
        <div className="w-1/4 pr-6">
          <h2 className="text-xl font-semibold mb-4">Tools</h2>
          <button
            onClick={() => addElement("shape")}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-full"
          >
            Add Shape
          </button>
          <button
            onClick={() => addElement("text")}
            className="bg-green-500 text-white px-4 py-2 rounded mb-2 w-full"
          >
            Add Text
          </button>
        </div>
        <div className="w-3/4">
          <div
            ref={canvasRef}
            className="border-2 border-gray-300 rounded-lg h-[600px] relative"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {elements.map((element) => (
              <div
                key={element.id}
                draggable
                onDragStart={(e) => handleDragStart(e, element.id)}
                style={{
                  position: "absolute",
                  left: element.x,
                  top: element.y,
                  width: element.width,
                  height: element.height,
                }}
                className={`${
                  element.type === "shape" ? "bg-red-200" : "bg-yellow-200"
                } cursor-move`}
              >
                {element.type === "text" && element.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button className="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-600 transition duration-300">
          Save Design
        </button>
      </div>
    </div>
  );
}

export default CustomStickersPage;
