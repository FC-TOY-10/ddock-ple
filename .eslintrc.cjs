module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    'no-new-object': 'warn', // 객체 선언 시 리터럴 방식으로 할 것
    'array-bracket-newline': ['warn', 'always'], // 괄호 줄바꿈 처리 검사
    'no-new-func': 'warn', // 함수 생성자 선언 X
    'arrow-parens': 'always' // 화살표 함수 파라미터 1개인 경우 () 생략
  }
}
