const arBtn = document.getElementById("ar-btn");
const enBtn = document.getElementById("en-btn");

// تغيير اللغة
function changeLanguage(lang){

    if(lang==="ar"){

        document.documentElement.lang="ar";
        document.documentElement.dir="rtl";

        document.getElementById("logo").innerHTML="جود<span>.</span>";

        document.getElementById("nav-home").textContent="الرئيسية";
        document.getElementById("nav-about").textContent="نبذة عني";
        document.getElementById("nav-projects").textContent="المشاريع";
        document.getElementById("nav-skills").textContent="المهارات";
        document.getElementById("nav-certificates").textContent="الشهادات";
        document.getElementById("nav-contact").textContent="تواصل";

        document.getElementById("hero-greeting").textContent="مرحبًا، أنا";
        document.getElementById("hero-name").textContent="جود المحمادي";
        document.getElementById("hero-job").textContent="مطورة ويب";

        document.getElementById("hero-description").textContent=
        "أطور مواقع ويب حديثة تجمع بين التصميم الجذاب والأداء المتميز.";

        document.getElementById("btn-projects").textContent="عرض المشاريع";
        document.getElementById("btn-contact").textContent="تواصل معي";

        document.getElementById("about-title").textContent="نبذة عني";
        document.getElementById("about-subtitle").textContent="من أنا؟";

        document.getElementById("about-text").textContent=
        "أنا جود المحمادي، متخصصة في برمجة وتطوير الويب، أهتم بتطوير مواقع ويب حديثة تجمع بين التصميم الجذاب والأداء المتميز. أسعى باستمرار إلى تطوير مهاراتي وتنفيذ مشاريع تعكس شغفي بالتقنية وحرصي على تقديم تجارب استخدام مميزة.";

        document.getElementById("projects-title").textContent="المشاريع";

document.getElementById("project2-title").textContent =
"EmotiView - المرآة الذكية";

document.getElementById("project2-desc").textContent =
"تطبيق مرآة ذكية يعتمد على الذكاء الاصطناعي لتحليل تعابير الوجه والتعرف على الحالة النفسية، مع عرض النتائج داخل تطبيق Flutter المرتبط بخادم التحليل لتقديم تجربة تفاعلية للمستخدم.";
  document.getElementById("project3-title").textContent =
"موقع حساب العمر";

document.getElementById("project3-desc").textContent =
"تطبيق ويب لحساب العمر بدقة اعتمادًا على تاريخ الميلاد، مع حفظ جميع عمليات الحساب في قاعدة بيانات MySQL باستخدام PHP، بالإضافة إلى عرض سجل العمليات السابقة.";

document.getElementById("project1-title").textContent = "الموقع الشخصي";

document.getElementById("project1-desc").textContent =
"موقع شخصي احترافي يعرض مهاراتي التقنية، وأبرز مشاريعي، وشهاداتي، وسيرتي الذاتية، بتصميم عصري ومتجاوب يوفر تجربة استخدام سهلة ويعكس خبرتي في تطوير الويب.";

}else{

    document.getElementById("project1-title").textContent = "Personal Portfolio";

document.getElementById("project1-desc").textContent =
"A professional portfolio website showcasing my technical skills, featured projects, certificates, and resume through a modern, responsive, and user-friendly design.";

document.getElementById("project3-title").textContent =
"Age Calculator Website";

document.getElementById("project3-desc").textContent =
"A web application that calculates the user's exact age based on the date of birth. The system stores visitor records in a MySQL database using PHP, providing accurate age calculations and visit history.";

        document.getElementById("project2-title").textContent =
"EmotiView - AI Smart Mirror";

document.getElementById("project2-desc").textContent =
"An AI-powered smart mirror that analyzes facial expressions to detect emotions and displays the results through a Flutter application connected to an AI backend, providing an interactive user experience.";

        document.documentElement.lang="en";
        document.documentElement.dir="ltr";

        document.getElementById("logo").innerHTML="Joud<span>.</span>";

        document.getElementById("nav-home").textContent="Home";
        document.getElementById("nav-about").textContent="About";
        document.getElementById("nav-projects").textContent="Projects";
        document.getElementById("nav-skills").textContent="Skills";
        document.getElementById("nav-certificates").textContent="Certificates";
        document.getElementById("nav-contact").textContent="Contact";

        document.getElementById("hero-greeting").textContent="Hello, I'm";
        document.getElementById("hero-name").textContent="Joud Al-Mehmadi";
        document.getElementById("hero-job").textContent="Web Developer";

        document.getElementById("hero-description").textContent=
        "Building modern websites with a focus on clean design and great user experience.";

        document.getElementById("btn-projects").textContent="View Projects";
        document.getElementById("btn-contact").textContent="Contact Me";

        document.getElementById("about-title").textContent="About Me";
        document.getElementById("about-subtitle").textContent="Who Am I?";

        document.getElementById("about-text").textContent=
        "I am Joud Al-Mehmadi, specializing in Web Development. I enjoy building modern websites that combine attractive design with excellent performance. I continuously improve my skills by creating projects and learning new technologies.";

        document.getElementById("projects-title").textContent="Projects";

    }

    localStorage.setItem("language",lang);

}

arBtn.onclick=()=>changeLanguage("ar");
enBtn.onclick=()=>changeLanguage("en");

const savedLang=localStorage.getItem("language")||"en";
changeLanguage(savedLang);
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function () {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};
