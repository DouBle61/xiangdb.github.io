// =============================================================
// 工具函数
// =============================================================

/** 防下载图片容器 */
function protectedImg(src, alt, extraClass, extraStyle) {
  extraClass = extraClass || '';
  extraStyle = extraStyle || '';
  return '<div class="img-protect ' + extraClass + '" style="' + extraStyle + '" oncontextmenu="return false;">' +
    '<img src="' + src + '" alt="' + (alt || '') + '" class="w-full h-full object-cover" draggable="false" />' +
    '</div>';
}

/** 更新左侧名片 */
function updateProfile(key) {
  var data = key ? SITE_DATA.profiles[key] : SITE_DATA.defaultProfile;
  if (!data) return;

  var avatar    = document.getElementById('profileAvatar');
  var name      = document.getElementById('profileName');
  var bio       = document.getElementById('profileBio');
  var social    = document.getElementById('socialIcons');
  var subBio    = document.getElementById('profileSubBio');

  avatar.src = data.avatar;
  name.textContent = data.name;
  bio.innerHTML = data.bio;

  // 社交图标 vs 身份文字
  if (data.showSocial) {
    social.classList.remove('hidden');
    subBio.classList.add('hidden');
    subBio.innerHTML = '';
  } else {
    social.classList.add('hidden');
    subBio.classList.remove('hidden');
    subBio.innerHTML = data.subBio || '';
  }

  // 微动画
  var card = document.getElementById('leftPanel');
  card.style.transform = 'scale(0.98)';
  card.style.opacity = '0.8';
  card.style.transition = 'all 0.15s ease';
  setTimeout(function() {
    card.style.transform = '';
    card.style.opacity = '';
  }, 120);
}

/** 渲染页面到右侧 */
function renderPage(html) {
  var area = document.getElementById('contentArea');
  area.classList.remove('page-enter');
  area.innerHTML = html;
  void area.offsetWidth;
  area.classList.add('page-enter');
  area.scrollTop = 0;
}

/** 返回按钮 HTML */
function backBtn(onclickFn) {
  return '<button onclick="' + onclickFn + '" ' +
    'class="carousel-btn w-9 h-9 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0" ' +
    'style="box-shadow: 0 2px 10px rgba(0,0,0,0.04);">' +
    '<svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">' +
    '<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>' +
    '</svg></button>';
}

/** 页面头部（返回 + 标题） */
function pageHeader(backFn, title, subtitle) {
  var sub = subtitle ? '<p class="text-xs text-gray-400">' + subtitle + '</p>' : '';
  return '<div class="flex items-center gap-3 mb-5 flex-shrink-0">' +
    backBtn(backFn) +
    '<div><h2 class="text-lg lg:text-xl font-bold text-gray-800 tracking-tight">' + title + '</h2>' + sub + '</div>' +
    '</div>';
}
