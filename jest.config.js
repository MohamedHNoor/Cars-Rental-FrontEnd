module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

	transformIgnorePatterns: ['/node_modules/(?!swiper|ssr-window|dom7)'],
	transform: {
		'^.+\\.(ts|tsx|js)$': 'babel-jest',
		'^.+\\.(css)$': 'jest-transform-css',
		".+\\.(png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
	},
}
