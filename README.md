# react-to-do-list
一、环境搭建
1、需要软件：python、node
2、构建项目
    在控制台中输入`npm init`，创建一个package.json文件，这个文件类似于pom.xml,用来描述需要的依赖库
3、安装需要的依赖库

>npm install webpack webpack-dev-server babel --save-dev
npm install react react-dom babel-loader less-loader css-loader style-loader url-loader file-loader babel-preset-es2015 babel-preset-react react-hot-loader jquery eslint eslint-plugin-react --save-dev

>--save-dev 会把下载包的相关信息写到package.json的devDependencies里面方便以后发布，其他人使用的时候只需要npm install就可以把相关的依赖下载到当前的项目里面。
在package.json里面包的版本之前的^表示可以安装类似2.x.x版本的组件但是不能安装3.x.x版本的软件
在package.json里面包的版本之前的~表示可以安装2.1.x的软件不能安装2.3.x的软件



#按照这篇来做http://www.jianshu.com/p/4df92c335617

##有些地方还需要改动
  1.需要全局安装webpack 和 webpack-dev-server
  >sudo npm install -g webpack-dev-server
  >sudo npm install -g webpack

  2.babel可能需要重新安装
    npm uninstall babel --save-dev
    npm install babel-loader babel-core --save-dev
    并在webpack.config.js中修改 loader的名称，否则会报错，改为如下：
>     module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
   3.webpack-dev-server装好后，在webpack.config.js的devServer中去掉colors和process两项，否则会报错
    报错信息如下：
>dee >>> webpack-dev-server                                       17-10-28 15:37
    Invalid configuration object. webpack-dev-server has been initialised using a configuration object that does not match the API schema.
 -   configuration has an unknown property 'process'. These properties are valid:
    object { hot?, hotOnly?, lazy?, bonjour?, host?, allowedHosts?, filename?, publicPath?, port?, socket?, watchOptions?, headers?, clientLogLevel?, overlay?, progress?, key?, cert?, ca?, pfx?, pfxPassphrase?, requestCert?, inline?, disableHostCheck?, public?, https?, contentBase?, watchContentBase?, open?, useLocalIp?, openPage?, features?, compress?, proxy?, historyApiFallback?, staticOptions?, setup?, before?, after?, stats?, reporter?, noInfo?, quiet?, serverSideRender?, index?, log?, warn? }

>dee >>> webpack-dev-server                                       17-10-28 15:38
Invalid configuration object. webpack-dev-server has been initialised using a configuration object that does not match the API schema.
 - configuration has an unknown property 'colors'. These properties are valid:
   object { hot?, hotOnly?, lazy?, bonjour?, host?, allowedHosts?, filename?, publicPath?, port?, socket?, watchOptions?, headers?, clientLogLevel?, overlay?, progress?, key?, cert?, ca?, pfx?, pfxPassphrase?, requestCert?, inline?, disableHostCheck?, public?, https?, contentBase?, watchContentBase?, open?, useLocalIp?, openPage?, features?, compress?, proxy?, historyApiFallback?, staticOptions?, setup?, before?, after?, stats?, reporter?, noInfo?, quiet?, serverSideRender?, index?, log?, warn? }
