# Shopping List Frontend

זהו ה־frontend של אפליקציית רשימת הקניות, מבוסס React ו־Vite.

---

## 🧰 טכנולוגיות

- **React עם TypeScript** – בניית ממשק משתמש מודרני ומרכיבי  
- **Vite** – כלי בנייה מהיר ויעיל לפרונטאנד  
- **MobX** (אופציונלי) – ניהול סטייט מקומי  
- **Tailwind CSS** (אופציונלי) – עיצוב מהיר עם CSS מבוסס תועלת (utility-first)  

---

## ✨ פונקציונליות

- צפייה, הוספה והסרה של פריטים מרשימת הקניות  
- מיון וסינון לפי קטגוריות  
- ניהול כמות פריטים אוטומטי  
- ממשק רספונסיבי – מותאם לנייד ודסקטופ  
- עדכונים בזמן אמת באמצעות קריאות ל־API של ה־backend  

---

## 🎨 עיצוב

- ממשק נקי ופשוט, רספונסיבי  
- כפתורים ורכיבים מעוצבים לנוחות המשתמש  
- שימוש באייקונים ובתגים להבחנה בין סוגי פריטים  
- התאמה למובייל עם נקודות שבירה (breakpoints) מותאמות  

---

## 🛠 איך להרים מקומית

### דרישות

- Node.js (גרסה 18 ומעלה מומלצת)  
- backend רץ בכתובת `http://localhost:3000`  

### שלבים

1. שיבוט הפרויקט:

   ```bash
   git clone https://github.com/your-username/shopping-list-frontend.git
   cd shopping-list-frontend
התקנת התלויות:

bash
Copy
Edit
npm install
יצירת קובץ .env:

env
Copy
Edit
VITE_API_URL=http://localhost:3000
כדי שהפרונטאנד ידבר עם ה־backend המקומי.

הפעלת הפרויקט
bash
Copy
Edit
npm run dev
הפרויקט יפעל בכתובת:

arduino
Copy
Edit
http://localhost:5173
🧠 דוגמת קריאת API
ts
Copy
Edit
fetch(`${import.meta.env.VITE_API_URL}/api/items`)
🧱 מבנה הפרויקט
bash
Copy
Edit
src/
  ├── components/    # רכיבי UI
  ├── pages/         # דפי תצוגה
  ├── stores/        # חנויות MobX (אם יש)
  ├── App.tsx
  └── main.tsx
.env
vite.config.ts
