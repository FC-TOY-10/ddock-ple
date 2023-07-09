import React from 'react'
import { styled } from 'styled-components'

export const ChartCard = React.memo(() => {
  return (
    <Card>
      <h4>길동님의 2023년 7월 2주차</h4>
      <p className="total">수입 200,000 원 지출 120,000 원</p>
      <div className="total"></div>
    </Card>
  )
})

const Card = styled.div`
  border-radius: 24px;
  width: 100%;
  min-height: 400px; // test style
  background-color: #2f2f2f;
  padding: 20px;

  h4 {
    font-size: 16px;
    color: #eee;
  }

  p.total {
    margin-top: 16px;
    font-size: 20px;
    font-weight: 700;
    color: var(--color-white);
  }
`
