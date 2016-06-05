mkdir:
	mkdir -pv out && cd out && mkdir -pv apple/3.5-Inch apple/4-Inch apple/4.7-Inch apple/5.5-Inch apple/iPad apple/iPad\ Pro android windows

apple_icon: mkdir
	convert in/icon-apple.png -resize 29x29\! -alpha remove -alpha off out/apple/icon-29x29.png
	convert in/icon-apple.png -resize 40x40\! -alpha remove -alpha off out/apple/icon-40x40.png
	convert in/icon-apple.png -resize 58x58\! -alpha remove -alpha off out/apple/icon-58x58.png
	convert in/icon-apple.png -resize 76x76\! -alpha remove -alpha off out/apple/icon-76x76.png
	convert in/icon-apple.png -resize 80x80\! -alpha remove -alpha off out/apple/icon-80x80.png
	convert in/icon-apple.png -resize 120x120\! -alpha remove -alpha off out/apple/icon-120x120.png
	convert in/icon-apple.png -resize 152x152\! -alpha remove -alpha off out/apple/icon-152x152.png
	convert in/icon-apple.png -resize 167x167\! -alpha remove -alpha off out/apple/icon-167x167.png
	convert in/icon-apple.png -resize 180x180\! -alpha remove -alpha off out/apple/icon-180x180.png
	convert in/icon-apple.png -resize 1024x1024\! -alpha remove -alpha off out/apple/icon-1024x1024.png

apple_splash: mkdir
	convert in/splash.png -resize 320x480\! -alpha on out/apple/splash-320x480.png
	convert in/splash.png -resize 640x960\! -alpha on out/apple/splash-640x960.png
	convert in/splash.png -resize 640x1136\! -alpha on out/apple/splash-640x1136.png
	convert in/splash.png -resize 750x1334\! -alpha on out/apple/splash-750x1334.png
	convert in/splash.png -resize 768x1004\! -alpha on out/apple/splash-768x1004.png
	convert in/splash.png -resize 768x1024\! -alpha on out/apple/splash-768x1024.png
	convert in/splash.png -resize 1024x768\! -alpha on out/apple/splash-1024x768.png
	convert in/splash.png -resize 1242x2208\! -alpha on out/apple/splash-1242x2208.png
	convert in/splash.png -resize 1556x2008\! -alpha on out/apple/splash-1556x2008.png
	convert in/splash.png -resize 1536x2048\! -alpha on out/apple/splash-1536x2048.png
	convert in/splash.png -resize 2048x1496\! -alpha on out/apple/splash-2048x1496.png
	convert in/splash.png -resize 2048x1536\! -alpha on out/apple/splash-2048x1536.png
	convert in/splash.png -resize 2208x1242\! -alpha on out/apple/splash-2208x1242.png

apple_3.5: mkdir
	convert in/01.png -resize 960x640^ -extent 960x640 -gravity center -alpha remove -alpha off out/apple/3.5-Inch/01-960x640.png
	convert in/02.png -resize 960x640^ -extent 960x640 -gravity center -alpha remove -alpha off out/apple/3.5-Inch/02-960x640.png
	convert in/03.png -resize 960x640^ -extent 960x640 -gravity center -alpha remove -alpha off out/apple/3.5-Inch/03-960x640.png
	convert in/04.png -resize 960x640^ -extent 960x640 -gravity center -alpha remove -alpha off out/apple/3.5-Inch/04-960x640.png
	convert in/05.png -resize 960x640^ -extent 960x640 -gravity center -alpha remove -alpha off out/apple/3.5-Inch/05-960x640.png

apple_4: mkdir
	convert in/01.png -resize 1136x640^ -extent 1136x640 -gravity center -alpha remove -alpha off out/apple/4-Inch/01-1136x640.png
	convert in/02.png -resize 1136x640^ -extent 1136x640 -gravity center -alpha remove -alpha off out/apple/4-Inch/02-1136x640.png
	convert in/03.png -resize 1136x640^ -extent 1136x640 -gravity center -alpha remove -alpha off out/apple/4-Inch/03-1136x640.png
	convert in/04.png -resize 1136x640^ -extent 1136x640 -gravity center -alpha remove -alpha off out/apple/4-Inch/04-1136x640.png
	convert in/05.png -resize 1136x640^ -extent 1136x640 -gravity center -alpha remove -alpha off out/apple/4-Inch/05-1136x640.png
	ffmpeg -i in/"App Preview.mp4" -strict -2 -vf scale=1920x1080 -aspect 1.77777777777778 out/apple/4-Inch/"App Preview-1920x1080.mp4"
	ffmpeg -i in/"App Preview.mp4" -strict -2 -vf scale=1080x1920 -aspect 0.5625 out/apple/4-Inch/"App Preview-1080x1920.mp4"

apple_4.7: mkdir
	convert in/01.png -resize 1334x750^ -extent 1334x750 -gravity center -alpha remove -alpha off out/apple/4.7-Inch/01-1334x750.png
	convert in/02.png -resize 1334x750^ -extent 1334x750 -gravity center -alpha remove -alpha off out/apple/4.7-Inch/02-1334x750.png
	convert in/03.png -resize 1334x750^ -extent 1334x750 -gravity center -alpha remove -alpha off out/apple/4.7-Inch/03-1334x750.png
	convert in/04.png -resize 1334x750^ -extent 1334x750 -gravity center -alpha remove -alpha off out/apple/4.7-Inch/04-1334x750.png
	convert in/05.png -resize 1334x750^ -extent 1334x750 -gravity center -alpha remove -alpha off out/apple/4.7-Inch/05-1334x750.png
	ffmpeg -i in/"App Preview.mp4" -strict -2 -vf scale=1334x750 -aspect 1.779 out/apple/4.7-Inch/"App Preview-1334x750.mp4"
	ffmpeg -i in/"App Preview.mp4" -strict -2 -vf scale=750:-1,setsar=1:1 -aspect 0.56221889055472 -s 750x1334 out/apple/4.7-Inch/"App Preview-750x1334.mp4"

apple_5.5: mkdir
	convert in/01.png -resize 2208x1242^ -extent 2208x1242 -gravity center -alpha remove -alpha off out/apple/5.5-Inch/01-2208x1242.png
	convert in/02.png -resize 2208x1242^ -extent 2208x1242 -gravity center -alpha remove -alpha off out/apple/5.5-Inch/02-2208x1242.png
	convert in/03.png -resize 2208x1242^ -extent 2208x1242 -gravity center -alpha remove -alpha off out/apple/5.5-Inch/03-2208x1242.png
	convert in/04.png -resize 2208x1242^ -extent 2208x1242 -gravity center -alpha remove -alpha off out/apple/5.5-Inch/04-2208x1242.png
	convert in/05.png -resize 2208x1242^ -extent 2208x1242 -gravity center -alpha remove -alpha off out/apple/5.5-Inch/05-2208x1242.png
	ffmpeg -i in/"App Preview.mp4" -strict -2 -vf scale=1920x1080 -aspect 1.77777777777778 out/apple/5.5-Inch/"App Preview-1920x1080.mp4"
	ffmpeg -i in/"App Preview.mp4" -strict -2 -vf scale=1080x1920 -aspect 0.5625 out/apple/5.5-Inch/"App Preview-1080x1920.mp4"

apple_ipad: mkdir
	convert in/01.png -resize 2048x1536^ -extent 2048x1536 -gravity center -alpha remove -alpha off out/apple/iPad/01-2048x1536.png
	convert in/02.png -resize 2048x1536^ -extent 2048x1536 -gravity center -alpha remove -alpha off out/apple/iPad/02-2048x1536.png
	convert in/03.png -resize 2048x1536^ -extent 2048x1536 -gravity center -alpha remove -alpha off out/apple/iPad/03-2048x1536.png
	convert in/04.png -resize 2048x1536^ -extent 2048x1536 -gravity center -alpha remove -alpha off out/apple/iPad/04-2048x1536.png
	convert in/05.png -resize 2048x1536^ -extent 2048x1536 -gravity center -alpha remove -alpha off out/apple/iPad/05-2048x1536.png
	ffmpeg -i in/"App Preview.mp4" -strict -2 -vf scale=1200x900 -aspect 1.33333333333333 out/apple/iPad/"App Preview-1200x900.mp4"
	ffmpeg -i in/"App Preview.mp4" -strict -2 -vf scale=900x1200 -aspect 0.75 out/apple/iPad/"App Preview-900x1200.mp4"

apple_ipadpro: mkdir
	convert in/01.png -resize 2732x2048^ -extent 2732x2048 -gravity center -alpha remove -alpha off out/apple/iPad\ Pro/01-2732x2048.png
	convert in/02.png -resize 2732x2048^ -extent 2732x2048 -gravity center -alpha remove -alpha off out/apple/iPad\ Pro/02-2732x2048.png
	convert in/03.png -resize 2732x2048^ -extent 2732x2048 -gravity center -alpha remove -alpha off out/apple/iPad\ Pro/03-2732x2048.png
	convert in/04.png -resize 2732x2048^ -extent 2732x2048 -gravity center -alpha remove -alpha off out/apple/iPad\ Pro/04-2732x2048.png
	convert in/05.png -resize 2732x2048^ -extent 2732x2048 -gravity center -alpha remove -alpha off out/apple/iPad\ Pro/05-2732x2048.png
	ffmpeg -i in/"App Preview.mp4" -strict -2 -vf scale=1200x900 -aspect 1.33333333333333 out/apple/iPad\ Pro/"App Preview-1200x900.mp4"
	ffmpeg -i in/"App Preview.mp4" -strict -2 -vf scale=900x1200 -aspect 0.75 out/apple/iPad\ Pro/"App Preview-900x1200.mp4"

apple: apple_icon apple_ipadpro apple_ipad apple_5.5 apple_4.7 apple_4 apple_3.5

android_icon: mkdir
	convert in/icon.png -resize 48x48\! -alpha on out/android/icon-48x48.png
	convert in/icon.png -resize 72x72\! -alpha on out/android/icon-72x72.png
	convert in/icon.png -resize 96x96\! -alpha on out/android/icon-96x96.png
	convert in/icon.png -resize 144x144\! -alpha on out/android/icon-144x144.png
	convert in/icon.png -resize 192x192\! -alpha on out/android/icon-192x192.png
	convert in/icon.png -resize 512x512\! -alpha on out/android/icon-512x512.png

android_splash: mkdir
	convert in/splash.png -resize 320x470 -alpha on out/android/splash-320x470.png
	convert in/splash.png -resize 470x320 -alpha on out/android/splash-470x320.png
	convert in/splash.png -resize 480x640 -alpha on out/android/splash-480x640.png
	convert in/splash.png -resize 640x480 -alpha on out/android/splash-640x480.png
	convert in/splash.png -resize 720x960 -alpha on out/android/splash-720x960.png
	convert in/splash.png -resize 960x720 -alpha on out/android/splash-960x720.png
	convert in/splash.png -resize 1080x1440 -alpha on out/android/splash-1080x1440.png
	convert in/splash.png -resize 1440x1080 -alpha on out/android/splash-1440x1080.png

android_tela: mkdir
	convert in/01.png -resize 3840x3840^ -extent 3840x3840 -gravity center -alpha remove -alpha off out/android/01-3840x3840.png
	convert in/02.png -resize 3840x3840^ -extent 3840x3840 -gravity center -alpha remove -alpha off out/android/02-3840x3840.png
	convert in/03.png -resize 3840x3840^ -extent 3840x3840 -gravity center -alpha remove -alpha off out/android/03-3840x3840.png
	convert in/04.png -resize 3840x3840^ -extent 3840x3840 -gravity center -alpha remove -alpha off out/android/04-3840x3840.png
	convert in/05.png -resize 3840x3840^ -extent 3840x3840 -gravity center -alpha remove -alpha off out/android/05-3840x3840.png

android_title: mkdir
	convert in/title.png -resize 1024x500 -alpha remove -alpha off out/android/title-1024x500.png
	convert in/title.png -resize 180x120 -alpha remove -alpha off out/android/title-180x120.png
	convert in/title.png -resize 320x180 -alpha remove -alpha off out/android/title-320x180.png

android: android_icon android_tela android_title

windows_icon: mkdir
	convert in/icon.png -resize 300x300\! -alpha remove -alpha off out/windows/icon-300x300.png

windows_mobile: mkdir
	convert in/01.png -resize 1280x720 -alpha remove -alpha off out/windows/01-1280x720.png
	convert in/02.png -resize 1280x720 -alpha remove -alpha off out/windows/02-1280x720.png
	convert in/03.png -resize 1280x720 -alpha remove -alpha off out/windows/03-1280x720.png
	convert in/04.png -resize 1280x720 -alpha remove -alpha off out/windows/04-1280x720.png
	convert in/05.png -resize 1280x720 -alpha remove -alpha off out/windows/05-1280x720.png

windows_desktop: mkdir
	convert in/01.png -resize 1366x768 -alpha remove -alpha off out/windows/01-1366x768.png
	convert in/02.png -resize 1366x768 -alpha remove -alpha off out/windows/02-1366x768.png
	convert in/03.png -resize 1366x768 -alpha remove -alpha off out/windows/03-1366x768.png
	convert in/04.png -resize 1366x768 -alpha remove -alpha off out/windows/04-1366x768.png
	convert in/05.png -resize 1366x768 -alpha remove -alpha off out/windows/05-1366x768.png

windows: windows_desktop windows_mobile windows_icon

clean:
	rm -rf out
