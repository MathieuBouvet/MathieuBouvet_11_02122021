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
  const classList = args.flatMap(arg => {
    if (typeof arg === "object") {
      return objectToClassList(arg);
    }
    return arg;
  });

  return classList.join(" ");
}

export default cx;
