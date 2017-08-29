while true
do
echo Healthy Checking
x=`/app/csm/script/command.sh status|grep stop|wc -l`
   echo $x
   if [ $x -eq 1 ]
   then
        echo "stoped let start"
	/app/csm/script/command.sh start --force
   fi
   sleep 10
done
