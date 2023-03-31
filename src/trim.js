/**
 * 清除两端空格
 *
 * 说明：
 * vue 内置 v-model.trim 会直接阻止用户输入空格，而该 v-trim 则只清除两端空格
 *
 * 使用：
 * v-trim
 */
const trim = {
  inserted(el, binding, vnode) {
    const trim = (e) => {
      const { value } = e.target;
      let result = value;

      if (value) {
        result = value.replace(/^\s+|\s+$/gm, "");
      }

      if (vnode.data.model) {
        vnode.data.model.callback(result);
      } else {
        e.target.value = result;
      }
    };

    el.addEventListener("change", trim);
  },
};

export default trim;
