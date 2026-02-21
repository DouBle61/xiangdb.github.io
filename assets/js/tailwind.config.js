// Tailwind CSS 自定义配置
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui', '-apple-system', 'BlinkMacSystemFont',
          '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'
        ],
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      colors: {
        brand: {
          50:  '#f5f5ff',
          100: '#ebebff',
          200: '#d4d4ff',
          500: '#6366f1',
          600: '#4f46e5',
        }
      }
    }
  }
};
