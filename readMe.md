## 总结小程序开发中遇到的各种问题以及代码示例
### 1.关于网络请求可以使用promise进行封装，可以通过下面代码嵌套请求
```
        return app.getHttpRequest().post({
          url: 'xxx',
          params: {

          },
        }).then(res=>{

        })
```
### 2.通用的弹框可以封装成自定义组件使用，参考testdialog

### 3.其他问题参考[这里](https://www.jianshu.com/p/09f357a65408)

### 4.关于动画创建以及使用参考testanim

