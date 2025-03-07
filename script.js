/* スタイリッシュでAIっぽいデザインのCSS */
@font-face {
    font-family: 'PixelMplus';
    src: url('fonts/PixelMplus12-Regular.ttf') format('truetype');
    font-display: swap;
}

body {
    font-family: 'PixelMplus', sans-serif;
    background-color: #0d1117;
    color: #c9d1d9;
    margin: 0;
    padding: 0;
    text-align: center;
    background-image: radial-gradient(circle, #141a24 0%, #0d1117 100%);
}

/* ヘッダー */
header {
    background: linear-gradient(to right, #141a24, #1b2635, #141a24);
    color: #fff;
    padding: 3rem 0 2rem;
    border-bottom: 3px solid #00ffcc;
    box-shadow: 0px 4px 10px rgba(0, 255, 204, 0.2);
    text-transform: uppercase;
}

header h1 {
    font-size: 3rem;
    text-shadow: 0 0 15px #00ffcc;
    letter-spacing: 2px;
}

/* ナビゲーション */
nav {
    background: #1b2635;
    padding: 0.6rem 0;
    box-shadow: 0 4px 10px rgba(0, 255, 204, 0.15);
    position: sticky;
    top: 0;
    z-index: 100;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    gap: 20px;
}

nav a {
    color: #c9d1d9;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}

nav a:hover {
    background: #00ffcc;
    color: #0d1117;
    box-shadow: 0 0 10px #00ffcc;
}

/* プロジェクトカード */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
}

.project-card {
    background: linear-gradient(to bottom, #1b2635, #141a24);
    border: 1px solid #00ffcc;
    border-radius: 10px;
    padding: 1.5rem;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 6px 15px rgba(0, 255, 204, 0.15);
    text-align: left;
}

.project-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 12px 30px rgba(0, 255, 204, 0.3);
}

.project-title {
    font-size: 1.4rem;
    color: #00ffcc;
}

.project-description {
    font-size: 1rem;
    color: #c9d1d9;
    margin: 10px 0;
}

.project-footer a {
    display: inline-block;
    padding: 10px 15px;
    background: #00ffcc;
    color: #0d1117;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}

.project-footer a:hover {
    background: #0099aa;
    box-shadow: 0 0 10px #00ffcc;
}

/* フッター */
footer {
    background: #1b2635;
    color: #00ffcc;
    padding: 2rem 0;
    margin-top: 2rem;
    border-top: 3px solid #00ffcc;
    box-shadow: 0px -4px 10px rgba(0, 255, 204, 0.2);
}
