// https://github.com/nuxt/eslint-config/blob/main/packages/eslint-config/index.js

export default [

  // Nuxt can use auto-imports, eslint should not throw errors for undefined variables.
  {
    name: 'woodawn:nuxt-base',
    files: ['**/*.{js,ts,jsx,tsx,cts,vue}'],
    rules: {
      'no-undef': 'off',
    },
  },
  {
    // Include typescript eslint rules in *.vue files
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
    name: 'woodawn:nuxt',
    files: ['*.vue'],
    rules: {
      'constructor-super': 'off', // ts(2335) & ts(2377)
      'getter-return': 'off', // ts(2378)
      'no-const-assign': 'off', // ts(2588)
      'no-dupe-args': 'off', // ts(2300)
      'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
      'no-dupe-keys': 'off', // ts(1117)
      'no-func-assign': 'off', // ts(2539)
      'no-import-assign': 'off', // ts(2539) & ts(2540)
      'no-new-symbol': 'off', // ts(7009)
      'no-obj-calls': 'off', // ts(2349)
      'no-redeclare': 'off', // ts(2451)
      'no-setter-return': 'off', // ts(2408)
      'no-this-before-super': 'off', // ts(2376)
      'no-undef': 'off', // ts(2304)
      'no-unreachable': 'off', // ts(7027)
      'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
      'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
      'prefer-const': 'error', // ts provides better types with const
      'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
      'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
      'valid-typeof': 'off', // ts(2367)
    },
  },
  {
    files: [
      // These pages are not used directly by users so they can have one-word names.
      '**/pages/**/*.{js,ts,jsx,tsx,vue}',
      '**/layouts/**/*.{js,ts,jsx,tsx,vue}',
      '**/app.{js,ts,jsx,tsx,vue}',
      '**/error.{js,ts,jsx,tsx,vue}',
      // These files should have multiple words in their names as they are within subdirectories.
      '**/components/*/**/*.{js,ts,jsx,tsx,vue}',
    ],
    rules: { 'vue/multi-word-component-names': 'off' },
  },
  // Pages and layouts are required to have a single root element if transitions are enabled.
  {
    files: ['**/{pages,layouts}/**/*.{js,ts,jsx,tsx,vue}'],
    rules: {
      'vue/no-multiple-template-root': 'error',
    },
  },
]
