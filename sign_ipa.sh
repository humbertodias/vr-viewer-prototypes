#!/bin/bash

IPA_UNSIGNED="platforms/ios/build/device/VR Viewer 3D Models.ipa"
IPA_SIGNED="platforms/ios/build/signed.ipa"
APP="platforms/ios/build/device/VR Viewer 3D Models.app"

# https://developer.apple.com > Provision Profiles > Distribution > FILL > Generate
PROVISION="compolygon4gamesviewermodels.mobileprovision"
CERTIFICATE="iPhone Developer: Humberto Dias (UGSNK4VCD7)"

# pasta de fontes
cd src/

# add android
cordova platform add ios

# clean
cordova clean ios

# generating ipa file
cordova build ios --device

echo "Unzip the ipa"
unzip -q "$IPA_UNSIGNED"<<EOF
A
EOF

echo "remove the signature"
rm -rf Payload/*.app/_CodeSignature Payload/*.app/CodeResources

echo "replace the provision"
cp "$PROVISION" Payload/*.app/embedded.mobileprovision

echo "# sign with the new certificate (--resource-rules has been deprecated OS X Yosemite (10.10), it can safely be removed)"
codesign -f -s "$CERTIFICATE" \
--resource-rules Payload/*.app/ResourceRules.plist \
Payload/*.app

echo "remove last signed ipa"
rm -rf "$IPA_SIGNED"

echo "zip it back up"
zip -qr "$IPA_SIGNED" Payload

echo "Verifying ipa"
codesign -d -vvvv "$APP"

echo "Signed app on: Payload/"
echo "Signed ipa file: $IPA_SIGNED"