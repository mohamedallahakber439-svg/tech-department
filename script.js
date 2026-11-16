
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
    "د. نسرين"
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
        {
            title: "المراجعة الأولى - الأسئلة",
            url: "https://drive.google.com/file/d/1jhPMxptztz2ikLBSpc_mBSD74vW0jdTd/view"
        },
        {
            title: "المراجعة الأولى - الإجابات",
            url: "https://drive.google.com/file/d/1MH73HkLd02TkgZ9ORR4GEbBIYculAara/view"
        },
        {
            title: "المراجعة الأولى - الشرح",
            url: "https://drive.google.com/file/d/15p0fVl8zqo6vENM9veZmQV5dM5YTJiOb/view"
        }
    ];

    if (name.includes("أمل")) {
        files.forEach(file => {
            const link = document.createElement("a");
            link.textContent = "📄 " + file.title;
            link.href = file.url;
            link.target = "_blank";
            link.className = "main-btn";
            link.style.display = "block";
            link.style.margin = "10px auto";
            link.style.maxWidth = "350px";

            filesList.appendChild(link);
        });
    } else {
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

