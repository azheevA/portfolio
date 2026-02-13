import React, { useRef } from "react";

interface CardData {
  review: string;
}

interface GlowCardProps {
  card: CardData;
  index: number;
  children: React.ReactNode;
}

const GlowCard = ({ card, index, children }: GlowCardProps) => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const cardElement = cardRefs.current[index];
      if (!cardElement) return;

      const rect = cardElement.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      cardElement.style.setProperty("--start", (angle + 60).toString());
    };

  return (
    <div
      ref={(el) => {
        if (el) cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
