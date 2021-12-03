function objectToClassList(obj) {
  const classList = [];
  Object.entries(obj).forEach(([className, isPresent]) => {
    if (isPresent) {
      classList.push(className);
    }
  });
  return classList;
}

function cx(...args) {
  return args
    .flatMap(arg => {
      if (typeof arg === "object") {
        return objectToClassList(arg);
      }
      return arg;
    })
    .join(" ");
}

export default cx;
