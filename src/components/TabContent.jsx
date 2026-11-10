function TabContent({ tab }) {
  return (
    <section className="tab-content">
      <h2>Content {tab.id}</h2>
      <p>{tab.content}</p>
    </section>
  );
}

export default TabContent;
