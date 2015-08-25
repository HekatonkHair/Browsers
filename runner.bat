@echo off
set browser=%1
for /f "tokens=*" %%u in (sites.txt) do (
  start %browser% %%u
  timeout 3
)
pause