import moment from 'moment'
import React, { useMemo, useState } from 'react'
import { chartCategory } from 'constants/index'
import { CategoryFilterModal } from 'components/index'
import { styled } from 'styled-components'

const categories = chartCategory.map(c => c.category)
export const CategoryFilter = React.memo(() => {
  const [selectedCategories, setSelectedCategories] = useState(categories)
  const [isOpen, setIsOpen] = useState(false)
  const openModalHandler = () => {
    setIsOpen(!isOpen)
  }

  const onChangeSelectedCategories = (categories: string[]) => {
    setSelectedCategories(categories)
  }

  return (
    <div>
      <CategoryWrapper>
        <p>카테고리</p>
        {selectedCategories.length === categories.length ? (
          <CategoryButton onClick={() => setIsOpen(true)}>전체 카테고리</CategoryButton>
        ) : (
          <CategoryButton onClick={() => setIsOpen(true)}>
            {selectedCategories.join(' / ')}
          </CategoryButton>
        )}
      </CategoryWrapper>
      {isOpen ? (
        <CategoryFilterModal
          selectedCategories={selectedCategories}
          onChangeSelectedCategories={onChangeSelectedCategories}
          onCloseModal={openModalHandler}
        />
      ) : null}
    </div>
  )
})

const CategoryWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  font-size: 18px;

  p {
    padding: 0 5px;
    line-height: 36px;
    color: #555;
  }
`

const CategoryButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: #2060ea;
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
`
