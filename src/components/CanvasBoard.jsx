import { useEffect, useRef, useState } from "react";
import GalaxyBackground from "./GalaxyBackground";
const galaxyColors = [
  "#ffffff", "#00ffff", "#bf00ff", "#ff69b4", "#ff4500", "#39ff14", "#ffd700"
];

export default function CanvasBoard() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [strokeColor, setStrokeColor] = useState("#ffffff");
  const [isErasing, setIsErasing] = useState(false);
  const [history, setHistory] = useState([]);
  const [eraserSize, setEraserSize] = useState(10);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineWidth = 4;
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctxRef.current = ctx;
  }, []);

  useEffect(() => {
    if (!isErasing && ctxRef.current) {
      ctxRef.current.strokeStyle = strokeColor;
      ctxRef.current.lineWidth = 4;
    }
  }, [strokeColor]);

 
  const getOffset = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      return {
        offsetX: touch.clientX - rect.left,
        offsetY: touch.clientY - rect.top,
      };
    } else {
      return {
        offsetX: e.nativeEvent.offsetX,
        offsetY: e.nativeEvent.offsetY,
      };
    }
  };

  const startDrawing = (e) => {
    const { offsetX, offsetY } = getOffset(e);
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const { offsetX, offsetY } = getOffset(e);
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    if (!drawing) return;
    ctxRef.current.closePath();
    setDrawing(false);
    const snapshot = canvasRef.current.toDataURL();
    setHistory((prev) => [...prev, snapshot]);
  };

  const undo = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const prev = [...history];
    prev.pop();
    const last = prev[prev.length - 1];
    if (last) {
      const img = new Image();
      img.src = last;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        setHistory(prev);
      };
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setHistory([]);
    }
  };

  // ✅ Clear
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setHistory([]);
  };

  // ✅ Eraser
  const toggleEraser = () => {
    if (!isErasing) {
      ctxRef.current.strokeStyle = "black";
      ctxRef.current.lineWidth = eraserSize;
    } else {
      ctxRef.current.strokeStyle = strokeColor;
      ctxRef.current.lineWidth = 4;
    }
    setIsErasing(!isErasing);
  };

  return (
  <GalaxyBackground >
    <div className="relative w-screen h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-0 touch-none"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />

      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10 text-white text-4xl font-bold drop-shadow-lg">
        Portfolio
      </div>


      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-white space-y-4 text-center">
        <div className="flex gap-2 justify-center">
          {galaxyColors.map((color) => (
            <button
              key={color}
              onClick={() => {
                setStrokeColor(color);
                if (isErasing) setIsErasing(false);
              }}
              className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="flex gap-3 justify-center mt-2">
          <button onClick={undo} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Undo
          </button>
          <button onClick={clearCanvas} className="px-4 py-2 bg-red-600 rounded hover:bg-red-700">
            Clear
          </button>
          <button
            onClick={toggleEraser}
            className={`px-4 py-2 rounded ${isErasing ? "bg-yellow-600" : "bg-gray-600"}`}
          >
            {isErasing ? "Erasing…" : "Eraser"}
          </button>
        </div>

        {isErasing && (
          <div className="text-white text-sm mt-2 flex flex-col items-center">
            <label htmlFor="eraserRange" className="mb-1">Eraser Size</label>
            <input
              id="eraserRange"
              type="range"
              min="4"
              max="40"
              value={eraserSize}
              onChange={(e) => {
                setEraserSize(Number(e.target.value));
                if (isErasing) {
                  ctxRef.current.lineWidth = Number(e.target.value);
                }
              }}
              className="w-40"
            />
          </div>
        )}
      </div>
    </div> 
    </GalaxyBackground>
  );
}
