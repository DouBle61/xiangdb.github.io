// =============================================================
// 全站数据：所有文字、图片路径集中在这里管理
// 修改内容只需要改这个文件！
// =============================================================

const SITE_DATA = {

  // ---- 默认名片 ----
  defaultProfile: {
    avatar: 'assets/img/125.jpg',
    name: '郭勇 DouBle',
    bio: '设计 · 编导 · 研究 · 公益<br/>不给自己设限。',
    showSocial: true,        // true = 显示社交图标
    subBio: ''               // 空 = 不显示下方身份文字
  },

  // ---- 各身份名片 ----
  profiles: {
    design: {
      avatar: 'assets/img/125.jpg',
      name: '郭勇 DouBle',
      bio: '视觉设计师 / 品牌策划人',
      showSocial: false,
      subBio: '擅长 UI/UX、品牌视觉、平面海报。<br/>相信设计是理性与感性的交汇点。<br/>作品曾入选多个设计展览。'
    },
    direct: {
      avatar: 'assets/img/125.jpg',
      name: '郭勇 DouBle',
      bio: '编导 / 内容创作者',
      showSocial: false,
      subBio: '独立编导多部短片与校园晚会。<br/>用镜头和声音讲述有温度的故事。<br/>从脚本到后期，全流程把控。'
    },
    scholar: {
      avatar: 'assets/img/125.jpg',
      name: '郭勇 DouBle',
      bio: '青年学者 / 研究者',
      showSocial: false,
      subBio: '关注传播学、数字媒体与文化研究。<br/>持续探索学术与实践的交叉地带。<br/>发表 CSSCI 论文若干。'
    },
    charity: {
      avatar: 'assets/img/125.jpg',
      name: 'DouBle',
      bio: '郭勇 公益行动者 / 志愿者',
      showSocial: false,
      subBio: '参与多项乡村教育与环保公益。<br/>相信每一份微小的善意都有回响。<br/>累计志愿服务 500+ 小时。'
    },
    life: {
      avatar: 'assets/img/125.jpg',
      name: '郭勇 DouBle',
      bio: '生活记录者',
      showSocial: false,
      subBio: '喜欢咖啡、旅行、胶片摄影。<br/>在日常中发现不日常的美。<br/>用快门记住每一个瞬间。'
    }
  },

  // ---- 主页四卡片 ----
  homeCards: [
    { id: 'design',  title: '设计 DouBle', image: 'assets/img/home-design.jpg',  page: 'design'  },
    { id: 'direct',  title: '编导 DouBle', image: 'assets/img/home-direct.jpg',  page: 'direct'  },
    { id: 'scholar', title: '研究 DouBle', image: 'assets/img/home-scholar.jpg', page: 'scholar' },
    { id: 'charity', title: '公益 DouBle', image: 'assets/img/home-charity.jpg', page: 'charity' },
  ],

  // 主页中央圆形图片
  homeLifeCircle: 'assets/img/home-life.jpg',

  // ---- 设计作品 ----
  designWorks: [
    {
      id: 'design-1', title: '品牌视觉重塑',
      cover: 'assets/img/design/work1-cover.jpg', date: '2025.06',
      images: [
        'assets/img/design/work1-1.jpg', 'assets/img/design/work1-2.jpg',
        'assets/img/design/work1-3.jpg', 'assets/img/design/work1-4.jpg',
        'assets/img/design/work1-5.jpg',
      ]
    },
    {
      id: 'design-2', title: 'APP 界面设计',
      cover: 'assets/img/design/work2-cover.jpg', date: '2025.03',
      images: [
        'assets/img/design/work2-1.jpg', 'assets/img/design/work2-2.jpg',
        'assets/img/design/work2-3.jpg', 'assets/img/design/work2-4.jpg',
      ]
    },
    {
      id: 'design-3', title: '海报系列创作',
      cover: 'assets/img/design/work3-cover.jpg', date: '2024.12',
      images: [
        'assets/img/design/work3-1.jpg', 'assets/img/design/work3-2.jpg',
        'assets/img/design/work3-3.jpg',
      ]
    },
    {
      id: 'design-4', title: '展览主视觉设计',
      cover: 'assets/img/design/work4-cover.jpg', date: '2024.09',
      images: [
        'assets/img/design/work4-1.jpg', 'assets/img/design/work4-2.jpg',
        'assets/img/design/work4-3.jpg', 'assets/img/design/work4-4.jpg',
      ]
    },
    {
      id: 'design-5', title: '产品包装设计',
      cover: 'assets/img/design/work5-cover.jpg', date: '2024.06',
      images: ['assets/img/design/work5-1.jpg', 'assets/img/design/work5-2.jpg']
    },
    {
      id: 'design-6', title: '字体实验项目',
      cover: 'assets/img/design/work6-cover.jpg', date: '2024.03',
      images: [
        'assets/img/design/work6-1.jpg', 'assets/img/design/work6-2.jpg',
        'assets/img/design/work6-3.jpg',
      ]
    },
    {
      id: 'design-7', title: '摄影画册排版',
      cover: 'assets/img/design/work7-cover.jpg', date: '2023.12',
      images: ['assets/img/design/work7-1.jpg', 'assets/img/design/work7-2.jpg']
    },
    {
      id: 'design-8', title: '社交媒体视觉',
      cover: 'assets/img/design/work8-cover.jpg', date: '2023.09',
      images: [
        'assets/img/design/work8-1.jpg', 'assets/img/design/work8-2.jpg',
        'assets/img/design/work8-3.jpg',
      ]
    },
  ],

  // ---- 编导作品 ----
  directWorks: [
    {
      id: 'direct-1', title: '短片《回声》', type: 'video',
      cover: 'assets/img/direct/work1-cover.jpg', date: '2025.05',
      videoSrc: 'assets/img/direct/work1-video.mp4',
    },
    {
      id: 'direct-2', title: '校园跨年晚会总导演', type: 'event',
      cover: 'assets/img/direct/work2-cover.jpg', date: '2024.12',
      description: '担任 2024 年校园跨年晚会总导演，统筹 200+ 人团队，策划 15 个节目，观���超过 3000 人。',
      images: [
        { src: 'assets/img/direct/work2-1.jpg', caption: '晚会舞台主视觉' },
        { src: 'assets/img/direct/work2-2.jpg', caption: '排练现场' },
        { src: 'assets/img/direct/work2-3.jpg', caption: '演出当晚' },
        { src: 'assets/img/direct/work2-4.jpg', caption: '团队合影' },
      ]
    },
    {
      id: 'direct-3', title: '纪录片《手艺》', type: 'video',
      cover: 'assets/img/direct/work3-cover.jpg', date: '2024.08',
      videoSrc: 'assets/img/direct/work3-video.mp4',
    },
    {
      id: 'direct-4', title: '广播剧《深夜电台》', type: 'video',
      cover: 'assets/img/direct/work4-cover.jpg', date: '2024.04',
      videoSrc: 'assets/img/direct/work4-audio.mp3',
    },
    {
      id: 'direct-5', title: '毕业典礼导演', type: 'event',
      cover: 'assets/img/direct/work5-cover.jpg', date: '2025.06',
      description: '负责毕业典礼整体流程设计与现场执行，在线观看突破 10 万人次。',
      images: [
        { src: 'assets/img/direct/work5-1.jpg', caption: '典礼主视觉' },
        { src: 'assets/img/direct/work5-2.jpg', caption: '现场全景' },
        { src: 'assets/img/direct/work5-3.jpg', caption: '学位授予仪式' },
      ]
    },
  ],

  // ---- 学者作品 ----
  scholarWorks: [
    {
      id: 'scholar-1', title: '数字媒体时代的叙事重构',
      cover: 'assets/img/scholar/work1-cover.jpg', date: '2025.08',
      content: `<h3 class="text-base font-semibold text-gray-800 mb-2">摘要</h3>
        <p class="text-gray-500 leading-relaxed mb-4 text-sm">本文探讨在数字媒体快速迭代的背景下，传统叙事结构如何被解构与重塑。通过对短视频平台、互动影像、AI 生成内容三种新兴媒介形态的案例分析，研究发现叙事的线性逻辑正在被碎片化、参与式和算法驱动的新范式所取代。</p>
        <h3 class="text-base font-semibold text-gray-800 mb-2">关键词</h3>
        <p class="text-gray-500 leading-relaxed mb-4 text-sm">数字叙事、媒介转型、互动影像、算法推荐、用户共创</p>
        <h3 class="text-base font-semibold text-gray-800 mb-2">主要发现</h3>
        <p class="text-gray-500 leading-relaxed text-sm">1. 叙事单元从「故事」缩减为「时刻」。<br/>2. 观众的选择直接影响叙事走向。<br/>3. AI 生成内容模糊了创作者与工具的边界。</p>`,
      images: ['assets/img/scholar/work1-1.jpg'],
    },
    {
      id: 'scholar-2', title: '社交媒体与青年身份认同',
      cover: 'assets/img/scholar/work2-cover.jpg', date: '2025.03',
      content: `<h3 class="text-base font-semibold text-gray-800 mb-2">摘要</h3>
        <p class="text-gray-500 leading-relaxed mb-4 text-sm">本研究聚焦 Z 世代在社交媒体上的自我呈现策略，探讨「数字人设」与「真实自我」之间的张力。</p>
        <h3 class="text-base font-semibold text-gray-800 mb-2">方法</h3>
        <p class="text-gray-500 leading-relaxed text-sm">结合 30 名大学生深度访谈与 500 份问卷数据的混合研究。</p>`,
      images: [],
    },
    {
      id: 'scholar-3', title: '乡村振兴中的文化传播',
      cover: 'assets/img/scholar/work3-cover.jpg', date: '2024.10',
      content: `<h3 class="text-base font-semibold text-gray-800 mb-2">研究计划</h3>
        <p class="text-gray-500 leading-relaxed mb-4 text-sm">考察乡村振兴战略下，数字传播工具如何赋能地方文化资源的发掘与推广。</p>
        <h3 class="text-base font-semibold text-gray-800 mb-2">预期成果</h3>
        <p class="text-gray-500 leading-relaxed text-sm">形成数字文化传播策略框架，完成 3 个典型案例深度调查，发表 CSSCI 论文 1-2 篇。</p>`,
      images: ['assets/img/scholar/work3-1.jpg', 'assets/img/scholar/work3-2.jpg'],
    },
    {
      id: 'scholar-4', title: '视觉修辞与公共说服力',
      cover: 'assets/img/scholar/work4-cover.jpg', date: '2024.05',
      content: `<h3 class="text-base font-semibold text-gray-800 mb-2">摘要</h3>
        <p class="text-gray-500 leading-relaxed text-sm">分析公益广告、政治海报和社交媒体 meme 中的视觉修辞策略。研究发现视觉隐喻和情感唤起是最有效的两种说服策略。</p>`,
      images: [],
    },
  ],

  // ---- 公益作品 ----
  charityWorks: [
    {
      id: 'charity-1', title: '山区支教手记',
      cover: 'assets/img/charity/work1-cover.jpg', date: '2025.07',
      content: `<p class="text-gray-600 leading-relaxed mb-3 text-sm">2025 年暑期，前往云南山区小学支教三周。教授美术和语文课程，用镜头记录孩子们的日常。</p>
        <p class="text-gray-600 leading-relaxed text-sm">他们的教室只有两间，黑板裂了好几道缝。但每个孩子的眼睛里，都藏着一整个宇宙。</p>`,
      images: [
        { src: 'assets/img/charity/work1-1.jpg', caption: '和孩子们在操场上' },
        { src: 'assets/img/charity/work1-2.jpg', caption: '美术课作品展示' },
        { src: 'assets/img/charity/work1-3.jpg', caption: '离别那天' },
      ]
    },
    {
      id: 'charity-2', title: '流浪动物救助',
      cover: 'assets/img/charity/work2-cover.jpg', date: '2025.02',
      content: `<p class="text-gray-600 leading-relaxed text-sm">参与动物保护组织的周末救助行动，负责拍摄记录与社交媒体传播。帮助 12 只流浪猫狗找到新家。「每一个生命都值得被温柔以待。」</p>`,
      images: [
        { src: 'assets/img/charity/work2-1.jpg', caption: '救助现场' },
        { src: 'assets/img/charity/work2-2.jpg', caption: '送养成功的小橘' },
      ]
    },
    {
      id: 'charity-3', title: '环保市集策展',
      cover: 'assets/img/charity/work3-cover.jpg', date: '2024.11',
      content: `<p class="text-gray-600 leading-relaxed text-sm">作为策展人统筹了以「可持续生活」为主题的城市环保市集，汇聚 30+ 品牌、200+ 参与者。</p>`,
      images: [
        { src: 'assets/img/charity/work3-1.jpg', caption: '市集主视觉' },
        { src: 'assets/img/charity/work3-2.jpg', caption: '活动当天' },
        { src: 'assets/img/charity/work3-3.jpg', caption: '参与者合影' },
        { src: 'assets/img/charity/work3-4.jpg', caption: '回收改造工作坊' },
      ]
    },
    {
      id: 'charity-4', title: '乡村图书馆计划',
      cover: 'assets/img/charity/work4-cover.jpg', date: '2024.06',
      content: `<p class="text-gray-600 leading-relaxed text-sm">发起为贵州山区小学建设迷你图书馆的众筹项目，筹集图书 2000 余册，覆盖 3 所学校。从线上众筹到实地搭建，全程参与。</p>`,
      images: [
        { src: 'assets/img/charity/work4-1.jpg', caption: '图书馆建成' },
        { src: 'assets/img/charity/work4-2.jpg', caption: '孩子们在阅读' },
      ]
    },
  ],

  // ---- 生活数据（多组，换一换用） ----
  // 每组 = 1 段描述文字 + 6 张图片
  lifeSets: [
    {
      text: '最近的日子，被咖啡和胶片填满。东京的便利店、雨天的窗边、一个人的公路——每一帧都是值得收藏的时刻。',
      photos: [
        'assets/img/life/set1-1.jpg', 'assets/img/life/set1-2.jpg',
        'assets/img/life/set1-3.jpg', 'assets/img/life/set1-4.jpg',
        'assets/img/life/set1-5.jpg', 'assets/img/life/set1-6.jpg',
      ]
    },
    {
      text: '这个月去了海边、逛了旧书店、和朋友露营了一晚。城市的屋顶很好看，巷子深处的小面馆也是。',
      photos: [
        'assets/img/life/set2-1.jpg', 'assets/img/life/set2-2.jpg',
        'assets/img/life/set2-3.jpg', 'assets/img/life/set2-4.jpg',
        'assets/img/life/set2-5.jpg', 'assets/img/life/set2-6.jpg',
      ]
    },
    {
      text: '飞机上看到的云海、秋天的银杏大道、深夜电台里的独白。给未来的自己写了一封手写信，还收集了几个冰箱贴。',
      photos: [
        'assets/img/life/set3-1.jpg', 'assets/img/life/set3-2.jpg',
        'assets/img/life/set3-3.jpg', 'assets/img/life/set3-4.jpg',
        'assets/img/life/set3-5.jpg', 'assets/img/life/set3-6.jpg',
      ]
    },
  ],
};
