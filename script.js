
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

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.accept = ".pdf,application/pdf";
    fileInput.hidden = true;

    const uploadButton = document.createElement("button");
    uploadButton.className = "main-btn";
    uploadButton.textContent = "إضافة ملفات PDF";

    const filesList = document.createElement("div");
    filesList.className = "files-list";

    uploadButton.onclick = () => fileInput.click();

    fileInput.onchange = () => {
        filesList.innerHTML = "";

        Array.from(fileInput.files).forEach(file => {
            const link = document.createElement("a");
            link.textContent = "📄 " + file.name;
            link.href = URL.createObjectURL(file);
            link.target = "_blank";
            link.className = "main-btn";
            link.style.display = "block";
            link.style.margin = "10px auto";
            link.style.maxWidth = "350px";

            filesList.appendChild(link);
        });
    };

    contentList.appendChild(heading);
    contentList.appendChild(fileInput);
    contentList.appendChild(uploadButton);
    contentList.appendChild(filesList);
}


function goHome() {
    home.hidden = false;
    backButton.hidden = true;
    sectionTitle.textContent = "";
    contentList.innerHTML = "";
}
