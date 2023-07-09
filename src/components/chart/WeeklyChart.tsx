import React from 'react'
import { ChartCard } from 'components/index'
import { styled } from 'styled-components'

export const WeeklyChart = React.memo(() => {
  return (
    <Container>
      <ChartCard />
    </Container>
  )
})

const Container = styled.div`
  width: 100%;
  padding: 20px 24px;
`
