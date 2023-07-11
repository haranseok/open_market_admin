#!/bin/bash

## 질문의 기본
default="prod"

## 배포할 서버정보
destination_user="ubuntu"
destination_path="/home/projects/galleryst.co.kr/admin"
source_path="./dist/"

#-----------------------------------------------------------------------------------------------
read -r  -p"배포할 서버를 선택해주세요. 기본값(${default}) [ dev / prod ] : " inputServer
if [[ $inputServer = "" ]]; then
   inputServer=${default}
fi
#-----------------------------------------------------------------------------------------------

if [[ $inputServer = "prod" ]]; then
  npm run build:prod
  cp ./_deploy/.htaccess ./dist/
  destination_servers=( 13.125.196.143 )
  destination_ssh_pem="/Users/secrettown/Server/pem/GallertST_PROD.pem";
elif [[ $inputServer = "dev" ]]; then
    npm run build:dev
  cp ./_deploy/.htaccess ./dist/
  destination_servers=( 3.39.184.23 )
  destination_ssh_pem="/Users/secrettown/Server/pem/SecretTown_Homepage.pem";
else
  echo "Invalid Input Value [ inputServer ] "
fi

echo "";
echo "";
echo "---------------------------------------------------------------";
echo "Deploy to the server-------------------------------------------";
echo "---------------------------------------------------------------";
echo ${source_path}
echo ${destination_user}
echo ${destination_path}
echo ${destination_ssh_pem}
sleep 3
for server in "${destination_servers[@]}"
	do
		sudo rsync -avz \
			--exclude=.git \
			--exclude=.idea \
			--exclude=.ftpignore \
			--exclude=.eslintrc.json \
			--exclude=.gitignore \
			--exclude=.DS_Store \
			--exclude=log \
			--exclude=cache \
			--exclude=node_modules \
			--exclude=_deploy \
			--exclude=dist_electron \
			--exclude=README.md \
			--delete --progress -e "ssh -i ${destination_ssh_pem} -p 22" ${source_path} ${destination_user}@"${server}":${destination_path}
done


echo "END";
echo "";