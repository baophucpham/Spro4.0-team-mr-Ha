module.exports = {
 root: true,
	extends: '@react-native-community',
	parser: '@typescript-eslint/parser',
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			rules: {
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': 'off',
				'semi': 'off',
				'prettier/prettier': 'off',
				'react-hooks/exhaustive-deps': 'off',
				'no-useless-escape': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'react-native/no-inline-styles': 'off',
				'@typescript-eslint/comma-dangle': 'off',
				'import/prefer-default-export': 'off',
				'class-methods-use-this': 'off',
				'react/self-closing-comp': [
					'error',
					{
						component: true,
						html: true,
					},
				],
			},
		},
	],
};
