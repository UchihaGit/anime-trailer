let timer;
export const debounce = (func) => {
  // let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(null, args);
    }, 500);
  };
};
