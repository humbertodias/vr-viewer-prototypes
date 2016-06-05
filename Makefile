clean:
	rm -rf src/Payload
	cd src && cordova clean
	cd src && cordova platform remove ios
	cd src && cordova platform remove android
ipa:
	./sign_ipa.sh

apk:
	./sign_apk.sh
