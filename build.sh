#!/bin/bash

cd src

# para threejs com webgl
cordova plugin add cordova-plugin-crosswalk-webview

# android
cordova platform add android

# para gerar a versão release
cordova build android --release

# credenciais
STORE_ALIAS=android
STORE_PASS=password

KEY_STORE=android.keystore
KEY_PASS=$STORE_PASS

# remove anterior
rm $KEY_STORE

# gerar chave
keytool -v \
-genkey \
-keystore $KEY_STORE \
-alias $STORE_ALIAS \
-keyalg RSA \
-keysize 2048 \
-validity 10000 \
-dname "CN=Polygon, OU=Application Development, O=br.vr.viewer.models, L=Sao_Paulo, S=Sao_Paulo, C=BR"<<EOF
$STORE_PASS
$STORE_PASS
$STORE_PASS
$STORE_PASS
EOF

APK_UNSIGNED=platforms/android/build/outputs/apk/android-armv7-release-unsigned.apk

# assinando apk
jarsigner -verbose \
-certs \
-keystore $KEY_STORE \
-storepass $STORE_PASS \
-keypass $KEY_PASS \
$APK_UNSIGNED \
$STORE_ALIAS

# verificando assinatura no jar
jarsigner -verify \
-verbose \
-certs \
$APK_UNSIGNED


APK_SIGNED=platforms/android/build/outputs/apk/android-armv7-release-signed.apk

rm $APK_SIGNED

zipalign -v 4 \
$APK_UNSIGNED \
$APK_SIGNED

ls -lha platforms/android/build/outputs/apk
echo "SIGNED FILE: android-armv7-release-signed.apk"
