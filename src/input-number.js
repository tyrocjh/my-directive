/**
 * 只允许输入数字（整数、小数）
 *
 * 使用：
 * 整数&小数    v-input-number
 * 整数         v-input-number.integer
 * 小数         v-input-number.float
 * 两位小数     v-input-number:2.float
 * 负数         v-input-number.minus
 * 负整数       v-input-number.integer.minus
 * 负小数       v-input-number.float.minus
 */
const inputNumber = {
  inserted(el, binding, vnode) {
    const { arg, modifiers } = binding;

    const isEmpty = (value) => {
      return value === "" || value === null || value === undefined;
    };

    const getDecimal = (value, limit) => {
      return Math.floor(value * Math.pow(10, limit)) / Math.pow(10, limit);
    };

    const getInteger = (value) => {
      if (modifiers.minus) {
        return value.replace(/[^\d-]/g, "").replace(/(\-\d*)(\-\d*)/g, "$1");
      }
      return value.replace(/[^\d]/g, "");
    };

    const getFloat = (value) => {
      if (modifiers.minus) {
        return value
          .replace(/[^\d.-]/g, "")
          .replace(/(\-.*)(\-.*)/g, "$1")
          .replace(/(\.\d*)(\.\d*)/g, "$1");
      }
      return value.replace(/[^\d.]/g, "").replace(/(\.\d*)(\.\d*)/g, "$1");
    };

    const formatNumber = (e) => {
      const { value } = e.target;
      let result = "";

      switch (e.type) {
        case "input":
          if (modifiers.integer) {
            result = getInteger(value);
          } else {
            result = getFloat(value);

            const decimal = result.toString().split(".")[1];
            if (!isNaN(arg) && decimal) {
              const limit = Number(arg);
              result =
                decimal.length > limit ? getDecimal(result, limit) : result;
            }
          }
          break;
        case "change":
          if (isEmpty(value)) {
            result = "";
          } else {
            result = modifiers.integer
              ? parseInt(value, 10)
              : parseFloat(value);
          }
          break;
        default:
          break;
      }

      if (vnode.data.model) {
        vnode.data.model.callback(result);
      } else {
        e.target.value = result;
      }
    };

    el.addEventListener("input", formatNumber);
    el.addEventListener("change", formatNumber);
  },
};

export default inputNumber;
