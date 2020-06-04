function logger(store) {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      let result = next(action);
      console.log('next state', store.getState());
      return result;
    };
  };
}

export default logger;
