import React from 'react'
import { styled } from 'styled-components'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import moment, { Moment } from 'moment'
import 'moment/locale/ko'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false
  },
  stacked: false,
  plugins: {},
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const
    },
    y1: {
      type: 'linear' as const,
      display: false,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false
      }
    }
  }
}

export const ChartCard = React.memo(() => {
  const startDay = moment().startOf('week')

  const weekOfMonth = (m: Moment) => m.week() - moment(m).startOf('month').week() + 1
  const nowDate = moment().utc(true)

  const labels = [
    `${startDay.format('MM-DD').toString()}`,
    `${startDay.day(1).format('MM-DD').toString()}`,
    `${startDay.day(2).format('MM-DD').toString()}`,
    `${startDay.day(3).format('MM-DD').toString()}`,
    `${startDay.day(4).format('MM-DD').toString()}`,
    `${startDay.day(5).format('MM-DD').toString()}`,
    `${startDay.day(6).format('MM-DD').toString()}`
  ]

  // 임시 데이터
  const data = {
    labels,
    datasets: [
      {
        label: '수입',
        data: labels.map(() => Math.random() * 100000),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y'
      },
      {
        label: '지출',
        data: labels.map(() => Math.random() * 100000),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1'
      }
    ]
  }

  return (
    <Card>
      <h4>{`길동님의 ${nowDate.format('M월 ')} ${weekOfMonth(nowDate)}주차`}</h4>
      <p className="total">수입 200,000 원 지출 120,000 원</p>

      <Line
        options={options}
        data={data}
      />
    </Card>
  )
})

const Card = styled.div`
  border-radius: 24px;
  width: 100%;
  background-color: #2f2f2f;
  padding: 20px 20px 40px 20px;

  h4 {
    font-size: 16px;
    color: #eee;
  }

  p.total {
    margin-top: 16px;
    font-size: 20px;
    font-weight: 700;
    color: var(--color-white);
    margin-bottom: 40px;
  }
`
