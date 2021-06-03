const srcPath = './app';
const distPath = './dist';
const customFolder = '/w4'

const nodePath = './node_modules';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  conyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/assets/js/**/*.js`,
      `!${srcPath}/assets/style/**/*.scss`,
      `!${srcPath}/assets/style/**/*.sass`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
    ],
    path: `${distPath}${customFolder}`,
  },
  html: {
    src: [
      `${srcPath}/**/*.html`,
    ],
    ejsSrc: [
      `${srcPath}/**/*.ejs`,
    ],
    path: `${distPath}${customFolder}`,
  },
  style: {
    src: [
      `${srcPath}/assets/style/**/*.scss`,
      `${srcPath}/assets/style/**/*.sass`,
    ],
    includePaths: [
      `${nodePath}/bootstrap/scss`,
    ],
    path: `${distPath}${customFolder}/assets/style`,
  },
  javascript: {
    src: [
      `${srcPath}/assets/js/**/*.js`
    ],
    concat: 'app.js',
    path: `${distPath}${customFolder}/assets/js`,
  },
  vendors: {
    src: [
      `${nodePath}/bootstrap/dist/**/bootstrap.bundle.min.js`
    ],
    concat: 'vendors.js',
    path: `${distPath}${customFolder}/assets/js`,
  },
  img: {
    src: [
      `${distPath}${customFolder}/assets/images/**/*`,
    ],
  },
  clean: {
    src: distPath,
  },
  browserDir: `${distPath}${customFolder}`,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
