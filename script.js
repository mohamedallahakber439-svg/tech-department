
const contentList = document.getElementById("contentList");
const sectionTitle = document.getElementById("sectionTitle");
const home = document.getElementById("home");
const backButton = document.getElementById("backButton");

const courses = [
    "مصادر التعلم الرقمي",
    "مدخل إلى تكنولوجيا التعليم",
    "أساسيات الكاميرا الرقمية",
    "مهارات التواصل",
    "مقدمة في علوم الحاسب"
];


const mainTeachers = [
    "د. زينب",
    "د. أدهم",
    "د. محمد أبو الليل",
    "د. سعودي",
    "د. أمل",
    "د. نسرين",
    "د. ممدوح"
];


function showSection(type) {
    home.hidden = true;
    backButton.hidden = false;
    contentList.innerHTML = "";

    const items = type === "courses" ? courses : mainTeachers;

    sectionTitle.textContent =
        type === "courses" ? "دكاترة السكاشن" : "الدكاترة الأساسيين";

    items.forEach(item => {
        const card = document.createElement("button");
        card.className = "main-btn";
        card.textContent = item;
        card.onclick = () => openItem(item);
        contentList.appendChild(card);
    });
}

function openItem(name) {
    contentList.innerHTML = "";
    sectionTitle.textContent = name;

    const box = document.createElement("div");
    box.className = "empty-message";

    const title = document.createElement("h3");
    title.textContent = "تسجيل الدخول إلى " + name;

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "اكتب كلمة السر";
    passwordInput.id = "teacherPassword";

    const loginButton = document.createElement("button");
    loginButton.className = "main-btn";
    loginButton.textContent = "دخول";

    function checkPassword() {
        const enteredPassword = passwordInput.value;

        const correctPassword =
            mainTeachersPasswords[name] || coursesPasswords[name];

        if (correctPassword && enteredPassword === correctPassword) {
            showUploadPage(name);
        } else {
            alert("كلمة السر غير صحيحة");
        }
    }

    loginButton.onclick = checkPassword;

    passwordInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkPassword();
        }
    });

    box.appendChild(title);
    box.appendChild(passwordInput);
    box.appendChild(loginButton);

    contentList.appendChild(box);
    passwordInput.focus();
}



function showUploadPage(name) {
    contentList.innerHTML = "";

    const heading = document.createElement("h3");
    heading.textContent = "ملفات " + name;

    const filesList = document.createElement("div");
    filesList.className = "files-list";

 const files = [
        // ملفات د. أمل القديمة
        {
            teacher: "أمل",
            title: "المراجعة الأولى - الأسئلة",
            url: "https://drive.google.com/file/d/1jhPMxptztz2ikLBSpc_mBSD74vW0jdTd/view"
        },
        {
            teacher: "أمل",
            title: "المراجعة الأولى - الإجابات",
            url: "https://drive.google.com/file/d/1MH73HkLd02TkgZ9ORR4GEbBIYculAara/view"
        },
        {
            teacher: "أمل",
            title: "المراجعة الأولى - الشرح",
            url: "https://drive.google.com/file/d/15p0fVl8zqo6vENM9veZmQV5dM5YTJiOb/view"
        },

        // ملفات د. زينب القديمة
        {
            teacher: "زينب",
            title: "ملف زينب 1",
            url: "https://drive.google.com/file/d/1pEu_w-_aesswoFdTMvC62kk_5H34mZfR/view"
        },
        {
            teacher: "زينب",
            title: "ملف زينب 2",
            url: "https://drive.google.com/file/d/1dyd5SEgLbQ2nI4RArrWjHWdVbeJhXCqr/view"
        },
        {
            teacher: "زينب",
            title: "ملف زينب 3",
            url: "https://drive.google.com/file/d/1D7Lpm9IuV8bKSZmmQwOxRYwlUPhS-w_1/view"
        },

        // ملفات د. محمد أبو الليل الجديدة
        {
            teacher: "محمد أبو الليل",
            title: "الأسئلة + الإجابات للمراجعة الأولى",
            url: "https://drive.google.com/file/d/1fJ0rz8nLuD-F1290LyPFK8qCrXUgrxxc/view?usp=drivesdk"
        },
        {
            teacher: "محمد أبو الليل",
            title: "المراجعة الأولى",
            url: "https://drive.google.com/file/d/1eiMPJQQ-CNl5rts6DLXFijvsbYCjZkGD/view?usp=drivesdk"
        },

        // ملفات مقرر مقدمة في علوم الحاسب
        {
            teacher: "مقدمة في علوم الحاسب",
            title: "شرح مقدمة في علوم الحاسب",
            url: "https://drive.google.com/file/d/1Ekz3aCo3hfMBDZgTarCgVSF124pVNcl1/view?usp=drivesdk"
        },

        // ملفات مقرر مهارات التواصل
        {
            teacher: "مهارات التواصل",
            title: "تحليل الجمهور",
            url: "https://drive.google.com/file/d/1V4GLacGKt46sgQYVfB8ha2JRVtJkzabR/view?usp=drivesdk"
        },
        {
            teacher: "مهارات التواصل",
            title: "قنوات الاتصال",
            url: "https://drive.google.com/file/d/1tLlJENORd95_N3Xh_FuHurFeuIpeG02i/view?usp=drivesdk"
        },

        // ملفات د. سعودي
        {
            teacher: "سعودي",
            title: "شرح محاضرة بالتفصيل",
            url: "https://drive.google.com/file/d/1OiniyHsS2eKp0eeByzCv_Ttw5pwvgCjN/view?usp=drivesdk"
        },

        // ملفات د. أدهم
        {
            teacher: "أدهم",
            title: "شرح مفصل للمحاضرة",
            url: "https://drive.google.com/file/d/1sWC1UJD_r5oFY2VuczQQcr5nT8aGMcX8/view?usp=drivesdk"
        },
        {
            teacher: "أدهم",
            title: "شرح مفصل للمحاضرة (2)",
            url: "https://drive.google.com/file/d/1HVfFwu1-p5THG1eo6NjKKJhJVHuyomno/view?usp=drivesdk"
        },

        // ملفات د. زينب
        {
            teacher: "زينب",
            title: "شرح مفصل للمحاضرة",
            url: "https://drive.google.com/file/d/11sRGSZ_fVuQHL_KhlT9wL9ge4Ib5XPwK/view?usp=drivesdk"
        },

        // ملفات د. نسرين
        {
            teacher: "نسرين",
            title: "شرح المحاضرة بالتفصيل",
            url: "https://drive.google.com/file/d/1CIz63ry6zoA9NCy0TS3hVQUt4-YpqpbV/view?usp=drivesdk"
        },

        // ملفات د. سعودي الجديدة
        {
            teacher: "سعودي",
            title: "المراجعة الثانية (مراجعة الفصل الأول بالكامل - شرح)",
            url: "https://drive.google.com/file/d/1y6g6Ps3gjodV47LHjgY64iGxkx7pRrbd/view?usp=drivesdk"
        },
        {
            teacher: "سعودي",
            title: "أسئلة وإجابات",
            url: "https://drive.google.com/file/d/1kpwYGaCnhtE6hBpr8jEMmdfOYOtO-1dl/view?usp=drivesdk"
        },

        // ملفات د. أمل الجديدة
        {
            teacher: "أمل",
            title: "أسئلة وإجابات (مراجعة واحد)",
            url: "https://drive.google.com/file/d/1maml3DHlyxjuui61yVSAHebH8Na-2kBe/view?usp=drivesdk"
        },
        {
            teacher: "أمل",
            title: "شرح",
            url: "https://drive.google.com/file/d/12GXR7YCKYsKlUjGvpNZ5dTz5t24X_QZ9/view?usp=drivesdk"
        },

        // ملفات د. ممدوح الجديدة
        {
            teacher: "ممدوح",
            title: "محاضرة دكتور ممدوح 2026/12/18",
            url: "https://drive.google.com/file/d/14e_-8RyzSsoB43caK4NVCpiLuWzSr2N5/view?usp=drivesdk"
        },
        {
            teacher: "ممدوح",
            title: "المراجعة الأولى (شرح)",
            url: "https://drive.google.com/file/d/1VgskbdI1dxEnis7pevC4GpsSQJn8A4qq/view?usp=drivesdk"
        },
        {
            teacher: "ممدوح",
            title: "_لمراجعة الأولى الأسئلة + الإجابات",
            url: "https://drive.google.com/file/d/1ru6X6aiIx9LAeLlYmluvPufocX68vLpK/view?usp=drivesdk"
        },
        {
            teacher: "ممدوح",
            title: "محاضرة شرح بالتفصيل",
            url: "https://drive.google.com/file/d/1HVfFwu1-p5THG1eo6NjKKJhJVHuyomno/view?usp=drivesdk"
        },
        {
            teacher: "ممدوح",
            title: "المراجعة الثانية _ دكتور ممدوح _ جزء الاسئلة + الاجابات",
            url: "https://drive.google.com/file/d/1vWfSMq8jB9-NZjIK5LA_SYT04ZwXtgy6/view?usp=drivesdk"
        },
        {
            teacher: "ممدوح",
            title: "المراجعة الثانية _ دكتور ممدوح _ جزء ( الشرح )",
            url: "https://drive.google.com/file/d/1yv3nn57XUUaz1X3ID03TKYJ5FLyaekT_/view?usp=drivesdk"
        }
    ];

    const teacherFiles = files.filter(file =>
        name.includes(file.teacher)
    );

    teacherFiles.forEach(file => {
        const link = document.createElement("a");

        link.textContent = "📄 " + file.title;
        link.href = file.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "main-btn";
        link.style.display = "block";
        link.style.margin = "10px auto";
        link.style.maxWidth = "350px";

        filesList.appendChild(link);
    });

    if (teacherFiles.length === 0) {
        filesList.textContent = "لا توجد ملفات مضافة حاليًا.";
    }

    contentList.appendChild(heading);
    contentList.appendChild(filesList);
}



function goHome() {
    home.hidden = false;
    backButton.hidden = true;
    sectionTitle.textContent = "";
    contentList.innerHTML = "";
}




