import { useState } from "react";
import "./App.css";
import TabButtons from "./Components/TabButtons.jsx";
import TabContent from "./Components/TabContent.jsx";
import { tabs } from "./tabs.js";

function App() {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Tabs Component with React</h1>
        <TabButtons
          tabs={tabs}
          activeTabId={activeTabId}
          onTabClick={setActiveTabId}
        />
      </header>
      <TabContent tab={activeTab} />
    </div>
  );
}

export default App;
