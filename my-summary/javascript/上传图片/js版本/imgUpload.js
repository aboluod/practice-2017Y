function upload (e, _this, paramsData) {
	var files = e.target.files || e.dataTransfer.files
	if (!files.length) return
	var picValue = files[0]
	imgPreview(picValue, _this, paramsData)
	return
}

function imgPreview (file, _this, paramsData) {
  // var self = this
  var Orientation
  // 去获取拍照时的信息，解决拍出来的照片旋转问题
  EXIF.getData(file, function () {
    Orientation = EXIF.getTag(this, 'Orientation')
  })
  // 看支持不支持FileReader
  if (!file || !window.FileReader) return

  if (/^image/.test(file.type)) {
    // 创建一个reader
    var reader = new FileReader()
    // 将图片2将转成 base64 格式
    reader.readAsDataURL(file)
    // 读取成功后的回调
    reader.onloadend = function () {
      var result = this.result
      var img = new Image()
      img.src = result
      // 判断图片是否大于100K,是就直接上传，反之压缩图片
      if (this.result.length <= (100 * 1024)) {
        // self.headerImage = this.result
        // self.files.push(this.result)
        // self.postImg()

         var data = this.result;
         changePageDom(_this, paramsData, data)
      } else {
        img.onload = function () {
          var data = compress(img, Orientation)
          // self.headerImage = data
          // self.files.push(data)
          // self.postImg()

          changePageDom(_this, paramsData, data)
        }
      }
    }
  }
}

// 图片旋转
function rotateImg (img, direction, canvas) {
  // 最小与最大旋转方向，图片旋转4次后回到原方向
  const minstep = 0
  const maxstep = 3
  if (img === null) return
  // img的高度和宽度不能在img元素隐藏后获取，否则会出错
  var height = img.height
  var width = img.width
  var step = 2
  if (step == null) {
    step = minstep
  }
  if (direction === 'right') {
    step++
    // 旋转到原位置，即超过最大值
    step > maxstep && (step = minstep)
  } else {
    step--
    step < minstep && (step = maxstep)
  }
  // 旋转角度以弧度值为参数
  var degree = step * 90 * Math.PI / 180
  var ctx = canvas.getContext('2d')
  switch (step) {
    case 0:
      canvas.width = width
      canvas.height = height
      ctx.drawImage(img, 0, 0)
      break
    case 1:
      canvas.width = height
      canvas.height = width
      ctx.rotate(degree)
      ctx.drawImage(img, 0, -height)
      break
    case 2:
      canvas.width = width
      canvas.height = height
      ctx.rotate(degree)
      ctx.drawImage(img, -width, -height)
      break
    case 3:
      canvas.width = height
      canvas.height = width
      ctx.rotate(degree)
      ctx.drawImage(img, -width, 0)
      break
  }
}

// 图片压缩
function compress (img, Orientation) {
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d')
  // 瓦片canvas
  var tCanvas = document.createElement('canvas')
  var tctx = tCanvas.getContext('2d')
  // var initSize = img.src.length
  var width = img.width
  var height = img.height
  // 如果图片大于四百万像素，计算压缩比并将大小压至400万以下
  var ratio
  if ((ratio = width * height / 4000000) > 1) {
    ratio = Math.sqrt(ratio)
    width /= ratio
    height /= ratio
  } else {
    ratio = 1
  }
  canvas.width = width
  canvas.height = height
  // 铺底色
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  // 如果图片像素大于100万则使用瓦片绘制
  var count
  if ((count = width * height / 1000000) > 1) {
    count = ~~(Math.sqrt(count) + 1) // 计算要分成多少块瓦片
    // 计算每块瓦片的宽和高
    var nw = ~~(width / count)
    var nh = ~~(height / count)
    tCanvas.width = nw
    tCanvas.height = nh
    for (var i = 0; i < count; i++) {
      for (var j = 0; j < count; j++) {
        tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh)
        ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh)
      }
    }
  } else {
    ctx.drawImage(img, 0, 0, width, height)
  }
  // 修复ios上传图片的时候 被旋转的问题
  if (Orientation !== '' && Orientation !== 1) {
    switch (Orientation) {
      case 6:// 需要顺时针（向左）90度旋转
        this.rotateImg(img, 'left', canvas)
        break
      case 8:// 需要逆时针（向右）90度旋转
        this.rotateImg(img, 'right', canvas)
        break
      case 3:// 需要180度旋转
        this.rotateImg(img, 'right', canvas) // 转两次
        this.rotateImg(img, 'right', canvas)
        break
    }
  }
  // 进行最小压缩
  var ndata = canvas.toDataURL('image/jpeg', 0.1)
  tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0
  return ndata
}

// 图片处理完成后对页面dom的操作
function changePageDom (_this, paramsData, data) {
  var btn = $(_this).parent();
  btn.siblings(".upload-img").find(".bgimg").css("background-image", "url(" + data + ")");
  $(_this).siblings("input[type=hidden]").val(paramsData.id);
  $(_this).parents(".upld-picture").siblings(".icon_close").attr("img-id",paramsData.id).show(); 
  btn.siblings(".upload-img").children(".loading").hide();
  $(_this).parents(".upld-picture").siblings(".img-bg").hide();  
}