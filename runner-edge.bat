@echo off

for /f "tokens=*" %%u in (sites.txt) do (
  start microsoft-edge:%%u
  timeout 3
)
pause