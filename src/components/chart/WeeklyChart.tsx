import React from 'react'
import { ChartCard } from 'components/index'
import { chartCategory } from 'constants/index'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { styled } from 'styled-components'
ChartJS.register(ArcElement, Tooltip)

export const WeeklyChart = React.memo(() => {
  const categoriesData = {
    labels: chartCategory.map(category => category.category),
    datasets: [
      {
        label: '지출 횟수',
        data: [30, 20, 4, 1, 3, 2, 6],
        backgroundColor: chartCategory.map(category => category.bgColor),
        borderColor: chartCategory.map(category => category.borderColor),
        borderWidht: 1
      }
    ]
  }
  return (
    <Container>
      <ChartCard />
      <AnalyzeBox>
        <Box>
          {/* 카테고리 별 분석 파이 */}
          <div className="inner">
            <h3>카테고리 별 지출 횟수</h3>
            <Doughnut
              data={categoriesData}
              options={{
                plugins: {
                  legend: {
                    display: false
                  }
                },
                layout: {
                  padding: {
                    left: 20,
                    top: 20,
                    right: 20,
                    bottom: 20
                  }
                }
              }}
            />
          </div>
        </Box>
        <Box>
          {/* 가장 큰 지출 항목 */}
          <div className="inner">
            <p>이번주는 지난주 대비</p>
            <p>
              지출이 <span className="percent">30%</span> 감소했어요!
            </p>

            <div>지출 금액이 가장 큰 내역은 ooo 입니다.</div>
          </div>
        </Box>
      </AnalyzeBox>
    </Container>
  )
})

const Container = styled.div`
  width: 100%;
  padding: 20px 24px;
`
const AnalyzeBox = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`
const Box = styled.div`
  position: relative;
  width: 100%; /* 원하는 너비 */

  &:before {
    content: '';
    display: block;
    padding-top: 100%; /* 1:1 비율 */
  }

  .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    padding: 20px;
    border-radius: 24px;
    background-color: #2f2f2f;
    color: var(--color-white);

    h3 {
      text-align: center;
    }

    p {
      font-size: 18px;
      text-align: center;
      margin-bottom: 20px;
    }

    span {
      font-size: 20px;

      &.percent {
        background-color: rgba(241, 17, 17, 0.3);
        padding: 4px;
      }

      &.highlight {
        color: red;
      }
    }
  }
`
