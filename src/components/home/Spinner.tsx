import styled, {css} from "styled-components";

// Spinner는 사용 금액에 대한 진행률 바를 생성
// progress: 진행률 , text: 진행률 안에 표시할 텍스트 
export const Spinner = ({ progress = 0, text ="0" }) => {
  
  // 원 형태의 진행률 바를 생성하기 위한 변수들
  const radius = 45;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffsetValue = circumference - (progress / 100) * circumference;
  
  return (
    <SpinnerContainer>
      <SpinnerSVG viewBox="0 0 100 100">
        <SpinnerBackground cx="50" cy="50" r={radius} strokeWidth={strokeWidth} />
        <SpinnerCircle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDashoffset={strokeDashoffsetValue}
          strokeDasharray={circumference}
        />
      </SpinnerSVG>
      <SpinnerLabelText>사용 금액</SpinnerLabelText>
      <SpinnerText>{text}</SpinnerText>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
`;

const SpinnerSVG = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

const SpinnerBackground = styled.circle`
  fill: none;
  stroke: #eee;
  stroke-width: 10px;
`;

const SpinnerCircle = styled.circle`
  fill: none;
  stroke: #A68BFC;
  stroke-width: 10px;
  ${({ circumference }) => css`
    stroke-dasharray: ${circumference};
  `}
  stroke-opacity: 0.8;
  transition: stroke-dashoffset 0.35s;
`;

const SpinnerText = styled.span`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  white-space: nowrap;
`;

const SpinnerLabelText = styled.span`
  position: absolute;
  top: 28%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  
`;