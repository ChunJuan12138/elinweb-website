---
name: 艺林工业供应链
description: 立足包头、辐射周边工矿企业的本地化工业供应链服务商官网视觉系统。
colors:
  primary:
    DEFAULT: "#0f4c81"
    50: "#eff7ff"
    100: "#dbecff"
    200: "#beddff"
    300: "#91c6ff"
    400: "#5aa4f7"
    500: "#3486e6"
    600: "#1f69c4"
    700: "#1a549f"
    800: "#0f4c81"
    900: "#113f68"
    950: "#0b2740"
  accent:
    DEFAULT: "#c23a25"
    50: "#fdf3f1"
    100: "#fde5e1"
    200: "#fbcfc8"
    300: "#f6afa3"
    400: "#ef816e"
    500: "#e35946"
    600: "#c23a25"
    700: "#a42d1d"
    800: "#88291c"
    900: "#71281e"
    950: "#3d110d"
  steel:
    50: "#f7f8f9"
    100: "#eef0f2"
    200: "#dfe2e6"
    300: "#c6ccd3"
    400: "#a7b0ba"
    500: "#8b96a3"
    600: "#77828f"
    700: "#616b76"
    800: "#535b64"
    900: "#484e56"
    950: "#2b2e33"
  background: "#ffffff"
  foreground: "#22252c"
  muted: "#6b7586"
typography:
  display:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.accent.DEFAULT}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "rgba(255,255,255,0.1)"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  feature-card:
    backgroundColor: "rgba(255,255,255,0.1)"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "24px"
  stat-card:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "24px"
  label-pill:
    backgroundColor: "rgba(194,58,37,0.1)"
    textColor: "{colors.accent.DEFAULT}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
  timeline-card:
    backgroundColor: "rgba(255,255,255,0.1)"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "24px"
  rate-card:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "24px"
  list-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel.200}"
    rounded: "{rounded.none}"
    padding: "0px"
---

# Design System: 艺林工业供应链

## Overview

**Creative North Star: "钢铁与承诺"**

艺林的视觉世界建立在两种工业意象的张力之上：钢铁的冷静、厚重、可依赖；承诺的炽烈、在场、说到做到。深蓝色如同设备与秩序，锚定专业感；红色 accent 像现场响应的信号灯，只在关键处出现。整体不是卖货平台的喧闹，而是一家扎根包头工矿现场的服务商的稳重气场。

界面以虚化工业实景为背景、玻璃态卡片为信息层，营造"在现场却不嘈杂"的沉浸感。动效克制，服务于可读与可信；排版紧凑有力，信息密度符合工业客户快速扫读的习惯。

**Key Characteristics:**

- 工业实景图 + 深色遮罩 + 玻璃卡片，构成默认的信息层级
- 红色 accent 小面积、高聚焦，用于标签、边框、主按钮和悬停反馈
- 深蓝 primary 承担品牌识别、链接、页脚等稳定角色
- 几何无衬线字体，负字距标题，制造工业精度感
- 过渡动画以 200–300ms 的位移/透明度变化为主，避免炫技

## Colors

调色板由一组稳定的工业蓝、一组服务承诺红、一组钢铁中性色构成。所有背景图片均经过 blur(8px) + brightness(0.7) 处理，再由深色遮罩统一压暗。

### Primary

- **包头蓝** (`#0f4c81`): 品牌主色，用于 logo 容器、标题文字、页脚背景、链接悬停和稳定结构。在 Hero 与内容区常以 `primary` 或 `primary-50/100` 出现。

### Accent

- **高炉红** (`#c23a25`): 服务承诺与行动色。用于主按钮、section 标签 pill、卡片边框 (`border-accent/60`)、图标悬停状态和核心强调。绝不大面积铺色，只用在对转化和理解最关键的位置。

### Neutral

- **白** (`#ffffff`): 页面底色、卡片上的浅色文字、按钮前景。
- **钢灰 50–950**: 中性灰阶。`steel-200` 用于大段正文（在深色背景上），`steel-300` 用于次要说明文字，`steel-500/600/700` 用于导航默认态和页脚次要信息，`steel-950` 与 primary-950 接近，用于最深背景。
- **前景深灰** (`#22252c`): 浅色背景上的主文字。
- **柔灰** (`#6b7586`): 注释、说明、次要标签。

### Named Rules

**The Red Ration Rule.** 红色 accent 只出现在 ≤10% 的屏幕面积：一个 pill、一条边框、一个按钮、一个悬停点。它的稀缺是其力量来源。

**The One Background Rule.** 每个 Section 只使用一张虚化工业实景图作为背景；禁止纯色白/灰背景块打断沉浸感。

## Typography

**Display / Body Font:** Geist Sans (`var(--font-geist-sans)`)，回退 system-ui、sans-serif
**Mono Font:** Geist Mono (`var(--font-geist-mono)`)，用于代码/数据场景（当前网站使用较少）

**Character:** 几何无衬线，笔画干净、轮廓清晰，配合负字距和略高的行高，在工业实景上仍保持锐利可读。中文环境下保持默认中文字距，不强行应用负字距。

### Hierarchy

- **Display** (700, clamp(2.5rem, 6vw, 4.5rem), 1.1): Hero 主标题，白色，带 `drop-shadow-lg`。
- **Headline** (700, clamp(1.5rem, 3.5vw, 2.5rem), 1.2): Section 标题（`heading-lg`），白色或深色。
- **Title** (600, clamp(1.25rem, 2.5vw, 1.5rem), 1.3): 卡片标题、小标题（`heading-md`）。
- **Body** (400, 1rem / 1.125rem, 1.75): 正文段落（`body-base` / `body-lg`），在深色背景上使用 `steel-200/300`。
- **Label** (700, 0.75rem / 0.875rem, 1.4, uppercase, tracking-wider): Section 小标签 pill，红色 accent，全大写，带 `border-accent/60` 和半透明红底。

### Named Rules

**The Shadow-First Legibility Rule.** 在工业实景上的白色文字必须带文字阴影（`drop-shadow-md`/`drop-shadow-lg`），不能仅靠遮罩层保证对比度。

## Layout

- **容器**: `container-wide` = `max-w-7xl` + 响应式水平内边距 `px-4 sm:px-6 lg:px-8`。
- **栅格**: 内容区常用 `grid items-center gap-12 lg:grid-cols-2`；卡片组用 `grid gap-6 sm:grid-cols-2` 或 `sm:grid-cols-3`。
- **Section 节奏**: `py-16 md:py-24` 为标准上下内边距；全屏 Section 使用 `min-h-screen flex flex-col justify-center`。
- **顶部偏移**: 固定 Header 高度 `h-20 md:h-24`，body 有 `pt-20 md:pt-24`。
- **响应式断点**: 沿用 Tailwind 默认断点；主要适配在 `sm`（640px）、`md`（768px）、`lg`（1024px）三档。

## Elevation & Depth

系统不使用传统阴影营造层级，而是依赖三层机制：虚化背景图 → 深色遮罩 → 半透明玻璃卡片。卡片自身仅有轻量 `shadow-sm` 或 `shadow-md`，_hover_ 时升到 `shadow-lg` 并微上移 `translateY(-4px)`。

### Shadow Vocabulary

- **sm** (`0 1px 2px 0 rgb(0 0 0 / 0.05)`): 按钮、小元素 resting 态。
- **md** (`0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`): 滚动后的 Header、Hero CTA 按钮。
- **lg** (`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): 卡片悬停态、重要容器。

### Named Rules

**The Glass Layer Rule.** 信息必须落在半透明毛玻璃卡片（`bg-white/5` 至 `bg-white/15`，`backdrop-blur-sm`，`border-accent/60`）上，不能直接贴在实景背景上。

## Shapes

- **圆角策略**: 按钮、输入框、logo 容器用 `rounded-lg` (8px)；卡片、占位图用 `rounded-xl` (12px)；标签 pill、图标容器用 `rounded-full`。
- **边框**: 玻璃卡片统一使用 `1px solid rgba(194,58,37,0.6)`（`border-accent/60`）作为视觉锚点；按钮和页脚分隔线使用低透明度白/灰边框。
- **图标容器**: 圆形或圆角方形，半透明背景，悬停时反转为 accent 红底白字。
- **工业背景图**: 全出血，object-cover，统一 `blur(8px) brightness(0.7)`，叠加从右至左、从底至顶的渐变遮罩。

## Components

### Buttons

- **Shape:** `rounded-lg` (8px)，内边距 `px-6 py-3`（或 `px-8 py-3` 的强调版本）。
- **Primary:** 高炉红背景 (`bg-accent`)，白色文字，hover 上移 + 加深到 `accent-700`。
- **Secondary:** 透明毛玻璃 (`bg-white/10`, `border-white/30`)，白色文字，hover 背景加深。
- **Outline:** 白色背景，steel-300 边框，深色文字，hover 边框与文字变 primary 蓝。
- **Focus:** 统一 `focus:ring-2 focus:ring-offset-2`，颜色匹配按钮类型。

### Cards / Containers

- **Feature Card:** `rounded-xl`，`border-accent/60`，`bg-white/10`，`backdrop-blur-sm`，hover 上移 + 边框变实色 accent + 背景变浅。
- **Stat Card:** 同 Feature Card，但背景更透明 (`bg-white/5`)，居中数字 + 图标，hover 与 Feature Card 一致。
- **Logo Frame:** `rounded-lg`，`bg-primary-50`，hover `bg-primary-100`，带一道白色扫光动画。
- **Content Block:** `rounded-xl`，`border-accent/60`，`bg-white/10`，用于大段说明或定位陈述。

### Navigation

- **Header:** 固定顶部，滚动前 `bg-white/80 border-white/10`，滚动后 `bg-white/95 border-steel-200 shadow-md`。
- **Nav Link:** 默认 `steel-700`，hover 变 `primary`，底部 accent 红下划线从 0 展开到全宽。
- **Mobile Menu:** 全宽白色抽屉，垂直链接列表，hover 变 primary。

### Label Pill

- **Style:** `rounded-full`，`border-accent/60`，`bg-accent/10`，`text-accent`， uppercase，tracking-wider，用于 Section 副标题或标签。

### Timeline / Milestone

- **Shape:** 时间线主轴为 `1px` 半透明白线 (`bg-white/20`)，居中或靠左布局。
- **节点:** 圆形 `rounded-full` 徽章，`bg-accent` 白字，年份/编号居中，带 `shadow-md`。
- **卡片:** Feature Card 承载内容，位于节点一侧；移动端堆叠，桌面端左右交替。
- **State:** 节点不参与悬停，卡片保持 Feature Card 的 hover 行为。

### Rate / Pricing Card

- **Shape:** `rounded-xl`，`border-accent/60`，`bg-white/5`，居中文字，比 Stat Card 更轻。
- **结构:** 顶部小标签（服务类型）+ 中间大号数值/范围（`text-2xl md:text-3xl font-bold text-white`）+ 底部说明（`text-xs text-steel-400`）。
- **Use:** 收费标准页的对内参考费率矩阵；hover 上移 + 背景变浅。

### Check List

- **Shape:** 透明背景，无圆角；每条为 flex 行，左侧 accent 色勾选图标（`text-accent`），右侧 `text-steel-200` 文字。
- **Container:** 外层用 `rounded-xl` + `border-accent/60` + `bg-white/10` + `backdrop-blur-sm` 的 Content Block 包裹。
- **Use:** 收费标准页的"对外标准表述"、未来可能的服务条款/承诺清单。

### Placeholder Image

- **Industrial variant:** `rounded-xl`，内部是 `IndustrialBackground` + 遮罩，中央白色图标 + 标题 + "图片占位，后续替换" 说明。
- **Default variant:** `rounded-xl`，`border-2 border-dashed border-steel-300`，`bg-steel-50`，灰色图标和文字，用于非工业场景或后台占位。
- **Icon:** 圆形容器，`bg-white/10` + `ring-1 ring-white/20`（industrial）或 `bg-steel-200`（default）。

### Inputs / Fields

当前网站无表单输入组件。如需新增，应遵循：
- `rounded-lg` 边框输入框，focus 边框变 primary，`focus:ring-2 focus:ring-primary`。
- 禁用态背景 `steel-100`，文字 `steel-400`。

## Do's and Don'ts

### Do:

- **Do** 使用虚化工业实景图作为每个 Section 的背景，并叠加深色遮罩。
- **Do** 把关键信息放在半透明毛玻璃卡片上，边框使用 `border-accent/60`。
- **Do** 保持红色 accent 的小面积、高聚焦用法：标签、按钮、悬停反馈、图标反转。
- **Do** 为实景背景上的白色文字添加文字阴影。
- **Do** 使用 Geist Sans 全站，标题加粗并带 `-0.02em` 字距。

### Don't:

- **Don't** 使用纯白或纯灰的纯色背景作为 Section 主背景。
- **Don't** 把红色 accent 用于大面积填充或背景。
- **Don't** 让文字直接贴在未处理的工业照片上。
- **Don't** 在中文标题上强行应用英文负字距；中文保持默认字距。
- **Don't** 添加与工业稳重感冲突的活泼插画或卡通元素。
