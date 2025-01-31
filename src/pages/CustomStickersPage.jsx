import React, { useState, useRef } from "react";

function CustomStickersPage() {
  const [elements, setElements] = useState([]);
  const canvasRef = useRef(null);
  const [isMobileToolsVisible, setIsMobileToolsVisible] = useState(false);

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
    setIsMobileToolsVisible(false); // Close mobile tools after adding
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

  const handleTouchStart = (e, id) => {
    const touch = e.touches[0];
    const element = elements.find((el) => el.id === id);
    if (element) {
      const rect = canvasRef.current.getBoundingClientRect();
      const updatedElement = {
        ...element,
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
      setElements(
        elements.map((el) =>
          el.id === updatedElement.id ? updatedElement : el
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
          Create Custom Stickers
        </h1>
        
        {/* Mobile Tools Toggle Button */}
        <button
          className="sm:hidden w-full mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg font-medium"
          onClick={() => setIsMobileToolsVisible(!isMobileToolsVisible)}
        >
          {isMobileToolsVisible ? "Hide Tools" : "Show Tools"}
        </button>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Tools Panel */}
          <div className={`sm:w-1/4 ${isMobileToolsVisible ? 'block' : 'hidden sm:block'}`}>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Tools</h2>
              <div className="space-y-3">
                <button
                  onClick={() => addElement("shape")}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors w-full"
                >
                  Add Shape
                </button>
                <button
                  onClick={() => addElement("text")}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors w-full"
                >
                  Add Text
                </button>
              </div>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="sm:w-3/4">
            <div
              ref={canvasRef}
              className="border-2 border-gray-300 rounded-lg h-[400px] sm:h-[600px] relative bg-white shadow-inner"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {elements.map((element) => (
                <div
                  key={element.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, element.id)}
                  onTouchStart={(e) => handleTouchStart(e, element.id)}
                  style={{
                    position: "absolute",
                    left: element.x,
                    top: element.y,
                    width: element.width,
                    height: element.height,
                  }}
                  className={`
                    ${element.type === "shape" ? "bg-red-200" : "bg-yellow-200"}
                    cursor-move rounded-md shadow-sm
                    hover:shadow-md transition-shadow
                    touch-none
                  `}
                >
                  {element.type === "text" && (
                    <span className="block w-full h-full p-2 text-center break-words">
                      {element.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-4">
          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Save Design
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomStickersPage;