import { useEffect, useState } from "react";

// ⭐ 배경에 별(stars)과 유성(meteors)을 그려주는 컴포넌트
export const StarBackground = () => {
   // 별 정보를 담는 상태 배열 (각 별의 위치/크기/투명도/속도 등)
  const [stars, setStars] = useState([]);
  // 유성 정보를 담는 상태 배열 (각 유성의 위치/크기/지연/속도 등)
  const [meteors, setMeteors] = useState([]);

 // 컴포넌트가 처음 실행될 때 실행되는 부분
  useEffect(() => {
    generateStars(); // 처음 로드 시 현재 화면 크기에 맞춰 별 생성
    generateMeteors(); // 처음 로드 시 유성 생성

     // 창 크기가 바뀔 때마다 별을 다시 그려서 해상도/레이아웃 변화에 대응
    const handleResize = () => {
      generateStars(); // 창 크기 변경 시 별 재생성
    };

    // 리사이즈 이벤트 연결
    window.addEventListener('resize', handleResize)

    // 컴포넌트가 화면에서 사라질 때(언마운트) 이벤트 제거(메모리 누수 방지)
    return () => window.removeEventListener("resize", handleResize);

  }, []); // 의존성 배열이 빈 배열이므로 최초 1회만 실행

    // 🌟 별 여러 개를 만들어 상태에 저장하는 함수
  const generateStars = () => {
    // 화면 넓이*높이 기준으로 별 개수 계산(해상도 클수록 별을 더 많이)
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000  //1만 픽셀당 별 1개 정도
    );
    const newStars = [];  // 새로 만들 별들을 담을 배열
    for (let i = 0; i < numberOfStars; i++) { // 계산된 개수만큼 반복
      newStars.push({
        id: i,                                      // 유성 고유 번호
        size: Math.random() * 3 + 1,                // 크기 (1~4px)
        x: Math.random() * window.innerWidth,       // 가로 위치
        y: Math.random() * window.innerHeight,      // 세로 위치
        opacity: Math.random() * 0.5 + 0.5,         // 투명도 (0.5~1)
        animationDuration: Math.random() * 4 + 2,   // 깜빡임 속도 (2~6초)
      });
    }
    setStars(newStars);  // 만들어진 별들을 상태에 반영 → 화면 렌더링 갱신
  };

  // ☄️ 유성 여러 개 만들기
  const generateMeteors = () => {
    const numberOfMeteors = 5;   // 유성 개수(원하는 밀도에 맞게 숫자 조절)
    const newMeteors = [];      // 새로 만들 유성들을 담을 배열
    for (let i = 0; i < numberOfMeteors; i++) { // 지정 개수만큼 반복
      newMeteors.push({
        id: i,                                          // 유성 고유 번호
        size: Math.random() * 2 + 1,                    // 유성 굵기/길이 기준 크기: 1 ~ 3
        x: Math.random() * window.innerWidth,           // 시작 가로 위치
        y: Math.random() * (window.innerHeight * 0.3),  // 시작 세로 위치: 화면 윗부분 30%만 사용
        delay: Math.random() * 1.5,                     // 애니메이션 지연(초): 0 ~ 1.5
        animationDuration: Math.random() * 3 + 3,       // 애니메이션 재생시간(초): 3 ~ 6
      });
    }
    setMeteors(newMeteors);    // 만들어진 유성들을 상태에 반영 → 화면 렌더링 갱신
  };


  // 실제로 별과 유성을 화면에 그리는 부분(JSX 반환)
  return (
    // 화면 전체를 덮어서 뿌려준다
    // fixed → 스크롤 내려도 항상 같은 위치에 있음
    // inset-0 → 위, 아래, 왼쪽, 오른쪽 전부 0 (즉, 화면 가득)
    // overflow-hidden → 박스 밖으로 튀어나간 건 안 보이게
    // pointer-events-none → 이 박스 위에 마우스 클릭해도 반응 안 함
    // z-0 → 제일 뒤에 깔림 (다른 내용 위에 안 덮어버림)
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* ⭐ 별들을 하나씩 그리기: stars 배열을 순회하면서 div 생성 */}
      {stars.map((star) => ( 
        // 각 별은 작고 둥근 점처럼 보이는 div
        <div
          key={`star-${star.id}`}  // React가 목록을 렌더링할 때 필요한 고유 key
          className="star animate-pulse-subtle"   // CSS 클래스(별 모양/반짝임 애니메이션)
          style={{
            width: star.size + "px",    // 별 너비(px)
            height: star.size + "px",   // 별 높이(px)
            left: star.x + "px",        // 화면에서의 가로 위치(px)
            top: star.y + "px",         // 화면에서의 세로 위치(px)
            opacity: star.opacity,      // 별의 투명도(밝기 느낌)
            animationDuration: star.animationDuration + "s",  // 반짝임 속도(초 단위)
            position: "absolute",   // 절대 위치로 정확한 좌표에 배치
          }}
        />
      ))}


      {/* ☄️ 유성들을 하나씩 그리기: meteors 배열을 순회하면서 div 생성 */}
      {meteors.map((meteor) => (
        // 유성은 얇고 긴 선(꼬리)처럼 보이게 스타일링
        <div
          key={meteor.id}   // 각 유성의 고유 key
          className="meteor animate-meteor"   // CSS 클래스(유성 궤적/이동 애니메이션)
          style={{
            width: meteor.size * 50 + "px",   // 유성 길이(px): size에 비례해 길게
            height: meteor.size * 0.5 + "px",   // 유성 두께(px): size에 비례해 얇게
            left: meteor.x + "px",    // 시작 가로 위치(px)
            top: meteor.y + "px",     // 시작 세로 위치(px) - 화면 위쪽
            animationDelay: meteor.delay,    // 시작 지연(초) — 필요 시 + "s"로 단위 명시
            animationDuration: meteor.animationDuration + "s",   // 이동 시간(초)
            position: "absolute", // 절대 위치 배치
          }}
        />
      ))}
    </div>
  );
};
