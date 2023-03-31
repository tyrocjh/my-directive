import inputNumber from "./input-number";
import permission from "./permission";
import trim from "./trim";

const directives = {
  "input-number": inputNumber,
  permission,
  trim,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
