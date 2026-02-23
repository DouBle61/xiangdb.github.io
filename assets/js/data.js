// =============================================================
// 全站数据：所有文字、图片路径集中在这里管理
// 修改内容只需要改这个文件！
// =============================================================

const SITE_DATA = {

  // ---- 默认名片 ----
  defaultProfile: {
    avatar: 'assets/img/125.jpg',
    name: '郭勇 DouBle',
    bio: '-不给自己设限-<br/>一个出生于东北<br/>奋斗于北京<br/>流窜在江浙沪<br/>希望以后在港深生活的<br/>四分之一俄罗斯混血',
    showSocial: true,        // true = 显示社交图标
    subBio: ''               // 空 = 不显示下方身份文字
  },

  // ---- 各身份名片 ----
  profiles: {
    design: {
      avatar: 'assets/img/kak1.jpg',
      name: '郭勇 DouBle',
      bio: '一个自诩拥有童子功<br/>正在试图续上后劲儿的<br/>设计半路出家人',
      showSocial: false,
      subBio: '2024内蒙古冬运会吉祥物设计<br/>中国传媒大学70周年校庆主标识设计<br/>中国广告博物馆百年商印展策展设计<br/>2022北京冬奥会、2025央视春晚传播设计相关工作<br/>中国大学生广告艺术节学院奖等<br/>曾获信息技术及计算机设计相关竞赛省市第一名'
    },
    direct: {
      avatar: 'assets/img/kak2.jpg',
      name: '郭勇 DouBle',
      bio: '一个曾经狂热迷恋电编<br/>结果发现自己喜欢的是文编的<br/>广告人',
      showSocial: false,
      subBio: '2023年度首都广电优秀广播电视公益广告资金扶持<br/>2025年度广东广电重大主题广播电视公益广告资金扶持<br/>国家广电总局优秀广播电视公益广告人才库<br/>党的十八大以来精品公益广告回顾展、成都大运会、粤港澳全运会、中央级媒体、首都广电、广东广电、内蒙古广电、学习强国平台、市说新语平台等播出<br/>2024、2025年北京大学生电影节初选评委<br/>综艺联创论坛得综艺导演岑俊义中标，校内活动涉及宣传、制片、演员统筹、现场导演、转播摄像等'
    },
    scholar: {
      avatar: 'assets/img/kak3.jpg',
      name: '郭勇 DouBle',
      bio: '不会写小说的<br/>记者<br/>不是好博士',
      showSocial: false,
      subBio: '以专业第一推免至中国科学院大学科学传播学项目<br/>中国传媒大学文学、艺术学学士，国家奖学金、北京雨燕奖学金<br/>8组作品国家级奖项、11组作品省部级奖项，会议论文2篇、国家级大创2项<br/>主持参与国家艺术基金1项、北京文化艺术基金1项、国家级大创2项<br/>界面新闻文娱媒体旗下科技、体育口记者<br/>关注星际科幻及大模型'
    },
    charity: {
      avatar: 'assets/img/kak4.jpg',
      name: '郭勇 DouBle',
      bio: '大师说我身弱不担财<br/>但好在我<br/>还有很多爱',
      showSocial: false,
      subBio: '连续四年参与暑期支教，全国大学生社会实践优秀先进个人、青年服务国家首都大学社会实践优秀团队等表彰，作为大学生代表于人民大会堂参与时代楷模先进报告会，社会实践故事受共青团中央、中国青年报等报道转发。<br/>创业项目北京行走，擘雅品牌研究院优秀结项、重点立项，全国大学生创新创业计划国家级立（结）项，教育部推普助力乡村振兴团队，提供IP打造服务于北京市西城区、天津市河西区、北京市大兴区、湖南省新化县鹏程完小、河北省泊头市汇英小学等。'
    },
    life: {
      avatar: 'assets/img/kak0.jpg',
      name: '郭勇 DouBle',
      bio: '凡事温吞的都没劲，要大开大合、大红大绿的才好<br/>像东北绝望的冷、刀子样的大风、覆灭感的大雪<br/>这才带劲，才尽兴，才痛快',
      showSocial: false,
      subBio: '爱足球、游泳，2025国内游泳四大赛全勤<br/>爱蛇板、轮滑、陆冲，爱速度滑冰、爱冰壶、雪地骑行<br/>比过越野、斯巴达，比过双摇、双盘、磕踢<br/>会小号、小军鼓、吉他、街舞<br/>自封天下军旗第一人<br/>曾疯狂迷恋数独、珠心算以及高智商俱乐部'
    }
  },

  // ---- 主页四卡片 ----
  homeCards: [
    { id: 'design',  title: '设计 DouBle', image: 'assets/img/kak1.jpg',  page: 'design'  },
    { id: 'direct',  title: '编导 DouBle', image: 'assets/img/kak2.jpg',  page: 'direct'  },
    { id: 'scholar', title: '研究 DouBle', image: 'assets/img/kak3.jpg', page: 'scholar' },
    { id: 'charity', title: '公益 DouBle', image: 'assets/img/kak4.jpg', page: 'charity' },
  ],

  // 主页中央圆形图片
  homeLifeCircle: 'assets/img/kak0.jpg',

  // ---- 设计作品 ----
  designWorks: [
    {
      id: 'design-1', title: '中国传媒大学70周年校庆主标识传播设计',
      cover: 'assets/img/design/celebration/1.jpg', date: '2025.06',
      images: [
        'assets/img/design/celebration/1.jpg', 'assets/img/design/celebration/2.jpg',
        'assets/img/design/celebration/3.jpg', 'assets/img/design/celebration/4.jpg',
        'assets/img/design/celebration/5.jpg', 'assets/img/design/celebration/6.jpg',
        'assets/img/design/celebration/7.jpg', 'assets/img/design/celebration/8.jpg',
        'assets/img/design/celebration/9.jpg', 'assets/img/design/celebration/10.jpg',
        'assets/img/design/celebration/11.jpg', 'assets/img/design/celebration/12.jpg',
        'assets/img/design/celebration/13.jpg', 'assets/img/design/celebration/14.jpg',
      ]
    },
    {
      id: 'design-2', title: '第十四届全国冬季运动会吉祥物传播设计',
      cover: 'assets/img/design/winter/1.jpg', date: '2025.03',
      images: [
        'assets/img/design/winter/1.jpg', 'assets/img/design/winter/2.jpg',
        'assets/img/design/winter/3.jpg', 'assets/img/design/winter/4.jpg',
        'assets/img/design/winter/5.jpg', 'assets/img/design/winter/6.jpg',
        'assets/img/design/winter/7.jpg', 'assets/img/design/winter/8.jpg',
        'assets/img/design/winter/9.jpg', 'assets/img/design/winter/10.jpg',
        'assets/img/design/winter/11.jpg', 'assets/img/design/winter/12.jpg',
        'assets/img/design/winter/13.jpg', 'assets/img/design/winter/14.jpg',
        'assets/img/design/winter/15.jpg', 'assets/img/design/winter/16.jpg',
        'assets/img/design/winter/17.jpg', 'assets/img/design/winter/18.jpg',
        'assets/img/design/winter/19.jpg', 'assets/img/design/winter/20.jpg',
        'assets/img/design/winter/21.jpg', 'assets/img/design/winter/22.jpg',
        'assets/img/design/winter/23.jpg', 'assets/img/design/winter/24.jpg',
        'assets/img/design/winter/25.jpg', 'assets/img/design/winter/26.jpg',
        'assets/img/design/winter/27.jpg', 'assets/img/design/winter/28.jpg',
        'assets/img/design/winter/29.jpg', 'assets/img/design/winter/30.jpg',
        'assets/img/design/winter/31.jpg', 'assets/img/design/winter/32.jpg',
        'assets/img/design/winter/33.jpg', 'assets/img/design/winter/34.jpg',
        'assets/img/design/winter/35.jpg', 'assets/img/design/winter/36.jpg',
        'assets/img/design/winter/37.jpg', 'assets/img/design/winter/38.jpg',
        'assets/img/design/winter/39.jpg', 'assets/img/design/winter/40.jpg',
        'assets/img/design/winter/41.jpg', 'assets/img/design/winter/42.jpg',
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
      images: [
        { src: 'assets/img/charity/work1-1.jpg', caption: '和孩子们在操场上' },
      ]
        <p class="text-gray-600 leading-relaxed text-sm">他们的教室只有两间，黑板裂了好几道缝。但每个孩子的眼睛里，都藏着一整个宇宙。</p>`,
      images: [
        { src: 'assets/img/charity/work1-1.jpg', caption: '和孩子们在操场上' },
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
