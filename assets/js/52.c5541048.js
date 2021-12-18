(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{498:function(s,a,t){"use strict";t.r(a);var e=t(28),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("@[toc]")]),s._v(" "),t("h1",{attrs:{id:"celery后台运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#celery后台运行"}},[s._v("#")]),s._v(" celery后台运行")]),s._v(" "),t("p",[s._v("celery后台运行需要借助Supervisor进行管理程序")]),s._v(" "),t("h3",{attrs:{id:"安装supervisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装supervisor"}},[s._v("#")]),s._v(" 安装Supervisor")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" supervisor\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("安装后 ,会多出"),t("code",[s._v("echo_supervisord_conf")]),s._v("、"),t("code",[s._v("supervisorctl")]),s._v("和"),t("code",[s._v("supervisord")]),s._v(" 命令,后续有用")])]),s._v(" "),t("h3",{attrs:{id:"supervisor配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supervisor配置"}},[s._v("#")]),s._v(" "),t("strong",[s._v("Supervisor配置")])]),s._v(" "),t("p",[s._v("进入到Django项目的uwsgi.ini同级目录,执行:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("echo_supervisord_conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" supervisord.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("运行后会多出一个"),t("code",[s._v("supervisord.conf")]),s._v("文件")]),s._v(" "),t("p",[s._v("使用vim编辑该文件,在最后添加:")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("include")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("files")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/etc/superv.ini")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("再创建"),t("code",[s._v("superv.ini")]),s._v("文件,添加以下内容")]),s._v(" "),t("p",[t("code",[s._v("superv.ini")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("program:celery.worker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";指定运行目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("directory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/usr/factory_policy")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";;运行目录下执行命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("celery -A factory_policy worker -l info")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";;启动设置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("numprocs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1          ;进程数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("autostart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true      ;当supervisor启动时,程序将会自动启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("autorestart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true    ;自动重启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";;输出日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("stdout_logfile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/usr/factory_policy/factory_policy/celery_work.log")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("stdout_logfile_maxbytes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1MB ;默认最大1M")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("stdout_logfile_backups")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("10 ;日志文件备份数，默认为10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";;启动设置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("numprocs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1      ;进程数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("autorestart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true        ;是否自动重启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";;错误日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("redirect_stderr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true ;为true表示禁止监听错误")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("blockquote",[t("p",[s._v("也可不创建"),t("code",[s._v("superv.ini")]),s._v("文件,直接在"),t("code",[s._v("supervisord.conf")]),s._v("最后加入内容")])]),s._v(" "),t("h3",{attrs:{id:"启动和关闭和重启supervisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动和关闭和重启supervisor"}},[s._v("#")]),s._v(" "),t("strong",[s._v("启动和关闭和重启Supervisor")])]),s._v(" "),t("p",[s._v("在有"),t("code",[s._v("supervisord.conf")]),s._v("文件的路径下,执行")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nsupervisord -c supervisord.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\nsupervisorctl -c supervisord.conf "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\nsupervisorctl -c supervisord.conf reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);