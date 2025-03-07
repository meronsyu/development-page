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
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });

    // タイトルのグリッチエフェクト
    const title = document.querySelector('header h1');
    if (title) {
        setInterval(() => {
            if (Math.random() > 0.98) {
                title.style.textShadow = '2px 2px 0 #0099cc, -2px -2px 0 #0099cc';
                setTimeout(() => {
                    title.style.textShadow = '3px 3px 0 #0099cc, 6px 6px 0 rgba(0,0,0,0.3)';
                }, 200);
            }
        }, 1500);
    }

    // プロジェクトカードのホバーエフェクト
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0 10px 20px rgba(0, 153, 204, 0.3)";
        });
        card.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
        });
    });

    // フッターボタンのクリックエフェクト
    const contactButton = document.querySelector(".retro-btn");
    if (contactButton) {
        contactButton.addEventListener("mousedown", function() {
            this.style.transform = "scale(0.95)";
        });
        contactButton.addEventListener("mouseup", function() {
            this.style.transform = "scale(1)";
        });
    }
});
