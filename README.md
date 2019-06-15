# vue-cli-2-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# vue-cli

```sh
# 全局安装 vue-cli-3
# vue-cli-3
npm i -g @vue/cli
vue create vue-cli-3-admin

# vue-cli-3 兼容 vue-cli-2
# vue-cli-2
npm install -g @vue/cli-init
vue init webpack vue-cli-2-admin
```

## 使用 scss 编写代码要安装包

```sh
npm install node-sass sass-loader --save
```

## 自定义主题

安装主题

```sh
npm i element-theme --save-dev
```

安装白垩主题

```sh
npm i element-theme-chalk -D
```

生成配置文件

```sh
node_modules/.bin/et -i
```

编译主题

```sh
node_modules/.bin/et et

# 实时编译主题
node_modules/.bin/et et -w

# 指定目录
node_modules/.bin/et et -o src/theme
```

[MySql 下载地址](https://dev.mysql.com/downloads/file/?id=485812)

密码：Ghwn7nGaUw.M
