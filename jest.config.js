module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverageFrom: ['src/**/*.{js,ts,vue}'],
  //silent: true,
}
