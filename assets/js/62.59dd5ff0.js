(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{485:function(t,s,a){"use strict";a.r(s);var n=a(24),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"outh2-0-支付宝接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outh2-0-支付宝接入"}},[t._v("#")]),t._v(" Outh2.0----支付宝接入")]),t._v(" "),a("h3",{attrs:{id:"_1-支付宝开放平台注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-支付宝开放平台注册"}},[t._v("#")]),t._v(" 1.支付宝开放平台注册")]),t._v(" "),a("ul",[a("li",[t._v("https://openhome.alipay.com/platform/home.htm")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200920012734750.png#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("选择支付接入后根据提示依次注册")])]),t._v(" "),a("li",[a("p",[t._v("注册后等待审核,在审核期间可以使用沙盒实验室进行开发")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200920012749264.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("ul",[a("li",[t._v("点击后找到app_id")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200920012801485.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("ul",[a("li",[t._v("配置回调页面")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200920012812759.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在密钥中粘入公钥,保存生成支付宝公钥")]),t._v(" "),a("blockquote",[a("p",[t._v("注:生成公钥的方法:")]),t._v(" "),a("p",[a("code",[t._v("第一种方式")]),t._v(":")]),t._v(" "),a("p",[t._v("根据支付宝提供的接入文档,下载相应的软件生成")]),t._v(" "),a("p",[a("code",[t._v("第二种方式")]),t._v(":")]),t._v(" "),a("p",[t._v("1.安装python-alipay-sdk")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-alipay-sdk\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("2.生成秘钥文件app_private_key.pem  和 app_public_key.pem")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("openssl\nOpenSSL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" genrsa -out app_private_key.pem "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#私钥")]),t._v("\nOpenSSL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" rsa -in app_private_key.pem -pubout -out app_public_key.pem               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#导出公钥")]),t._v("\nOpenSSL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\napp_private_key.pem   app_public_key.pem\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("将app_public_key.pem中内容粘进去就可生成支付宝公钥")])])]),t._v(" "),a("li",[a("p",[t._v("在沙箱环境中可以看到,有些功能不需签约就可以开发")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020092001283111.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"_2-开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-开发"}},[t._v("#")]),t._v(" 2.开发")]),t._v(" "),a("blockquote",[a("p",[t._v("参考文档 :")]),t._v(" "),a("p",[t._v("1.第三方登录文档:[https://opendocs.alipay.com/open/20160728150111277227#SDK%20%E6%8E%A5%E5%85%A5%E8%AF%B4%E6%98%8E](https://opendocs.alipay.com/open/20160728150111277227#SDK 接入说明)")]),t._v(" "),a("p",[t._v("2.支付宝SDK文档:https://opendocs.alipay.com/open/54/103419")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("setting.py")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 支付宝登录数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#根据文档,设置url拼接网址")]),t._v("\nALI_URL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://openauth.alipaydev.com/oauth2/appToAppAuth.htm?'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#app_id")]),t._v("\nALI_APP_ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxxxxxx'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#回调网址")]),t._v("\nALI_REDIRCT_URL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://192.168.31.38/ali_callback.html'")]),t._v("\nALI_SERVER_URL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://openapi.alipaydev.com/gateway.do'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#支付宝公钥私钥")]),t._v("\nALIPAY_KEY_DIRS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BASE_DIR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"config"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("获取拼接网址")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ali_url_view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        ali_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ALI_URL\n        ali_app_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ALI_APP_ID\n        redirect_uri "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ALI_REDIRCT_URL\n        data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ali_app_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redirect_uri"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redirect_uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ali_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" urlencode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" JsonResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("访问拼接后的网址,登录成功后会自动跳转到回调页面并且会在url中返回一个code")])]),t._v(" "),a("li",[a("p",[t._v("将code通过阿里SDK发送到支付宝进行验证")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_ali_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ALI_APP_ID\n    app_private_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ALIPAY_KEY_DIRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app_private_key.pem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    alipay_public_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" get_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ALIPAY_KEY_DIRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alipay_public_key.pem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    server_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ALI_SERVER_URL\n    alipay_client_config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AlipayClientConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    alipay_client_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" server_url\n    alipay_client_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app_id\n    alipay_client_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app_private_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app_private_key\n    alipay_client_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alipay_public_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alipay_public_key\n    client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DefaultAlipayClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alipay_client_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    model "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AlipayOpenAuthTokenAppModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grant_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authorization_code"')]),t._v("\n    model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" code\n    request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AlipayOpenAuthTokenAppRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("biz_model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        response_content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AlipayTradeCreateResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parse_response_content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response_content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("blockquote",[a("p",[t._v("注:使用支付宝SDK方法:可参考SDK文档")]),t._v(" "),a("p",[t._v("1.安装:pip install alipay-sdk-python==3.3.398")]),t._v(" "),a("p",[t._v("2.根据参考文档中给定的接口"),a("a",{attrs:{href:"https://opendocs.alipay.com/apis/api_9/alipay.open.auth.token.app",target:"_blank",rel:"noopener noreferrer"}},[t._v("alipay.open.auth.token.app"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200920012851771.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})])]),t._v(" "),a("blockquote",[a("p",[t._v("3.结合接口文档中的"),a("a",{attrs:{href:"https://opendocs.alipay.com/apis/api_9/alipay.open.auth.token.app",target:"_blank",rel:"noopener noreferrer"}},[t._v("java示例"),a("OutboundLink")],1),t._v("与SDK文档中"),a("a",{attrs:{href:"https://opendocs.alipay.com/open/54/103419#Python%20SDK%20%E9%9B%86%E6%88%90%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("python示例"),a("OutboundLink")],1),t._v("开发")]),t._v(" "),a("p",[t._v("4.SDK使用一般三步:")]),t._v(" "),a("p",[t._v("第一步:实例化客户端AlipayClientConfig()  DefaultAlipayClient()")]),t._v(" "),a("p",[t._v("第二步:构造对应接口请求参数对象:AlipayOpenAuthTokenAppModel()")]),t._v(" "),a("p",[t._v("​    (请求参数对象与对应接口关系就是:去掉接口的.,并将首字母大写alipay.open.auth.token.app==>AlipayOpenAuthTokenAppModel())")]),t._v(" "),a("p",[t._v("第三步:调用/执行AlipayOpenAuthTokenAppRequest()...")])])])]),t._v(" "),a("blockquote")])}),[],!1,null,null,null);s.default=e.exports}}]);