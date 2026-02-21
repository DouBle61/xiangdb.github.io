// =============================================================
// 应用启动 + 全局事件绑定
// =============================================================

// ---- 键盘快捷键 ----
document.addEventListener('keydown', function(e) {
  // ESC 返回上一级
  if (e.key === 'Escape') {
    if (currentSubPage) {
      renderCategoryPage(currentPage);
    } else if (currentPage !== 'home') {
      renderHome();
    }
  }

  // 轮播左右箭头
  if (currentSubPage) {
    var slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
      if (e.key === 'ArrowLeft')  carouselNav(-1, slides.length);
      if (e.key === 'ArrowRight') carouselNav(1, slides.length);
    }
  }

  // 禁止 Ctrl+S / Ctrl+P / Ctrl+U
  if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p' || e.key === 'u')) {
    e.preventDefault();
  }
});

// ---- 禁止拖拽图片 ----
document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG') e.preventDefault();
});

// ---- 启动：渲染主页 ----
renderHome();
