declare module "@single-spa-example/config" {
    export const babelConfig: Record<string, any>;
    export const postcssConfig: Record<string, any>;
    export const tailwindConfig: Record<string, any>;
    export const commitlintConfig: Record<string, any>;

    export const singleSpaReactWebpackConfig: (orgName: string, projectName: string, customizeWebpackConfig: Record<string, any>) => Record<string, any>;
    export const singleSpaReactBabelConfig: (customizeBabelConfig: Record<string, any>) => Record<string, any>;
    export const singleSpaPostcssConfig: (customizePostcssConfig: Record<string, any>) => Record<string, any>;
    export const singleSpaTailwindConfig: (customizeTailwindConfig: Record<string, any>) => Record<string, any>;
    export const singleSpaCommitlintConfig: (customizeCommitlintConfig: Record<string, any>) => Record<string, any>;
}
