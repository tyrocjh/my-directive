# 前端工具库

这是一个使用 webpack 打包的 Vue 自定义指令库。

> 目的：让前端开发更高效，更专注于业务代码的编写

业务开发过程中，会经常用到`按钮权限控制`、`清空两端空格`、`限制数字输入`等常用方法，为避免不同项目多次复制粘贴的麻烦，这里统一封装，以提高开发效率。

## 使用方式

1. 使用 npm 安装:

```
npm install tyro-directive --save
```

2. 注册指令：

```
import Vue from 'vue';
import TyroDirective from "tyro-directive";

Vue.use(TyroDirective);
```

## 发布到 npm

```
npm run build // 先webpack打包类库，之后再发布
npm login // 登录
npm publish // 发布
```
