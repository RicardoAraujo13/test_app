
All instructions required to build and execute the hook. If any other library or binding is used, instructions on how to install those should be provided too.
  1) Download Frida server: `wget https://github.com/frida/frida/releases/download/16.6.6/frida-server-16.6.6-android-x86.xz`
  2) Extract the file: `7z x frida-server-16.6.6-android-x86.xz`
  3) Rename the extracted file: `mv frida-server-16.6.6-android-x86 frida-server`
  4) Push it to the Android device: `adb push frida-server /data/local/tmp/`
  5) Change the permissions: `adb shell "chmod 755 /data/local/tmp/frida-server"`
  6) Run the Frida server on the Android device: `adb shell "/data/local/tmp/frida-server &"`
  7) Save the hook-textview.js file
  8) Execute the Frida script: `frida -U -f com.ds.testapp -l hook-textview.js`
       

Specific Frida version used.
  frida-server-16.6.6-android-x86.xz


Which emulator was used and which Android version.
  Genymotion v3.8.0
  Android 9 api 28


A screenshot of the app displaying the required text.
  ![Captura de ecrã 2025-03-06 140117](https://github.com/user-attachments/assets/939cb4fb-e007-4e79-8b26-96fae4588ec8)

