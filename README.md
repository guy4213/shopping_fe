<h1>🛍️ רשימת קניות - Frontend</h1>

זהו ה־frontend של אפליקציית רשימת הקניות, הבנוי עם React ו־Vite.

<h2>🌟 סקירה כללית</h2>

אפליקציית רשימת קניות מודרנית ורספונסיבית, המאפשרת למשתמשים לצפות, להוסיף, להסיר, למיין ולסנן פריטים ברשימת הקניות שלהם. האפליקציה מתעדכנת בזמן אמת באמצעות תקשורת עם ה־backend.

<h2>🧰 טכנולוגיות</h2>

הפרויקט נבנה באמצעות הטכנולוגיות הבאות:

-   **React עם TypeScript**: לבניית ממשק משתמש מודרני, מבוסס קומפוננטות, עם טיפוסים חזקים לאמינות הקוד.
-   **Vite**: כלי בנייה מהיר ויעיל לפיתוח פרונטאנד, המספק חווית פיתוח מהירה.
-   **MobX (אופציונלי)**: ספרייה לניהול סטייט (מצב) מקומי יעיל ופשוט.
-   **Tailwind CSS (אופציונלי)**: סביבת עבודה של CSS מבוססת utility-first לעיצוב מהיר ורספונסיבי.

<h2>✨ פונקציונליות</h2>

האפליקציה כוללת את הפונקציונליות הבאה:

-   **ניהול פריטים**: צפייה, הוספה והסרה של פריטים מרשימת הקניות.
-   **מיון וסינון**: יכולת למיין ולסנן פריטים לפי קטגוריות שונות.
-   **ניהול כמות פריטים**: עדכון אוטומטי של כמות הפריטים.
-   **ממשק רספונסיבי**: התאמה מלאה של הממשק למכשירים שונים (נייד, טאבלט, דסקטופ).
-   **עדכונים בזמן אמת**: סנכרון נתונים מיידי עם ה־backend באמצעות קריאות ל־API.

<h2>🎨 עיצוב</h2>

דגש מיוחד הושם על חווית משתמש ועיצוב נקי:

-   **ממשק נקי ופשוט**: עיצוב מינימליסטי ואינטואיטיבי.
-   **רכיבים מעוצבים**: כפתורים ורכיבים מעוצבים לנוחות שימוש מירבית.
-   **אייקונים ותגים**: שימוש באייקונים ותגים חזותיים להבחנה קלה בין סוגי פריטים.
-   **התאמה למובייל**: עיצוב רספונסיבי עם נקודות שבירה מותאמות (breakpoints) לתצוגה אופטימלית בכל גודל מסך.

<h2>🛠 איך להרים מקומית</h2>

<h3>דרישות</h3>

ודא שמותקנות אצלך התוכנות הבאות:

-   **Node.js**: גרסה 18 ומעלה (מומלץ).
-   **Backend**: ודא ש־backend של רשימת הקניות רץ בכתובת `http://localhost:3000`.

<h3>שלבים</h3>

1.  **שיבוט הפרויקט:**
    ```bash
    git clone [https://github.com/your-username/shopping-list-frontend.git](https://github.com/your-username/shopping-list-frontend.git)
    cd shopping-list-frontend
    ```

2.  **התקנת התלויות:**
    ```bash
    npm install
    ```

3.  **יצירת קובץ `.env`:**
    צור קובץ בשם `.env` בשורש הפרויקט והוסף את השורה הבאה, כדי שה־frontend ידבר עם ה־backend המקומי:
    ```
    VITE_API_URL=http://localhost:3000
    ```

4.  **הפעלת הפרויקט:**
    ```bash
    npm run dev
    ```
    הפרויקט יפעל בדרך כלל בכתובת: `http://localhost:5173`

<h2>🧠 דוגמת קריאת API</h2>

דוגמה לקריאת API בתוך קומפוננטת React או קובץ TypeScript:


```javascript
fetch(`${import.meta.env.VITE_API_URL}/api/items`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching items:', error));
```
<h2>✨ מבנה הפרויקט</h2>
                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
```javascript
src/
├── components/ # רכיבי UI קטנים וניתנים לשימוש חוזר
├── pages/      # דפי תצוגה ראשיים המרכיבים את הממשק
├── stores/     # חנויות MobX לניהול סטייט גלובלי (אם יש)
├── App.tsx     # קומפוננטת הליבה של האפליקציה
└── main.tsx    # נקודת הכניסה של האפליקציה
.env            # קובץ הגדרות סביבה
vite.config.ts  # קובץ הגדרות של Vite
```



