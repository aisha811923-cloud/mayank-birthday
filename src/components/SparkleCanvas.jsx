import React, { useEffect, useRef } from 'react';

export default function SparkleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Neon Pink (#FF2E93) & Electric Cyan (#00D2FF) Palette
    const colors = ['#FF2E93', '#00D2FF', '#E040FB', '#FFFFFF', '#38BDF8'];
    const count = Math.min(Math.floor((width * height) / 16000), 55);

    class Stardust {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 20;
        this.size = Math.random() * 2.2 + 0.8;
        this.speedY = Math.random() * 0.45 + 0.2;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.6 + 0.2;
        this.pulse = Math.random() * 0.02 + 0.008;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.alpha += this.pulse;

        if (this.alpha > 0.85 || this.alpha < 0.2) {
          this.pulse = -this.pulse;
        }

        if (this.y < -15 || this.x < -15 || this.x > width + 15) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
        ctx.shadowBlur = this.size * 5;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    const particles = Array.from({ length: count }, () => new Stardust());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
