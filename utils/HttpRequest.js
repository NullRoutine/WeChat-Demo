const httpRequest = (method, requestObj = {}) => {
  if (requestObj.showLoading === undefined) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
  }
  var params = requestObj.params;
  var url = requestObj.url;
  var header = requestObj.header;
  let ContentType
  if (header == 0 || header == undefined) { //请求头类型为0用json
    ContentType = 'application/json';
  } else if (header == 1) {
    ContentType = 'application/x-www-form-urlencoded';
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      timeout: 10000,
      method: method,
      dataType: 'json',
      headers: {
        "content-type": ContentType
      },
      complete: res => {
        console.log('请求结果', res)
        if (requestObj.showLoading === undefined) {
          wx.hideLoading()
        }
        if (res.statusCode >= 200 && res.statusCode < 300) {
          let responseData = res.data
          //这里自己处理
          resolve(responseData.result)
          // if (responseData.success) {

          // } else {
          //   reject(responseData.message);
          //   setTimeout(() => {
          //     getApp().toast(responseData.message)
          //   }, 200);
          // }
        } else {
          setTimeout(() => {
            getApp().toast(res.errMsg)
          }, 200);
          reject(res)
        }
      }
    })
  })
}
//GET请求
 const GET = (requestHandler) => {
  return httpRequest('GET', requestHandler);
}
//POST请求
 const POST = (requestHandler) => {
  return httpRequest('POST', requestHandler);
}
module.exports = {
  get: GET,
  post: POST,
}