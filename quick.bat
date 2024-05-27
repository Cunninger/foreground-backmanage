@echo off
chcp 65001
REM 添加所有改动到暂存区
git add .

REM 提交改动
git commit -m "modify: 后台侧边栏伸缩字体显示"

REM 推送改动到远程仓库
git push origin master

