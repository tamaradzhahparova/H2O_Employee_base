import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import s from './MainContent.module.scss'
import {ArrowLeft, ArrowRight} from "../../Icons/Arrows";
import Profile from "../Profile/Profile";
import avatar from '../../images/avatar.png'
import cn from 'classnames'
import {useState} from "react";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState<number>(1)

  return (
    <main className={s.mainContent}>
      <Tabs defaultIndex={activeTab} selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <header className={s.header}>
          <div className={s.headerLeft}>
            <div className={s.buttons}>
              <button className={cn(s.button, s.buttonLeft)}
                      onClick={() => setActiveTab(prev => prev === 0 ? 0 : prev - 1)}>
                <ArrowLeft/>
              </button>
              <button className={cn(s.button, s.buttonRight)} onClick={() => setActiveTab(prev => prev === 3 ? 3 : prev + 1)}>
                <ArrowRight/>
              </button>
            </div>
            <div className={s.tabWrapper}>
              <TabList className={s.tablist}>
                <Tab className={s.tab}>База анкет сотрудников</Tab>
                <Tab className={s.tab}>Общая база сотрудников</Tab>
                <Tab className={s.tab}>База сотрудников</Tab>
                <Tab className={s.tab}>Календарь сотрудников</Tab>
              </TabList>
            </div>

          </div>
          <Profile avatar={avatar} name='Kristina 🐰' position='менеджер продаж'/>
        </header>


        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    </main>
  )
}

export default MainContent