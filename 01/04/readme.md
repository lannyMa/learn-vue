## vue开发环境: 手动安装
```
npm init -y
npm install --save-dev webpack@3 webpack-dev-server@2 babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 css-loader style-loader less less-loader file-loader url-loader html-webpack-plugin vue vue-router vue-loader@13 vue-template-complier@2
```

## vue开发环境: 使用vue-cli自动初始化开发环境
```
npm install vue-cli -g
vue-init webpack blog
cd blog
npm i
npm run dev
```