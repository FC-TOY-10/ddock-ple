import { useState } from 'react'
import { chartCategory } from 'constants/index'
import { DateFilterTab, CategoryFilter } from 'components/index'
import { styled } from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

const categories = chartCategory.map(c => c.category)

interface ISearchQuery {
  startDate: string | null
  endDate: string | null
  categories: string[]
}

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState<ISearchQuery>({
    startDate: null,
    endDate: null,
    categories: categories
  })
  const [selectedCategories, setSelectedCategories] = useState(categories)

  const onSelectDateFilter = (startDate: string, endDate: string) => {
    setSearchQuery({ startDate: startDate, endDate: endDate, categories: selectedCategories })
  }

  const onChangeSelectedCategories = (categories: string[]) => {
    setSelectedCategories(categories)
    const { startDate, endDate } = searchQuery
    setSearchQuery({ startDate: startDate, endDate: endDate, categories: categories })
  }

  const onClickSearch = () => {
    console.log(searchQuery)
  }

  return (
    <SearchWrapper>
      <h1>검색</h1>
      <DateFilterTab onSelectDateFilter={onSelectDateFilter} />
      <CategoryFilter
        selectedCategories={selectedCategories}
        onChangeSelectedCategories={onChangeSelectedCategories}
      />
      <ButtonWrapper>
        <SearchButton onClick={onClickSearch}>
          <AiOutlineSearch />
          검색
        </SearchButton>
      </ButtonWrapper>
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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const SearchButton = styled.button`
  margin-top: 40px;
  border-radius: 44px;
  padding: 0 30px;
  font-size: 20px;
  line-height: 44px;
  color: var(--color-white);
  background-color: #240fe0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
