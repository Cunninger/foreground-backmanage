@echo off
REM This script updates the local repository to match the remote master branch
REM Change to the directory where your git repository is located
cd /d "C:\path\to\your\git\repository"

REM Checkout the master branch
git checkout master

REM Reset the working directory and index to match the latest commit on the master branch
git reset --hard

REM Pull the latest changes from the remote master branch
git pull origin master

REM Pause the script to see the output
pause