import { ArrowDown } from "lucide-react";

// HeroSection: 랜딩 페이지 맨 위(히어로) 영역을 그리는 컴포넌트
export const HeroSection = () => {
  return (
    // <section> : 의미론적으로 독립적인 영역(히어로 섹션)
    <section
      id="hero" // 페이지 내 이동(앵커)용 아이디. #hero로 스크롤 이동 가능
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
      // relative           : 안쪽에 배경/장식용 absolute 요소를 둘 때 기준이 되는 포지션
      // min-h-screen       : 화면 높이(100vh)만큼 최소 높이 확보 → 첫 화면을 꽉 채움
      // flex flex-col      : 플렉스 컨테이너 + 세로 방향 배치
      // items-center       : 가로(교차 축) 가운데 정렬
      // justify-center     : 세로(주 축) 가운데 정렬
      // px-4               : 좌우 패딩 (1rem)으로 양 옆 여백 확보
    >
      {/* 컨텐츠를 가운데로 모으고, 최대 폭을 제한하여 가독성 확보 */}
      <div className="container max-w-4xl mx-auto text-center z-10"
        // container  : 반응형 최대폭/패딩이 적용되는 Tailwind 컨테이너(설정에 따라 동작)
        // max-w-4xl  : 최대 폭을 약 896px로 제한
        // mx-auto     : 좌우 마진 auto → 블록 요소를 수평 가운데 정렬
        // text-center : 안쪽 텍스트/인라인 요소를 가운데 정렬
        // z-10        : z-index:10. (겹치는 요소 위로 올림; 보통 position이 있어야 효과적)
      >
        
        {/* 수직 간격 부여: 자식 요소들 사이에 1.5rem 간격(space-y-6) */}
        <div className="space-y-6">
          {/* 메인 제목: 히어로 메시지(스크린리더가 먼저 읽음) */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-normer leading-normal"
              // text-3xl      : 기본(모바일)에서 큰 글씨
              // md:text-4xl   : 화면이 md(≥768px) 이상일 때 더 크게
              // font-bold     : 굵은 글꼴
              // tracking-tight: 자간을 약간 좁게
          >
            {/* 1) 첫 줄: 처음엔 투명 → 페이드인으로 나타남 */}
            <span className="opacity-0 animate-fade-in">
               안녕하세요! </span>

            {/* 2) 두 번째 줄(포인트 색상): 약간 지연 후 페이드인 */}
            <span className="text-primary opacity-0 animate-fade-in delay-1"> 
              {/* {" "} : JSX에서 의도적인 공백 하나. 시각적 간격용(선택) */}
              {" "}
              김은혜 입니다! </span><br/>

            {/* 3) 세 번째 줄(영문 인사): 그라디언트 스타일 + 더 늦게 페이드인 */}
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
            {/* {" "} : 공백 하나. ml-2(왼쪽 여백)도 이미 있어 꼭 필요하진 않음 */}
              {" "}
              HI I'm Eun Hye </span>
          </h1>

          <p className = "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3"
                          //text-lg md:text-xl            기본 L, md 이상 XL로 글자 크기 업 
                          //text-muted-foreground         본문보다 한 톤 낮춘 보조 텍스트 색
                          //max-w-2xl mx-auto             중앙 정렬
                          //opacity-0                     처음엔 투명(애니메이션 준비)
                          //animate-fade-in-delay-3       3단계 지연 후 서서히 나타나기
          >           
            사람들에게 도움이 되는 서비스를 만들고 싶은 개발자입니다.<br/>
            코드를 통해 더 나은 세상을 만드는 것이 제 꿈입니다.<br/>
            사용자 경험을 먼저 생각하는 개발자로 성장하고 싶습니다.
          </p>

          <div className = "pt-4  opacity-0 animate-fade-in-delay-4"
                            //pt-4                    문단과 버튼 사이 간격
                            //opacity-0               처음엔 투명(애니메이션 준비)
                            //animate-fade-in-delay-4 4단계 지연으로 문단보다 늦게 등장
          >
            <a href="#project" /* 클릭 시 #project 앵커로 이동(스크롤) */
               className="cosmic-button"  /* 공통 버튼 스타일 클래스 */
            >
                {/* 버튼 라벨 */}
                View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
           //absolute                 부모를 기준으로 절대 위치 */
           //bottom-8                 아래에서 2rem(=32px) 떨어짐 */
           //left-1/2                 부모의 가로 가운데(50%) 지점에 배치 */
           //transform -translate-x-1/2  자신의 너비의 절반만큼 왼쪽으로 이동 → 정확히 중앙 정렬 */
           //flex flex-col          세로 방향으로 아이템 쌓기 
           //items-center           가로축(교차축) 가운데 정렬 
           //animate-bounce         상하로 통통 튀는 애니메이션 
      > 
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
