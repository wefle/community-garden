import html from "@html-eslint/eslint-plugin";

export default [
    {
        ...html.configs["flat/recommended"],
        files: ["**/*.html"],
        rules: {
            ...html.configs["flat/recommended"].rules,
            "@html-eslint/require-img-alt": "error",
            "@html-eslint/require-lang": "error",
            "@html-eslint/require-title": "error",
            "@html-eslint/no-duplicate-id": "error"
        }
    }
];