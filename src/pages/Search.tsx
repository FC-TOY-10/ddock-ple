import React from 'react'
import { DateFilterTab, CategoryFilter } from 'components/index'
import { styled } from 'styled-components'

export const Search = () => {
  const onSelectDateFilter = (startDate: string, endDate: string) => {
    console.log(startDate, endDate)
  }

  return (
    <SearchWrapper>
      <h1>검색</h1>
      <DateFilterTab onSelectDateFilter={onSelectDateFilter} />
      <CategoryFilter />
    </SearchWrapper>
  )
}

const SearchWrapper = styled.main`
  width: 100%;
  padding: 20px;

  h1 {
    font-size: 24px;
    font-weight: 700;
  }
`
