# management-empty

借鉴了一些开源项目的代码和 UI，旨在快速搭建简易 VUE 项目，集成了登陆、注册、路由、状态管理、API 接口请求、忘记密码、返回上一页、UI 主题等功能。

后期可能会新增一些图表、表格、表单、上传的组件，以及 UI 主题切换、路由面包屑等功能。

## Project setup

```
yarn
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your tests

```
yarn test
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 关于接口请求
项目中使用了axios，封装在/plugins/axios中，使用plugins/request封装一层，方便集中处理一些事件和统一传参。

在使用时先在api/下根据业务模块新建文件，将相关请求集中放到一起，把function暴露给外部，在业务组件中引用。参考api/user.js

### 样式
在styles/目录下定义了reset和一些基础样式，比如flex,float等，已经在main.js中引入了。在组件中直接使用即可，也可自行扩展。

### 常用utils
在src/util中存放了一些常用的扩展函数和业务，比如storage、cookie、字符串操作、正则操作等。

### 页面及组件views
在views中存放所有模块和页面组件，除了一些公用的页面，比如404、login,根据业务新建模块目录，比如order。

- 建议采用moduleName/index.vue的文件目录，在router中按需加载引入也可以直接引入**/**/moduleName。
- 子组件在index.vue同级新建components/目录，存放对应组件
- 对于一些层级比较深或者多模块多组件复用的情况，可以新建公共组件components/，比如订单模块的通用目录
- 公用的代码抽离合并到公共目录，比如order/consts.js存放订单模块相关的变量配置等

<font color="#f30">**所有组件名称统一使用大驼峰命名，包括components/下所有的组件,文件夹名称采用小写短横线连接，尽量使用一个单词**</font>