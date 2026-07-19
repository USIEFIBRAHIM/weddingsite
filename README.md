# دعوة زفاف محمد وسلمى

مشروع دعوة زفاف عربية كامل، يعمل كصفحة ثابتة ويمكن رفعه مباشرة على GitHub Pages.

## التشغيل

افتح `index.html` في المتصفح. لا يحتاج إلى تثبيت أي برامج أو مكتبات.

## التخصيص السريع

- غيّر التاريخ في `js/script.js` عند `weddingDate`.
- عدّل النصوص والمكان والرابط من `index.html`.
- رابط الموقع الحالي هو بحث Google Maps عن «Villa Saudi El Waraq». استبدله بالرابط الدقيق للقاعة عند توفره.

## الصور

أنشئ المجلدات التالية إذا أردت إضافة المواد النهائية التي جمعتموها:

```
assets/
  gallery/
  audio/
  textures/
  ornaments/
```

لإضافة صور للمعرض، استبدل أي زر `gallery-item placeholder` بمثال مثل:

```html
<button class="gallery-item"><img src="assets/gallery/photo-1.webp" alt="محمد وسلمى" /></button>
```

## الموسيقى

ضع ملفاً باسم `music.mp3` في `assets/audio/` ثم أزل التعليق عن عنصر `audio` أسفل `index.html`.

## رفعه على GitHub Pages

ارفع محتويات مجلد `wedding-invitation` إلى المستودع، ثم من Settings → Pages اختر `Deploy from a branch` ثم `main` و`/(root)`.
