# Toon Studio

A private cartoon-video app for Ross and his girlfriend. It is a website that
installs to the home screen like an app (a "PWA"), so no app store is needed.

## Files
- index.html: the screens (Create, Series, Settings)
- app.css: colors and layout
- app.js: tabs, saving keys, testing keys
- styles.js: the list of cartoon styles in the dropdown
- sw.js: saves the app on the device so it opens fast
- manifest.webmanifest + icons/: the home screen name and icon

## Try it on a computer
From this folder run `python3 -m http.server 8000`, then open http://localhost:8000

## Status
- Step 1 (app body): done
- Step 2 (make one video with Gemini or Grok): next
- Step 3 (series mode with cliffhangers): later
- Step 4 (voices, captions, music, polish): later

There is no passcode (Ross asked for none). Keys are stored only in the
browser on each device.
