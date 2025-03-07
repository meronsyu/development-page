document.addEventListener("DOMContentLoaded", function () {
    // スムーズスクロール
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ダーク/ライトテーマの切り替え
    const themeToggle = document.createElement('button');
    themeToggle.innerText = "テーマ切替";
    themeToggle.style.position = "fixed";
    themeToggle.style.top = "10px";
    themeToggle.style.right = "10px";
    themeToggle.style.padding = "10px";
    themeToggle.style.background = "#58a6ff";
    themeToggle.style.color = "#fff";
    themeToggle.style.border = "none";
    themeToggle.style.cursor = "pointer";
    document.body.appendChild(themeToggle);
    
    let darkMode = true;
    themeToggle.addEventListener('click', () => {
        if (darkMode) {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
        } else {
            document.body.style.backgroundColor = "#0d1117";
            document.body.style.color = "#c9d1d9";
        }
        darkMode = !darkMode;
    });

    // プロジェクトセクションのフェードインアニメーション
    const projectSection = document.getElementById("projects");
    window.addEventListener("scroll", function () {
        const sectionPos = projectSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.5;
        if (sectionPos < screenPos) {
            projectSection.style.opacity = "1";
            projectSection.style.transform = "translateY(0)";
        }
    });
    projectSection.style.opacity = "0";
    projectSection.style.transform = "translateY(50px)";
    projectSection.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
});
