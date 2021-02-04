const makeShadow = (name, rgb) => {
  const obj = {}

  obj[name + '-xs'] = `0 0 0 1px rgba(${rgb}, 0.05)`
  obj[name + '-xs'] = `0 0 0 1px rgba(${rgb}, 0.05)`
  obj[name + '-sm'] = `0 1px 2px 0 rgba(${rgb}, 0.05)`
  obj[name] = `0 1px 3px 0 rgba(${rgb}, 0.3), 0 1px 2px 0 rgba(${rgb}, 0.08)`
  obj[
    name + '-md'
  ] = `0 4px 6px -1px rgba(${rgb}, 0.3), 0 2px 4px -1px rgba(${rgb}, 0.08)`
  obj[
    name + '-lg'
  ] = `0 10px 15px -3px rgba(${rgb}, 0.3), 0 4px 6px -2px rgba(${rgb}, 0.05)`
  obj[
    name + '-xl'
  ] = `0 20px 25px -5px rgba(${rgb}, 0.3), 0 10px 10px -5px rgba(${rgb}, 0.04)`
  obj[name + '-2xl'] = `0 25px 50px -12px rgba(${rgb}, 0.25)`
  obj[name + '-inner'] = `inset 0 2px 4px 0 rgba(${rgb}, 0.08)`
  return obj
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        ...makeShadow('orange', '251, 119, 128'),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
