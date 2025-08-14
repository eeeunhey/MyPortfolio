import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars(); // 처음 렌더링될 때 한 번 실행
  }, []);

  const generateStars = () => {
    const total = Math.floor((window.innerWidth * window.innerHeight) / 10000);

    const newStars = [];
    for (let i = 0; i < total; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        // px 단위로 쓰고 있으므로 화면 크기 기준으로 뽑도록 수정
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2, 
      });
    }
    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "px",
            top: star.y + "px",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            //position: "absolute", // 위치 지정 (필요 최소)
          }}
        />
      ))}
    </div>
  );
};
