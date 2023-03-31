/**
 * 按钮权限控制
 *
 * 使用：
 * v-permission
 */
const permission = {
  inserted(el, binding, vnode) {
    let btnPermission = vnode.context.$route.meta.btnPermission;

    if (!btnPermission) {
      return;
    }
    !btnPermission.includes(binding.value) && el.parentNode.removeChild(el);
  },
};

export default permission;
