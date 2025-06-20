import{_ as n,c as a,o as p,ag as i}from"./chunks/framework.BRw2fNsA.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"prev":false,"next":false},"headers":[],"relativePath":"tools/git/3-其他/1-.gitignore配置.md","filePath":"tools/git/3-其他/1-.gitignore配置.md"}'),l={name:"tools/git/3-其他/1-.gitignore配置.md"};function e(t,s,c,o,h,r){return p(),a("div",null,s[0]||(s[0]=[i(`<h2 id="gitignore-配置说明" tabindex="-1">.gitignore 配置说明 <a class="header-anchor" href="#gitignore-配置说明" aria-label="Permalink to &quot;.gitignore 配置说明&quot;">​</a></h2><h3 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h3><p>.gitignore 文件用于指定 Git 应忽略的文件或目录，避免将不必要的文件（如编译产物、配置文件、日志等）提交到仓库。</p><h3 id="语法规则" tabindex="-1">语法规则 <a class="header-anchor" href="#语法规则" aria-label="Permalink to &quot;语法规则&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 注释：以 # 开头的行被视为注释</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略单个文件</span></span>
<span class="line"><span>node_modules/         # 忽略整个 node_modules 目录</span></span>
<span class="line"><span>dist/                 # 忽略 dist 目录</span></span>
<span class="line"><span>.DS_Store             # 忽略 macOS 系统文件</span></span>
<span class="line"><span>.idea/                # 忽略 IDE 配置目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略特定类型的文件</span></span>
<span class="line"><span>*.log                 # 忽略所有 .log 文件</span></span>
<span class="line"><span>*.map                 # 忽略所有 .map 文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 排除特定文件（即使在忽略模式中）</span></span>
<span class="line"><span>!src/config.js        # 不忽略 src/config.js 文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略目录中的特定文件</span></span>
<span class="line"><span>node_modules/**/*.txt # 忽略 node_modules 下的所有 .txt 文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 只忽略当前目录下的文件，不包括子目录</span></span>
<span class="line"><span>config.js             # 只忽略根目录下的 config.js</span></span></code></pre></div><h3 id="常用忽略模式" tabindex="-1">常用忽略模式 <a class="header-anchor" href="#常用忽略模式" aria-label="Permalink to &quot;常用忽略模式&quot;">​</a></h3><h4 id="前端项目" tabindex="-1">前端项目： <a class="header-anchor" href="#前端项目" aria-label="Permalink to &quot;前端项目：&quot;">​</a></h4><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 依赖和构建</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span>public/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># IDE 和编辑器</span></span>
<span class="line"><span>.idea/</span></span>
<span class="line"><span>.vscode/</span></span>
<span class="line"><span>*.suo</span></span>
<span class="line"><span>*.ntvs*</span></span>
<span class="line"><span>*.njsproj</span></span>
<span class="line"><span>*.sln</span></span>
<span class="line"><span>*.sw?</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 环境配置</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span>.env.local</span></span>
<span class="line"><span>.env.development.local</span></span>
<span class="line"><span>.env.test.local</span></span>
<span class="line"><span>.env.production.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志和缓存</span></span>
<span class="line"><span>npm-debug.log*</span></span>
<span class="line"><span>yarn-debug.log*</span></span>
<span class="line"><span>yarn-error.log*</span></span>
<span class="line"><span>.pnpm-store/</span></span></code></pre></div><h4 id="python-项目" tabindex="-1">Python 项目： <a class="header-anchor" href="#python-项目" aria-label="Permalink to &quot;Python 项目：&quot;">​</a></h4><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 虚拟环境</span></span>
<span class="line"><span>venv/</span></span>
<span class="line"><span>.venv/</span></span>
<span class="line"><span>env/</span></span>
<span class="line"><span>.conda/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 编译产物</span></span>
<span class="line"><span>__pycache__/</span></span>
<span class="line"><span>*.py[cod]</span></span>
<span class="line"><span>*.so</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志和数据库</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>*.db</span></span>
<span class="line"><span>*.sqlite3</span></span>
<span class="line"><span></span></span>
<span class="line"><span># IDE 和编辑器</span></span>
<span class="line"><span>.idea/</span></span>
<span class="line"><span>.vscode/</span></span></code></pre></div><h4 id="java-项目" tabindex="-1">Java 项目： <a class="header-anchor" href="#java-项目" aria-label="Permalink to &quot;Java 项目：&quot;">​</a></h4><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 编译产物</span></span>
<span class="line"><span>target/</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span>bin/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 依赖缓存</span></span>
<span class="line"><span>.gradle/</span></span>
<span class="line"><span>.mvn/</span></span>
<span class="line"><span>.m2/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># IDE 和编辑器</span></span>
<span class="line"><span>.idea/</span></span>
<span class="line"><span>.vscode/</span></span>
<span class="line"><span>*.iml</span></span>
<span class="line"><span>*.ipr</span></span>
<span class="line"><span>*.iws</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 环境配置</span></span>
<span class="line"><span>.env</span></span></code></pre></div><h3 id="全局忽略配置" tabindex="-1">全局忽略配置 <a class="header-anchor" href="#全局忽略配置" aria-label="Permalink to &quot;全局忽略配置&quot;">​</a></h3><p>若希望忽略某些文件类型（如系统文件），可配置全局 .gitignore：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建全局忽略文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.gitignore_global</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加忽略规则</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.DS_Store&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.gitignore_global</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Thumbs.db&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.gitignore_global</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置 Git 使用全局忽略文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core.excludesfile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.gitignore_global</span></span></code></pre></div>`,15)]))}const k=n(l,[["render",e]]);export{g as __pageData,k as default};
