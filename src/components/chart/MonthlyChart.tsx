import React from 'react'
import { ChartCard } from 'components/index'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { styled } from 'styled-components'

ChartJS.register(CategoryScale, LinearScale, BarElement)

export const MonthlyChart = React.memo(() => {
  const top3Categories = ['식비', '여가', '쇼핑']
  const data = {
    labels: top3Categories,
    datasets: [
      {
        label: '지출 금액',
        data: top3Categories.map((c, index) => 100000 * (index + 2)),
        backgroundColor: [
          'rgba(227, 65, 100, 0.5)',
          'rgba(30, 96, 162, 0.5)',
          'rgba(92, 243, 122, 0.5)'
        ],
        maxBarThickness: 40,
        offset: 100
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
            <h3>지출 TOP 3 카테고리</h3>
            <BarWapper>
              <Bar
                updateMode="resize"
                options={{
                  maintainAspectRatio: true,
                  aspectRatio: 1,
                  responsive: true,
                  scales: {
                    y: {
                      max: 1000000,
                      ticks: {
                        stepSize: 10000,
                        callback: value => {
                          return `${value.toLocaleString()}원`
                        }
                      },
                      beginAtZero: true
                    }
                  },
                  layout: {
                    padding: {
                      left: 0,
                      top: 20,
                      right: 0,
                      bottom: 20
                    }
                  },
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
                }}
                data={data}
              />
            </BarWapper>
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
const BarWapper = styled.div``
