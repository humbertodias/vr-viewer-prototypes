#!/bin/sh

# credenciais
STORE_ALIAS=android
STORE_PASS=password

KEY_STORE=android.keystore
KEY_PASS=$STORE_PASS

APK_UNSIGNED=platforms/android/build/outputs/apk/android-armv7-release-unsigned.apk
APK_SIGNED=platforms/android/build/outputs/apk/android-armv7-release-signed.apk

# pasta de fontes
cd src/

# add android
cordova platform add android

# clean
cordova clean android

# para threejs com webgl
cordova plugin add cordova-plugin-crosswalk-webview

# android
cordova platform add android

# para gerar a versão release
cordova build android --release

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

rm $APK_SIGNED

zipalign -v 4 \
$APK_UNSIGNED \
$APK_SIGNED

echo "SIGNED FILE: $APK_SIGNED"