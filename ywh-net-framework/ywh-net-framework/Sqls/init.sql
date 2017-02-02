# 建表
CREATE TABLE `NewTable` (
`id`  int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id' ,
`userName`  varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名' ,
`password`  varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码' ,
`email`  varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱' ,
`headIcon`  varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像' ,
`birthDay`  date NULL DEFAULT NULL COMMENT '生日' ,
`age`  int(11) NULL DEFAULT NULL COMMENT '年龄' ,
`registerDate`  datetime NULL DEFAULT NULL COMMENT '注册日期' ,
`registerLoginIp`  varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '注册ip' ,
`lastLoginDate`  datetime NULL DEFAULT NULL COMMENT '最后登陆日期' ,
`lastLoginIp`  varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '最后登录ip' ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1
ROW_FORMAT=COMPACT
;