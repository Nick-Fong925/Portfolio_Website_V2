"use client";

import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  type: "circle" | "triangle" | "square";
  opacity: number;
}

export function FloatingShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check if mobile device
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createShapes = () => {
      const shapes: Shape[] = [];
      const shapeCount = Math.floor(window.innerWidth / 200); // Responsive shape count

      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 10,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          type: ["circle", "triangle", "square"][
            Math.floor(Math.random() * 3)
          ] as Shape["type"],
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      shapesRef.current = shapes;
    };

    const drawShape = (shape: Shape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.globalAlpha = shape.opacity;

      // Purple gradient colors
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size);
      gradient.addColorStop(0, "rgba(147, 51, 234, 0.8)");
      gradient.addColorStop(1, "rgba(79, 70, 229, 0.2)");
      ctx.fillStyle = gradient;
      ctx.strokeStyle = "rgba(147, 51, 234, 0.5)";
      ctx.lineWidth = 1;

      switch (shape.type) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          break;
        case "square":
          ctx.fillRect(
            -shape.size / 2,
            -shape.size / 2,
            shape.size,
            shape.size,
          );
          ctx.strokeRect(
            -shape.size / 2,
            -shape.size / 2,
            shape.size,
            shape.size,
          );
          break;
      }
      ctx.restore();
    };

    const updateShapes = () => {
      shapesRef.current.forEach((shape) => {
        // Mouse interaction
        const dx = mouseRef.current.x - shape.x;
        const dy = mouseRef.current.y - shape.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          shape.vx += (dx / distance) * force * 0.01;
          shape.vy += (dy / distance) * force * 0.01;
        }

        // Update position
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        // Boundary collision
        if (shape.x < 0 || shape.x > canvas.width) shape.vx *= -1;
        if (shape.y < 0 || shape.y > canvas.height) shape.vy *= -1;

        // Keep shapes in bounds
        shape.x = Math.max(0, Math.min(canvas.width, shape.x));
        shape.y = Math.max(0, Math.min(canvas.height, shape.y));

        // Friction
        shape.vx *= 0.99;
        shape.vy *= 0.99;
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateShapes();
      shapesRef.current.forEach(drawShape);
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
      createShapes();
    };

    resizeCanvas();
    createShapes();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 hidden md:block"
      style={{ background: "transparent" }}
    />
  );
}
