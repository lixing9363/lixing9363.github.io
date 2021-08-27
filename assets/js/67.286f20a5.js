(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{490:function(s,n,a){"use strict";a.r(n);var e=a(24),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" redis")]),s._v(" "),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存使用情况")]),s._v("\ninfo memory\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看键")]),s._v("\nkeys 表达式  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# keys *  未经过领导批准 切勿使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据类型")]),s._v("\nTYPE key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 键是否存在")]),s._v("\nexists key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除键")]),s._v("\ndel key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 键重命名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" key newkey\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除当前库中所有数据（慎用）")]),s._v("\nflushdb\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除所有库中所有数据（慎用）")]),s._v("\nflushall\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"字符串类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串类型"}},[s._v("#")]),s._v(" 字符串类型")]),s._v(" "),a("ul",[a("li",[s._v("增删改查")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("########## 一个key-value")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" key value\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# key不存在时再进行设置(nx)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" key value nx  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# not exists")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置过期时间(ex)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" key value ex seconds\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给redis已有key添加过期时间")]),s._v("\nexpire key "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 秒")]),s._v("\npexpire key "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 毫秒 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查 ")]),s._v("\nget key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取长度")]),s._v("\nstrlen key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回旧值并设置新值（如果键不存在，就创建并赋值）")]),s._v("\ngetset key value\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回key的剩余时间")]),s._v("\nttl key  \n    返回 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 的值  剩余时间 单位 秒\n    返回 -1  当前key 没有设置过期时间\n    返回 -2  当前key 不存在\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除过期的")]),s._v("\npersist key\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("######## 多个key-value")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增 多个key-value")]),s._v("\nmset key1 value1 key2 value2 key3 value3\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查 多个key-value")]),s._v("\nmget key1 key2 key3 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("ul",[a("li",[a("em",[a("strong",[s._v("数值操作----字符串类型的数组")])])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 整数操作")]),s._v("\nINCRBY key 步长\nDECRBY key 步长\nINCR key "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" +1操作\nDECR key "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" -1操作\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 浮点数操作: 自动先转为数字类型，然后再进行相加减，不能使用append")]),s._v("\nincrbyfloat key step\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("blockquote",[a("p",[s._v("注意:\n1、key值不宜过长，消耗内存，且在数据中查找这类键值的计算成本高\n2、不宜过短，可读性较差\n3、一个字符串类型的值最多能存储512M内容")])]),s._v(" "),a("h3",{attrs:{id:"列表类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列表类型"}},[s._v("#")]),s._v(" 列表类型")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("特点")]),s._v(" "),a("ul",[a("li",[s._v("字符串类型储存")]),s._v(" "),a("li",[s._v("可重复")]),s._v(" "),a("li",[s._v("最多2^32 -1个元素")]),s._v(" "),a("li",[s._v("有索引")])])]),s._v(" "),a("li",[a("p",[s._v("增删改查")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、从列表头部压入元素\n\tLPUSH key value1 value2 \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、从列表尾部压入元素\n\tRPUSH key value1 value2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、从列表src尾部弹出1个元素,压入到列表dst的头部\n\tRPOPLPUSH src dst\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、在列表指定元素后/前插入元素\n\tLINSERT key after"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("before value newvalue\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("、查看列表中元素\n\tLRANGE key start stop\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看列表中所有元素: LRANGE key 0 -1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("、获取列表长度\n\tLLEN key\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("、从列表头部弹出1个元素\n\tLPOP key\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("、从列表尾部弹出1个元素\n\tRPOP key\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("、列表头部,阻塞弹出,列表为空时阻塞\n\tBLPOP key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("、列表尾部,阻塞弹出,列表为空时阻塞\n\tBRPOP key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关于BLPOP 和 BRPOP")]),s._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、如果弹出的列表不存在或者为空，就会阻塞\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、超时时间设置为0，就是永久阻塞，直到有数据可以弹出\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、如果多个客户端阻塞再同一个列表上，使用First In First Service原则，先到先服务\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("、删除指定元素\n\tLREM key count value\n    count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("：表示从头部开始向表尾搜索，移除与value相等的元素，数量为count               \n\tcount"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("：表示从尾部开始向表头搜索，移除与value相等的元素，数量为count\n\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("：移除表中所有与value相等的值\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("、保留指定范围内的元素\n\tLTRIM key start stop\n  LTRIM mylist1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只保留前3条")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用场景: 保存微博评论最后500条")]),s._v("\n  LTRIM weibo:comments "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("499")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("、LSET key index newvalue\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])]),a("h3",{attrs:{id:"hash类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash类型"}},[s._v("#")]),s._v(" hash类型")]),s._v(" "),a("ul",[a("li",[s._v("增删改查")])]),s._v(" "),a("blockquote",[a("p",[s._v("由field和关联的value组成的键值对")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1、设置单个字段")]),s._v("\nHSET key field value\nHSETNX key field value\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2、设置多个字段")]),s._v("\nHMSET key field value field value\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3、返回字段个数")]),s._v("\nHLEN key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4、判断字段是否存在（不存在返回0）")]),s._v("\nHEXISTS key field\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5、返回字段值")]),s._v("\nHGET key field\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6、返回多个字段值")]),s._v("\nHMGET key field filed\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7、返回所有的键值对")]),s._v("\nHGETALL key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 8、返回所有字段名")]),s._v("\nHKEYS key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 9、返回所有值")]),s._v("\nHVALS key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 10、删除指定字段")]),s._v("\nHDEL key field \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 11、在字段对应值上进行整数增量运算")]),s._v("\nHINCRBY key filed increment\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 12、在字段对应值上进行浮点数增量运算")]),s._v("\nHINCRBYFLOAT key field increment\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"集合数据类型-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合数据类型-set"}},[s._v("#")]),s._v(" 集合数据类型（set）")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("特点")]),s._v(" "),a("ul",[a("li",[s._v("无序,不重复")])])]),s._v(" "),a("li",[a("p",[s._v("增删改查")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加一个或者多个元素,自动去重")]),s._v("\nSADD key member1 member2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看集合中所有元素")]),s._v("\nSMEMBERS key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一个或者多个元素，元素不存在自动忽略")]),s._v("\nSREM key member1 member2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 元素是否存在")]),s._v("\nSISMEMBER key member\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随机返回集合中指定个数的元素，默认为1个")]),s._v("\nSRANDMEMBER key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 弹出成员")]),s._v("\nSPOP key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回集合中元素的个数，不会遍历整个集合，只是存储在键当中了")]),s._v("\nSCARD key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把元素从源集合移动到目标集合")]),s._v("\nSMOVE "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" destination member\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 差集(number1 1 2 3 number2 1 2 4 结果为3)")]),s._v("\nSDIFF key1 key2 \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 差集保存到另一个集合中")]),s._v("\nSDIFFSTORE destination key1 key2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 交集")]),s._v("\nSINTER key1 key2\nSINTERSTORE destination key1 key2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并集")]),s._v("\nSUNION key1 key2\nSUNIONSTORE destination key1 key2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"有序集合sortedset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有序集合sortedset"}},[s._v("#")]),s._v(" 有序集合sortedset")]),s._v(" "),a("ul",[a("li",[s._v("特点\n"),a("ul",[a("li",[s._v("有序、不重复")])])]),s._v(" "),a("li",[s._v("增删改查")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在有序集合中添加一个成员")]),s._v("\nzadd key score member\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定区间元素（升序)")]),s._v("\nzrange key start stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("withscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定区间元素（降序）")]),s._v("\nZREVRANGE key start stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("withscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定元素的分值")]),s._v("\nZSCORE key member\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回指定区间元素")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# offset : 跳过多少个元素")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# count : 返回几个")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 小括号 : 开区间  zrangebyscore fruits (2.0 8.0")]),s._v("\nzrangebyscore key min max "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("withscores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("limit offset count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每页显示10个成员,显示第5页的成员信息: ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# limit 40 10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MySQL: 每页显示10条记录,显示第5页的记录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# limit 40,10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# limit 2,3   显示: 第3 4 5条记录")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除成员")]),s._v("\nzrem key member\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加或者减少分值")]),s._v("\nzincrby key increment member\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回元素排名")]),s._v("\nzrank key member\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回元素逆序排名")]),s._v("\nzrevrank key member\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定区间内的元素")]),s._v("\nzremrangebyscore key min max\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回集合中元素个数")]),s._v("\nzcard key\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回指定范围中元素的个数")]),s._v("\nzcount key min max\nzcount salary "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v(" \nzcount salary "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6000<salary<=8000")]),s._v("\nzcount salary "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#6000<salary<8000               ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并集")]),s._v("\nzunionstore destination numkeys key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("weights 权重值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("AGGREGATE SUM"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MAX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zunionstore salary3 2 salary salary2 weights 1 0.5 AGGREGATE MAX")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2代表集合数量,weights之后 权重1给salary,权重0.5给salary2集合,算完权重之后执行聚合AGGREGATE")]),s._v("\n                     \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 交集：和并集类似，只取相同的元素")]),s._v("\nZINTERSTORE destination numkeys key1 key2 WEIGHTS weight AGGREGATE SUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("默认"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MAX\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])]),a("h2",{attrs:{id:"redis-内存管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-内存管理"}},[s._v("#")]),s._v(" redis 内存管理")]),s._v(" "),a("ul",[a("li",[s._v("过期key淘汰机制")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("所有带过期时间的key 会统一存放至 '过期字典' 中，且redis定期扫描过期字典\n定期扫描： 每秒进行10次【max 10次】\n        1，过期字典中 随机 拿 20 key 出来\n        2，删除 过期了的 key\n        3，过期key比例超过 1/4  循环继续\n        默认 25ms 超时设置， 避免卡死\n引申： 如果同一秒内 有大量key过期， 查询/写入redis的时候会有明显的延迟；请求延迟均大于25ms\n解决方案:  让过期时间分散【非集中】 expire 3600 + random(1, 10)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("惰性删除 - maxmemory 内存检查")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("惰性删除 - maxmemory 内存检查\n        get/set 获取key的时候 触发检查\n        1， noeviction - 拒绝所有写请求， 但是可接收查询请求 【默认模式】\n        2， volatile-lru - 对过期key 进行lru算法淘汰\n        3， allkeys-lru  - 所有key 均执行lru算法淘汰\n        4， volatile-ttl - 优先淘汰ttl最小的数据 \nleast recently used 最近最少使用原则\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);