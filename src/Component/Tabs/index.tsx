import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReactTabs = () => {
  
  return (
    <div>
      <Tabs>
    <TabList>
      <Tab>onVegetables</Tab>
      <Tab>onLoream</Tab>
      <Tab>onLowFat</Tab>
      <Tab>onOrganic</Tab>
      <Tab></Tab>
    </TabList>

    
  </Tabs>
    </div>
  )
}

export default ReactTabs
