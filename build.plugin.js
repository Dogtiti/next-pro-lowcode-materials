module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.module
      .rule('postcss-loader')
      .test(/\.scss$/)
      .use(['tailwindcss', 'autoprefixer'])
      .loader('postcss-loader');
  });
};
