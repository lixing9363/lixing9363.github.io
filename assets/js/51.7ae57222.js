(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{497:function(s,a,e){"use strict";e.r(a);var t=e(28),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"pycharm连接远程docker调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pycharm连接远程docker调试"}},[s._v("#")]),s._v(" pycharm连接远程docker调试")]),s._v(" "),e("h4",{attrs:{id:"_1-安装docker-以ubuntu为例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装docker-以ubuntu为例"}},[s._v("#")]),s._v(" 1.  安装docker（以ubuntu为例）")]),s._v(" "),e("p",[s._v("参考 "),e("a",{attrs:{href:"https://www.runoob.com/docker/ubuntu-docker-install.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("菜鸟教程"),e("OutboundLink")],1)]),s._v(" "),e("h4",{attrs:{id:"_2-创建容器-设置容器环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建容器-设置容器环境"}},[s._v("#")]),s._v(" 2. 创建容器，设置容器环境")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("使用ubuntu镜像，启动docker")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取容器，创建docker  ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 20080:80 -p 20022:22 将80和22端口对外暴露  ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --name my-site 设置docker运行名称")]),s._v("\n$ docker run -it --name my-site -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20080")]),s._v(":80 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20022")]),s._v(":22  ubuntu /bin/bash  \n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n$ docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看docker进程")]),s._v("\nCONTAINER ID   IMAGE     COMMAND       CREATED         STATUS                     PORTS     NAMES\na92e450ce169   ubuntu    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" seconds ago   Exited "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" seconds ago             my-site\n$ docker start a92e450ce169 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker")]),s._v("\n$ docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it a92e450ce169 /bin/bash  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入交互命令进入docker ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i: 交互式操作。-t: 终端。")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("在容器中安装python3 pip3")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update  \n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python3 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装python3")]),s._v("\n$ python3 --version     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看python版本")]),s._v("\nPython "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.8")]),s._v(".10\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python3-pip "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装pip3")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("设置ssh")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-server "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装ssh")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" start\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加root密码")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("修改ssh配置信息")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n\nRSAAuthentication "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用 RSA 认证")]),s._v("\nPubkeyAuthentication "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用公钥私钥配对认证方式")]),s._v("\nPermitRootLogin "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许root用户使用ssh登录")]),s._v("\n\n$  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" restart "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启ssh")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])])])]),s._v(" "),e("h4",{attrs:{id:"_3-pycharm-连接docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-pycharm-连接docker"}},[s._v("#")]),s._v(" 3. pycharm 连接docker")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/883628ea895e4fefb7b73b4c3a604e2c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),s._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/ceada63089384772ab258e5b2ebac994.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),s._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/5c4b8b8ae36d42079a9c2b9c69fa6429.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),s._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/09a0e3ee11e14b559872931f89aa5356.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),s._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/bd195e6ee9d843149addb9b62bdeddd6.png#pic_center",alt:"在这里插入图片描述"}}),s._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/85c5862dde684e37ae96d1bc1076a73d.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),s._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/450752ed3f734a2bb4ceb70f3aa14a13.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),s._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/f647de3a4e354d1dbb90d046464309a3.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0MDM3NQ==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[s._v("此时配置完成后, 就可以在本地写代码, 执行是通过docker执行, 需要安装pip包也是在docker中安装")]),s._v(" "),e("h4",{attrs:{id:"_4-测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试"}},[s._v("#")]),s._v(" 4. 测试")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("python3 -u manage.py runserver 0.0.0.0:80\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("访问 http://192.168.1.4:20080/ 成功")]),s._v(" "),e("h4",{attrs:{id:"_5-将docker生成镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-将docker生成镜像"}},[s._v("#")]),s._v(" 5. 将docker生成镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ docker commit -m"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my-docker-images"')]),s._v(" -a"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myname"')]),s._v(" b5be30e3d2f7 my-docker-image\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -m: 提交的描述信息")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -a: 指定镜像作者")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# b5be30e3d2f7 容器id")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# my-docker-image 生成的镜像名称")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("blockquote",[e("p",[s._v("删除docker镜像方法")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ docker images\nREPOSITORY         TAG       IMAGE ID       CREATED          SIZE\nmy-docker-image    latest    1aede41fd70c   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),s._v(" seconds ago   624MB\nubuntu             latest    c29284518f49   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days ago      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("72")]),s._v(".8MB\nubuntu             "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.10")]),s._v("     9b9cb95443b5   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" years ago      137MB\n$ docker rmi 9b9cb95443b5\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("h4",{attrs:{id:"_6-拷贝镜像到另一台服务器使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-拷贝镜像到另一台服务器使用"}},[s._v("#")]),s._v(" 6. 拷贝镜像到另一台服务器使用")]),s._v(" "),e("p",[s._v("有两种方式，一种是上传镜像到仓库中（本地或公共仓库）,另一种是通过Docker save和Docker load命令来存储和载入镜像。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("方式一 :")]),s._v(" "),e("p",[s._v("参考https://www.runoob.com/docker/docker-repository.html")])]),s._v(" "),e("li",[e("p",[s._v("方式二:")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("储存镜像")]),s._v(" "),e("p",[s._v("docker save -o 要保存的文件名  要保存的镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ docker images\nREPOSITORY         TAG       IMAGE ID       CREATED         SIZE\nmy-docker-image    latest    1aede41fd70c   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" minutes ago   624MB\nblog-site-docker   latest    9f83c9c41005   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" hours ago     612MB\nubuntu             latest    c29284518f49   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days ago     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("72")]),s._v(".8MB\n$ docker save -o my_docker_image.tar 1aede41fd70c\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("载入镜像")]),s._v(" "),e("p",[s._v("docker load < 文件名")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ docker load "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("my_docker_image.tar \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])])]),s._v(" "),e("h4",{attrs:{id:"_7-使用镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-使用镜像"}},[s._v("#")]),s._v(" 7. 使用镜像")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ docker images\nREPOSITORY   TAG       IMAGE ID       CREATED          SIZE\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    1aede41fd70c   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" minutes ago   624MB\n$ docker run -it --name my-site -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20080")]),s._v(":80 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20022")]),s._v(":22  1aede41fd70c /bin/bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("由于创建镜像时没有设置REPOSITORY和tag, 使用id 1aede41fd70c")]),s._v(" "),e("p",[s._v("剩下的重复第2步即可")])])}),[],!1,null,null,null);a.default=n.exports}}]);