module.exports = {
  collectCoverage: true,
  coverageReporters: ["json", "text"],
  projects: [
    {
      displayName: "test",
      preset: "jest-preset-gatsby/typescript",
      snapshotSerializers: [
        "jest-emotion",
        "jest-serializer-react-helmet",
        "jest-serializer-json-ld-script"
      ],
      collectCoverage: true,
      coverageReporters: ["json", "text"],
      coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/.jest/"]
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      testMatch: [
        "<rootDir>/**/*.jsx",
        "<rootDir>/**/*.js",
        "<rootDir>/**/*.tsx",
        "<rootDir>/**/*.ts"
      ],
      testPathIgnorePatterns: [
        "/.cache/",
        "/coverage/",
        "/content/", // Because the markdown files are likely to be written in CMS don't worry about this.
        "/node_modules/",
        "/public/",
        "/reports/",
        "/static/",
        "/package-lock.json",
        "/package.json"
      ]
    },
    {
      runner: "prettier",
      displayName: "lint:prettier",
      moduleFileExtensions: [
        "js",
        "jsx",
        "json",
        "ts",
        "tsx",
        "css",
        "less",
        "scss",
        "graphql",
        "md",
        "markdown"
      ],
      testMatch: [
        "**/*.js",
        "**/*.jsx",
        "**/*.json",
        "**/*.ts",
        "**/*.tsx",
        "**/*.css",
        "**/*.less",
        "**/*.scss",
        "**/*.graphql",
        "**/*.md",
        "**/*.markdown"
      ],
      testPathIgnorePatterns: [
        "/.cache/",
        "/coverage/",
        "/content/", // Because the markdown files are likely to be written in CMS don't worry about this.
        "/node_modules/",
        "/public/",
        "/reports/",
        "/static/",
        "/package-lock.json",
        "/package.json"
      ]
    },
    {
      runner: "stylelint",
      displayName: "lint:stylelint",
      testMatch: ["<rootDir>/src/**/*.tsx", "<rootDir>/src/**/*.ts"]
    }
  ]
};
