// =============================================================
// 页面渲染函数
// =============================================================

var currentPage = 'home';
var currentSubPage = null;
var paginationState = {};
var currentLifeSetIndex = 0;
var carouselIndex = 0;
var ITEMS_PER_PAGE = 4;


// =============================================
// 主页
// =============================================
function renderHome() {
  currentPage = 'home';
  currentSubPage = null;
  updateProfile(null);

  var cards = SITE_DATA.homeCards;
  var html =
    '<div class="flex-1 flex flex-col justify-center items-center">' +
      '<div class="relative w-full" style="max-width: 600px;">' +
        // 四宫格
        '<div class="grid grid-cols-2 gap-3 lg:gap-4">' +
          cards.map(function(c) {
            return '<div class="grid-card-hover rounded-3xl overflow-hidden aspect-square relative" ' +
              'style="box-shadow: 0 6px 24px rgba(0,0,0,0.07);" ' +
              'onclick="navigateTo(\'' + c.page + '\')">' +
              protectedImg(c.image, c.title, 'w-full h-full absolute inset-0') +
              '<div class="absolute bottom-0 left-0 right-0 p-3 lg:p-4 z-10" ' +
              'style="background: linear-gradient(transparent, rgba(0,0,0,0.45));">' +
              '<span class="text-white font-bold text-xs lg:text-sm tracking-wide">' + c.title + '</span>' +
              '</div></div>';
          }).join('') +
        '</div>' +
        // 中央大圆（纯图片，无文字）
        '<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">' +
          '<div class="circle-card rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-32 border-4 border-white relative" ' +
          'style="box-shadow: 0 12px 40px rgba(0,0,0,0.15);" ' +
          'onclick="navigateTo(\'life\')">' +
          protectedImg(SITE_DATA.homeLifeCircle, '我的生活', 'w-full h-full absolute inset-0') +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  renderPage(html);
}


// =============================================
// 二级页面（作品列表 + 分页）
// =============================================
function renderCategoryPage(category) {
  currentPage = category;
  currentSubPage = null;
  updateProfile(category);

  if (!paginationState[category]) paginationState[category] = { page: 0 };

  var worksMap = {
    design: SITE_DATA.designWorks, direct: SITE_DATA.directWorks,
    scholar: SITE_DATA.scholarWorks, charity: SITE_DATA.charityWorks,
  };
  var titleMap = {
    design: '设计 DouBle', direct: '编导 DouBle',
    scholar: '学者 DouBle', charity: '公益 DouBle',
  };

  var works = worksMap[category] || [];
  var totalPages = Math.ceil(works.length / ITEMS_PER_PAGE);
  var pg = paginationState[category].page;
  var visible = works.slice(pg * ITEMS_PER_PAGE, (pg + 1) * ITEMS_PER_PAGE);

  var html = pageHeader("renderHome()", titleMap[category]);

  // 作品网格（居中撑满）
  html += '<div class="flex-1 flex flex-col justify-center">';
  html += '<div class="grid grid-cols-2 gap-3 lg:gap-4">';
  html += visible.map(function(w) {
    return '<div class="grid-card-hover rounded-3xl overflow-hidden aspect-[4/3] relative" ' +
      'style="box-shadow: 0 5px 20px rgba(0,0,0,0.06);" ' +
      'onclick="navigateToDetail(\'' + category + '\', \'' + w.id + '\')">' +
      protectedImg(w.cover, w.title, 'w-full h-full absolute inset-0') +
      '<div class="absolute bottom-0 left-0 right-0 p-3 z-10" ' +
      'style="background: linear-gradient(transparent, rgba(0,0,0,0.5));">' +
      '<p class="text-white font-semibold text-xs lg:text-sm">' + w.title + '</p>' +
      '<p class="text-white/60 text-[10px] mt-0.5">' + w.date + '</p>' +
      '</div></div>';
  }).join('');
  html += '</div>';

  // 分页
  if (totalPages > 1) {
    html += '<div class="flex items-center justify-center gap-3 mt-5 flex-shrink-0">';
    html += '<button onclick="paginate(\'' + category + '\', -1)" ' +
      'class="carousel-btn w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center ' +
      (pg === 0 ? 'opacity-30 pointer-events-none' : '') + '" ' +
      'style="box-shadow: 0 1px 6px rgba(0,0,0,0.04);">' +
      '<svg class="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
      '<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg></button>';
    html += '<div class="flex items-center gap-1.5">';
    for (var i = 0; i < totalPages; i++) {
      html += '<button onclick="paginateTo(\'' + category + '\', ' + i + ')" ' +
        'class="dot w-1.5 h-1.5 rounded-full ' + (i === pg ? 'active bg-indigo-500' : 'bg-gray-300') + '"></button>';
    }
    html += '</div>';
    html += '<button onclick="paginate(\'' + category + '\', 1)" ' +
      'class="carousel-btn w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center ' +
      (pg >= totalPages - 1 ? 'opacity-30 pointer-events-none' : '') + '" ' +
      'style="box-shadow: 0 1px 6px rgba(0,0,0,0.04);">' +
      '<svg class="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
      '<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></button>';
    html += '</div>';
  }

  html += '</div>';
  renderPage(html);
}

function paginate(cat, dir) {
  var m = { design: SITE_DATA.designWorks, direct: SITE_DATA.directWorks,
            scholar: SITE_DATA.scholarWorks, charity: SITE_DATA.charityWorks };
  var total = Math.ceil((m[cat] || []).length / ITEMS_PER_PAGE);
  var s = paginationState[cat];
  s.page = Math.max(0, Math.min(total - 1, s.page + dir));
  renderCategoryPage(cat);
}
function paginateTo(cat, pg) { paginationState[cat].page = pg; renderCategoryPage(cat); }


// =============================================
// 三级 —— 设计详情（图片轮播）
// =============================================
function renderDesignDetail(workId) {
  var work = SITE_DATA.designWorks.find(function(w) { return w.id === workId; });
  if (!work) return;
  currentSubPage = workId;
  updateDetailProfile(work);

  var html = pageHeader("renderCategoryPage('design')", work.title, work.date);
  html += '<div class="flex-1 flex flex-col justify-center">';
  html += buildCarousel(work.images, work.title);
  html += buildThumbStrip(work.images);
  html += '</div>';

  carouselIndex = 0;
  renderPage(html);
}


// =============================================
// 三级 —— 编导详情（视频 or 活动）
// =============================================
function renderDirectDetail(workId) {
  var work = SITE_DATA.directWorks.find(function(w) { return w.id === workId; });
  if (!work) return;
  currentSubPage = workId;
  updateDetailProfile(work);

  var html = pageHeader("renderCategoryPage('direct')", work.title, work.date);
  html += '<div class="flex-1 flex flex-col justify-center">';

  if (work.type === 'video') {
    var isAudio = work.videoSrc && work.videoSrc.endsWith('.mp3');
    if (isAudio) {
      html += '<div class="rounded-3xl overflow-hidden bg-gray-100 aspect-[16/10] relative mb-3" style="box-shadow: 0 6px 24px rgba(0,0,0,0.07);">';
      html += protectedImg(work.cover, work.title, 'w-full h-full absolute inset-0');
      html += '<div class="absolute inset-0 flex items-center justify-center z-10" style="background:rgba(0,0,0,0.2);">';
      html += '<div class="w-14 h-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center" style="box-shadow:0 4px 16px rgba(0,0,0,0.12);">';
      html += '<svg class="w-6 h-6 text-gray-700 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
      html += '</div></div></div>';
      html += '<audio controls class="w-full rounded-xl mt-2" style="outline:none;"><source src="' + work.videoSrc + '" type="audio/mpeg">不支持音频播放。</audio>';
    } else {
      html += '<div class="rounded-3xl overflow-hidden bg-black" style="box-shadow: 0 6px 24px rgba(0,0,0,0.1);">';
      html += '<video controls class="w-full" style="max-height:60vh;outline:none;" poster="' + work.cover + '" controlslist="nodownload" oncontextmenu="return false;" disablePictureInPicture>';
      html += '<source src="' + work.videoSrc + '" type="video/mp4">不支持视频播放。</video></div>';
    }
  } else {
    // 活动类
    html += '<div class="bg-gray-50 rounded-2xl p-4 mb-4 flex-shrink-0"><p class="text-gray-600 leading-relaxed text-sm">' + (work.description || '') + '</p></div>';
    if (work.images && work.images.length > 0) {
      html += buildCarouselCaptioned(work.images, work.title);
      html += buildThumbStripCaptioned(work.images);
    }
  }

  html += '</div>';
  carouselIndex = 0;
  renderPage(html);
}


// =============================================
// 三级 —— 学者详情（可滚动论文）
// =============================================
function renderScholarDetail(workId) {
  var work = SITE_DATA.scholarWorks.find(function(w) { return w.id === workId; });
  if (!work) return;
  currentSubPage = workId;
  updateDetailProfile(work);

  var imagesHtml = (work.images || []).map(function(src) {
    return '<div class="my-4">' + protectedImg(src, work.title, 'w-full rounded-2xl overflow-hidden') + '</div>';
  }).join('');

  var html = pageHeader("renderCategoryPage('scholar')", work.title, work.date);
  html += '<div class="flex-1 overflow-y-auto custom-scroll bg-gray-50 rounded-2xl p-5">';
  html += (work.content || '') + imagesHtml;
  html += '</div>';

  renderPage(html);
}


// =============================================
// 三级 —— 公益详情（小红书图文混排）
// =============================================
function renderCharityDetail(workId) {
  var work = SITE_DATA.charityWorks.find(function(w) { return w.id === workId; });
  if (!work) return;
  currentSubPage = workId;
  updateDetailProfile(work);

  var imagesHtml = (work.images || []).map(function(img) {
    return '<div class="my-4">' +
      protectedImg(img.src, img.caption, 'w-full rounded-2xl overflow-hidden') +
      (img.caption ? '<p class="text-center text-[10px] text-gray-400 mt-1.5">' + img.caption + '</p>' : '') +
      '</div>';
  }).join('');

  var html = pageHeader("renderCategoryPage('charity')", work.title, work.date);
  html += '<div class="flex-1 overflow-y-auto custom-scroll bg-gray-50 rounded-2xl p-5">';
  html += (work.
