#!/bin/bash
pid="$(ps -ef | grep "/app/csm/script/node-csm-startup.sh" | grep -v grep | awk '{print $2}')"
#echo "pid is "
#echo $pid 
kill -9 $pid
pid="$(ps -ef | grep "/usr/local/node-v6.11.0-linux-x64/bin/node /app/csm/app.js" | grep -v grep | awk '{print $2}')"
#echo "pid is "
#echo $pid 
kill -9 $pid
