function TabButtons({ tabs, activeTabId, onTabClick }) {
  return (
    <ul className="tab-list">
      {tabs.map((tab) => (
        <li key={tab.id}>
          <button
            type="button"
            className={tab.id === activeTabId ? "tab-button active" : "tab-button"}
            aria-current={tab.id === activeTabId ? "true" : undefined}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TabButtons;
