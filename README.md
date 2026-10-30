# Aether Jewels — Luxury Jewelry Collectibles Website

高端珠宝收藏品展示与售卖网站（中英双语）

## 品牌定位
- **品牌名**：Aether Jewels
- **目标市场**：欧美收藏家与鉴赏家
- **风格**：极简奢华（黑金白配色 + 大图 + 优雅衬线字体）
- **语言**：中英文一键切换

## 功能清单

### 前台
- 首页 Hero + 精选作品 + 品牌故事预览
- 收藏页：分类筛选（戒指 / 项链 / 耳饰 / 手镯 / 其他）
- 作品详情页：大图、材质、产地、年代、成色、描述
- 咨询清单（类似购物车，适合高价值收藏品）
- 联系页：预约与询盘表单
- 完整中英双语切换（记住用户选择）

### 后台（admin.html）
- 密码登录（默认密码：`aether2025`）
- 上传图片 + 填写中英文名称与描述
- 设置分类、价格、材质、产地、年代、成色
- 标记首页精选
- 删除作品
- 数据保存在浏览器 localStorage（演示用）

## 如何使用

1. 直接用浏览器打开 `index.html` 即可预览全站
2. 后台入口：打开 `admin.html`
3. 默认密码：`aether2025`（请务必修改）

## 技术说明

- 纯前端实现（HTML + CSS + JavaScript）
- 无框架依赖，加载极快
- 图片支持本地上传（Base64 存入 localStorage）
- 响应式设计，手机与桌面完美适配

## 上线建议（真实运营）

当前为完整可演示版本。正式上线建议：

1. **后端**：Node.js + Express / NestJS 或 Next.js
2. **数据库**：MongoDB / PostgreSQL 存储商品
3. **图片存储**：Cloudinary / AWS S3 / 阿里云 OSS
4. **支付**：Stripe（欧美）+ 加密货币选项
5. **邮件通知**：Resend / SendGrid 处理询盘
6. **CMS 备选**：Strapi / Sanity / Shopify（如果走电商）
7. **域名与托管**：Vercel / Netlify / Cloudflare Pages

## 文件结构

```
aether-jewels/
├── index.html          # 首页
├── collection.html     # 收藏列表
├── product.html        # 作品详情
├── about.html          # 关于我们
├── contact.html        # 联系咨询
├── admin.html          # 管理后台
├── css/style.css       # 全站样式
├── js/app.js           # 核心逻辑（i18n + 商品 + 购物车）
└── README.md
```

## 自定义

- 修改品牌名：全局搜索 `Aether` / `AETHER`
- 修改后台密码：打开 `js/app.js`，找到 `ADMIN_PASSWORD`
- 替换示例商品：进入后台删除后重新添加，或直接编辑 localStorage
- 颜色调整：`css/style.css` 顶部 CSS 变量

---

设计与开发完成。页面高端大气，符合欧美奢侈品审美，同时完整支持中文。  
如需对接真实后端、支付或进一步定制，随时告诉我。