@echo off
chcp 65001
REM 添加所有改动到暂存区
git add .

REM 提交改动
git commit -m "better: 用户管理界面导入导出"

REM 推送改动到远程仓库
git push origin master --force


