// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '无解的游戏',
    tagline: '记录生活和学习',
    url: 'https://sword-demon.github.io',
    baseUrl: '/sword-wiki/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'my/logo.ico',
    trailingSlash: false,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'sword-demon', // Usually your GitHub org/user name.
    projectName: 'sword-wiki', // Usually your repo name.
    deploymentBranch: 'gh-pages',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/sword-demon/sword-wiki/tree/main/packages/create-docusaurus/templates/shared/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    breadcrumbs: false,
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/sword-demon/sword-wiki/tree/main/packages/create-docusaurus/templates/shared/',
                    blogDescription: "wxvirus的个人生活和工作记录",
                    blogSidebarCount: 7,
                    blogSidebarTitle: "文章",
                    feedOptions: {
                        title: "wxvirus`s Blog",
                        description: "wxvirus 的个人生活和工作记录",
                        type: 'all',
                        copyright: `Copyright © ${ new Date().getFullYear() } wxvirus, Inc.`,
                    },
                    remarkPlugins: [
                        [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
                    ],
                },
                pages: {
                    remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-ideal-image',
            {
                quality: 70,
                max: 1030, // 最大缩放图片尺寸。
                min: 640, // 最小缩放图片尺寸。 如果原始值比这还低，会使用原图尺寸。
                steps: 2, // 在 min 和 max 之间最多生成的图片数量（包含两端点）
                disableInDev: false,
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "dev",
                path: "wiki/dev",
                routeBasePath: "dev",
                sidebarPath: require.resolve("./sidebars.js"),
//                editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                breadcrumbs: false,
                remarkPlugins: [
                    [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
                ]
            },
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "power",
                path: "wiki/power",
                routeBasePath: "power",
                sidebarPath: require.resolve("./sidebars.js"),
//                editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                breadcrumbs: false,
                remarkPlugins: [
                    [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
                ]
            },
        ]
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            metadata: [
                {
                    name: "keywords",
                    content: "wxvirus, wiki, blog, php, c, go, k8s, linux",
                },
            ],
            navbar: {
                title: 'wxvirus',
                hideOnScroll: true,
                logo: {
                    alt: 'My Site Logo',
                    src: 'my/logo.svg',
                },
                items: [
                    {
                        position: "right",
                        label: "笔记文档",
                        items: [
                            {
                                label: "程序语言",
                                to: "/dev",
                            },
                            {
                                label: '程序内功',
                                to: '/power',
                            }
                        ],
                    },
//                    {
//                        type: 'doc',
//                        docId: 'intro',
//                        position: 'left',
//                        label: 'Tutorial',
//                    },
                    {
                        label: '标签',
                        to: '/blog/tags',
                        position: "right"
                    },
                    {
                        label: '时间轴',
                        to: '/blog/archive',
                        position: "right"
                    },
                    {
                        to: '/blog', label: '博客', position: 'right',
                    },
                    {
                      label: '关于',
                      to: '/about',
                      position: "right"
                    },
                    {
                        href: 'https://github.com/sword-demon/sword-wiki',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${ new Date().getFullYear() } 无解的游戏, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                defaultLanguage: "markdown",
                additionalLanguages: ["java", "git", "nginx", "http", "php", "go", "python", "rust", "json", "properties", "protobuf"],
                magicComments: [
                    {
                        className: 'theme-code-block-highlighted-line',
                        line: 'highlight-next-line',
                        block: {start: 'hs', end: 'he'},
                    },
                    {
                        className: 'code-block-error-line',
                        line: 'This will error',
                    },
                ]
            },
        }),
};

module.exports = config;
