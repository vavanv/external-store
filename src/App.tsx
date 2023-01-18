import { useEffect } from "react";
import { useStore } from "./createStore";
import { store } from "./store";

function App() {
  useEffect(() => {
    store.setState({
      name: "my name",
      number: 33,
      location: { name: "My Name", count: 40 },
    });
  }, []);

  const DisplayCount = () => <div>{useStore(store).location.count}</div>;

  const DisplayNumber = () => <div>{useStore(store).number}</div>;

  const onClickCount = () => {
    const state = store.getState();
    store.setState({
      ...state,
      location: { ...state.location, count: state.location.count + 1 },
    });
  };
  const onClickNumber = () => {
    const state = store.getState();
    store.setState({
      ...state,
      number: state.number + 1,
      location: { ...state.location },
    });
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: 600,
          gap: "1rem",
        }}
      >
        <DisplayCount />
        <DisplayNumber />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: 600,
          gap: "1rem",
        }}
      >
        <button id="count" onClick={onClickCount}>
          CLICK COUNT
        </button>
        <button id="count" onClick={onClickNumber}>
          CLICK NUMBER
        </button>
      </div>
    </>
  );
}

export default App;
