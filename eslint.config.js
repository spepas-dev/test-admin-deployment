// import js from '@eslint/js';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import simpleImportSort from 'eslint-plugin-simple-import-sort';
// import jest from 'eslint-plugin-jest';
// import prettier from 'eslint-plugin-prettier';
// import globals from 'globals';
// import tsParser from '@typescript-eslint/parser';
// import tseslint from 'typescript-eslint';
// import importPlugin from 'eslint-plugin-import';

// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, importPlugin.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//       'simple-import-sort': simpleImportSort,
//       jest: jest,
//       prettier: prettier
//     },

//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...jest.environments.globals.globals
//       },

//       parser: tsParser,
//       ecmaVersion: 'latest',
//       sourceType: 'module',

//       parserOptions: {
//         ecmaFeatures: {
//           tsx: true
//         }
//       }
//     },

//     settings: {
//       react: {
//         version: 'detect'
//       },

//       jest: {
//         version: 'detect',

//         globalAliases: {
//           describe: ['context'],
//           fdescribe: ['fcontext'],
//           xdescribe: ['xcontext']
//         }
//       }
//     },

//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'prettier/prettier': [
//         'warn',
//         {
//           singleQuote: true,
//           semi: true
//         }
//       ],
//       'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
//       'no-multiple-empty-lines': [
//         2,
//         {
//           max: 2
//         }
//       ],

//       semi: [2, 'always'],
//       curly: ['warn'],
//       'prefer-template': ['warn'],

//       'space-before-function-paren': [
//         0,
//         {
//           anonymous: 'always',
//           named: 'always'
//         }
//       ],

//       camelcase: 0,
//       'no-return-assign': 0,
//       quotes: ['error', 'single'],
//       '@typescript-eslint/no-non-null-assertion': 'off',
//       '@typescript-eslint/no-namespace': 'off',
//       '@typescript-eslint/explicit-module-boundary-types': 'off',
//       'import/no-unresolved': 0,
//       'simple-import-sort/imports': 'warn',
//       'simple-import-sort/exports': 'warn',
//       'import/first': 'warn',
//       'import/newline-after-import': 'warn',
//       'import/no-duplicates': 'warn',
//       'import/no-named-as-default': 0
//     }
//   }
// );

import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist']
  },
  js.configs.recommended,
  // importPlugin.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...jest.environments.globals.globals
      },
      parserOptions: {
        ecmaFeatures: { tsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      jest: jest,
      prettier: prettier
      // import: importPlugin
    },
    settings: {
      react: { version: 'detect' },
      jest: {
        version: 'detect',
        globalAliases: {
          describe: ['context'],
          fdescribe: ['fcontext'],
          xdescribe: ['xcontext']
        }
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      'prettier/prettier': ['warn', { singleQuote: true, semi: true }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-multiple-empty-lines': [2, { max: 2 }],
      semi: [2, 'always'],
      curly: ['warn'],
      'prefer-template': ['warn'],
      'space-before-function-paren': [0, { anonymous: 'always', named: 'always' }],
      camelcase: 0,
      'no-return-assign': 0,
      quotes: ['error', 'single'],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn'
    }
  }
];
