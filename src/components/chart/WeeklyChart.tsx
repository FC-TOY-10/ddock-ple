import React from 'react'
import { ChartCard } from 'components/index'
import { styled } from 'styled-components'

export const WeeklyChart = React.memo(() => {
  return (
    <Container>
      <ChartCard />
      <AnalyzeBox>
        <Box>
          <div className="inner">1</div>
        </Box>
        <Box>
          <div className="inner">2</div>
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

    padding: 10px;
    border-radius: 24px;
    background-color: #2f2f2f;
    color: var(--color-white);
  }
`
