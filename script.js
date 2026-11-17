
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
        },
        // ملفات د. ممدوح الجديدة
        {
            teacher: "ممدوح",
            title: "المراجعة الأولى (شرح)",
            url: "https://drive.google.com/file/d/1VgskbdI1dxEnis7pevC4GpsSQJn8A4qq/view?usp=drivesdk"
        },
        {
            teacher: "ممدوح",
            title: "الأسئلة + الإجابات",
            url: "https://drive.google.com/file/d/1ru6X6aiIx9LAeLlYmluvPufocX68vLpK/view?usp=drivesdk"
        },
        {
            teacher: "ممدوح",
            title: "محاضرة شرح بالتفصيل",
            url: "https://drive.google.com/file/d/1HVfFwu1-p5THG1eo6NjKKJhJVHuyomno/view?usp=drivesdk"
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




