const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("hmState", serializedState);
  } catch (error) {
    // ignore write erros
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("hmState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export { saveState, loadState };    