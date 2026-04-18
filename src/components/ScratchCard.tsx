import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const ScratchCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawing = useRef(false);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    // Gold scratch surface
    const grad = ctx.createLinearGradient(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    grad.addColorStop(0, "#b8860b");
    grad.addColorStop(0.5, "#daa520");
    grad.addColorStop(1, "#b8860b");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    // Text on scratch surface
    ctx.fillStyle = "#fff";
    ctx.font = "600 16px 'Cormorant Garamond', serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch to Reveal ✨", canvas.offsetWidth / 2, canvas.offsetHeight / 2 - 8);
    ctx.font = "400 13px 'Poppins', sans-serif";
    ctx.fillText("the Wedding Date", canvas.offsetWidth / 2, canvas.offsetHeight / 2 + 16);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const cx = (x - rect.left);
    const cy = (y - rect.top);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    ctx.fill();

    // Check reveal percentage
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) cleared++;
    }
    if (cleared / (imageData.data.length / 4) > 0.4) {
      setIsRevealed(true);
    }
  };

  const handleStart = () => { isDrawing.current = true; };
  const handleEnd = () => { isDrawing.current = false; };
  const handleMove = (x: number, y: number) => {
    if (isDrawing.current) scratch(x, y);
  };

  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-sm mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-3xl text-foreground mb-6">
          Reveal the Date
        </h2>

        <div className="relative invitation-card rounded-2xl overflow-hidden mx-auto" style={{ height: 200 }}>
          {/* Hidden content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-1">Save the Date</p>
            <p className="font-heading text-2xl font-bold text-foreground">December 15, 2025</p>
            <p className="text-muted-foreground mt-1">Monday, 9:00 AM</p>
            <p className="text-muted-foreground text-sm mt-1">Guruvayur Temple, Kerala</p>
          </div>

          {/* Scratch canvas */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full cursor-crosshair touch-none transition-opacity duration-500 ${isRevealed ? "opacity-0 pointer-events-none" : ""}`}
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
            onTouchStart={(e) => { handleStart(); scratch(e.touches[0].clientX, e.touches[0].clientY); }}
            onTouchEnd={handleEnd}
            onTouchMove={(e) => { e.preventDefault(); handleMove(e.touches[0].clientX, e.touches[0].clientY); }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ScratchCard;
