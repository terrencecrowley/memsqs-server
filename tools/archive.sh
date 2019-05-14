#!/bin/sh

SRCSERVER=./memsqs-server
DST=${SRCSERVER}.deploy

if [ ! -e ${SRCSERVER} ]; then
	echo Run archive script from parent directory of ${SRCSERVER}
	exit 1
fi

echo INFO: archiving...

rm -rf ${DST}
mkdir ${DST}
mkdir ${DST}/node_modules

cp ${SRCSERVER}/package.json ${DST}/package.json
cp ${SRCSERVER}/server.js ${DST}
cp -R ${SRCSERVER}/dist ${DST}

cd ${DST}
zip -q -r archive-memsqs.zip .
mv archive-memsqs.zip ..
cd ..
rm -rf ${DST}
echo INFO: Archive created in archive-memsqs.zip
exit 0
