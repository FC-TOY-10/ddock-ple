import { useCallback, useState } from 'react'
import { ChartTab } from 'components/chart'
import { chartTabs } from 'constants/index'

export const Chart = () => {
  const [selectedTab, setSelectedTab] = useState<string>(chartTabs[0].title)

  const handleTabChanged = useCallback((title: string) => {
    setSelectedTab(title)
  }, [])

  return (
    <div>
      <ChartTab
        selectedTab={selectedTab}
        onClickTab={handleTabChanged}
      />
    </div>
  )
}
