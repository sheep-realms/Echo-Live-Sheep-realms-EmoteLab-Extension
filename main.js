extensionManager.load({
    meta: {
        title: {
            text: '绵羊的动态表情包',
            translate: 'sheep_realms_emotelab.title'
        },
        name: 'sheep_realms_emotelab',
        schema_version: [2, 0, 1],
        extension_version: '1.0.0',
        icon: 'material:emoticon-happy',
        cover: 'cover.png',
        description: {
            text: '使用 EmoteLab 生成的绵羊动态表情包。',
            translate: 'sheep_realms_emotelab.description'
        },
        project_url: 'https://github.com/sheep-realms/Echo-Live-Sheep-realms-EmoteLab-Extension',
        author: {
            name: 'Sheep-realms',
            url: 'https://github.com/sheep-realms'
        },
        license: {
            name: 'GPL-3.0 license',
            url: 'https://www.gnu.org/licenses/gpl-3.0.html'
        }
    },
    register_hook: {
        loaded: [
            {
                registry: 'echolive:emoji',
                value: {
                    'sheep-realms:emotelab': {
                        meta: {
                            name: 'sheep-realms:emotelab',
                            namespace: 'sprel',
                            title: {
                                text: '绵羊的动态表情包',
                                translate: 'sheep_realms_emotelab.other.title'
                            },
                            author: [
                                {
                                    name: 'Sheep-realms',
                                    url: 'https://github.com/sheep-realms'
                                }, {
                                    name: 'EmoteLab',
                                    url: 'https://emotelab.app/'
                                }
                            ],
                            license: {
                                name: 'CC BY-NC-SA 4.0',
                                url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/'
                            }
                        },
                        path: {
                            translate: 'sheep_realms.emotelab.',
                            images: 'extensions/sheep_realms_emotelab/emoji/'
                        },
                        image: {
                            margin: {
                                start: '0.35rem',
                                end: '0.35rem'
                            },
                            review_size: 'large',
                            size: {
                                width: {
                                    value: '4em',
                                    max: 'unset',
                                    min: 'unset'
                                },
                                height: {
                                    value: '4em',
                                    max: 'unset',
                                    min: 'unset'
                                }
                            }
                        },
                        content: [
                            {
                                name: 'laugh',
                                title: { translate: 'laugh' },
                                path: '001_laugh.gif'
                            }, {
                                name: 'heart',
                                title: { translate: 'heart' },
                                path: '002_heart.gif'
                            }, {
                                name: 'like',
                                title: { translate: 'like' },
                                path: '003_like.gif'
                            }, {
                                name: 'dislike',
                                title: { translate: 'dislike' },
                                path: '004_dislike.gif'
                            }, {
                                name: 'question',
                                title: { translate: 'question' },
                                path: '005_question.gif'
                            }, {
                                name: 'exclamation',
                                title: { translate: 'exclamation' },
                                path: '006_exclamation.gif'
                            }, {
                                name: 'knife_and_fork',
                                title: { translate: 'knife_and_fork' },
                                path: '007_knife_and_fork.gif'
                            }, {
                                name: 'cry',
                                title: { translate: 'cry' },
                                path: '008_cry.gif'
                            }, {
                                name: 'knife',
                                title: { translate: 'knife' },
                                path: '009_knife.gif'
                            }, {
                                name: 'electric_baton',
                                title: { translate: 'electric_baton' },
                                path: '010_electric_baton.gif'
                            }, {
                                name: 'angry',
                                title: { translate: 'angry' },
                                path: '011_angry.gif'
                            }, {
                                name: 'angry_typing',
                                title: { translate: 'angry_typing' },
                                path: '012_angry_typing.gif'
                            }, {
                                name: 'dull',
                                title: { translate: 'dull' },
                                path: '013_dull.gif'
                            }, {
                                name: 'arrive',
                                title: { translate: 'arrive' },
                                path: '014_arrive.gif'
                            }, {
                                name: 'sweat',
                                title: { translate: 'sweat' },
                                path: '015_sweat.gif'
                            }, {
                                name: 'shy',
                                title: { translate: 'shy' },
                                path: '016_shy.gif'
                            }, {
                                name: 'hammer',
                                title: { translate: 'hammer' },
                                path: '017_hammer.gif'
                            }, {
                                name: 'sleep',
                                title: { translate: 'sleep' },
                                path: '018_sleep.gif'
                            }, {
                                name: 'fright',
                                title: { translate: 'fright' },
                                path: '019_fright.gif'
                            }, {
                                name: 'die',
                                title: { translate: 'die' },
                                path: '020_die.gif'
                            }
                        ]
                    }
                }
            }
        ]
    },
    localization_patch: {
        'zho-Hans': {
            extension: {
                sheep_realms_emotelab: {
                    title: '绵羊的动态表情包',
                    description: '使用 EmoteLab 生成的绵羊动态表情包。'
                }
            },
            emoji: {
                sheep_realms: {
                    emotelab: {
                        emoji: {
                            angry: '生气',
                            angry_typing: '生气地打字',
                            arrive: '到达',
                            cry: '哭',
                            die: '死亡',
                            dislike: '反向点赞',
                            dull: '呆',
                            electric_baton: '电棍',
                            exclamation: '叹号',
                            fright: '惊吓',
                            hammer: '敲头',
                            heart: '爱心',
                            knife: '刀',
                            knife_and_fork: '馋',
                            laugh: '笑',
                            like: '点赞',
                            question: '问号',
                            shy: '害羞',
                            sleep: '睡觉',
                            sweat: '汗'
                        }
                    }
                }
            }
        },
        'zho-Hant-TW': {
            extension: {
                sheep_realms_emotelab: {
                    title: '綿羊的動態表情包',
                    description: '使用 EmoteLab 生成的綿羊動態表情包'
                }
            },
            emoji: {
                sheep_realms: {
                    emotelab: {
                        emoji: {
                            angry: '生氣',
                            angry_typing: '生氣地打字',
                            arrive: '到達',
                            cry: '哭',
                            die: '死亡',
                            dislike: '反向點贊',
                            dull: '呆',
                            electric_baton: '電棍',
                            exclamation: '歎號',
                            fright: '驚嚇',
                            hammer: '敲頭',
                            heart: '愛心',
                            knife: '刀',
                            knife_and_fork: '饞',
                            laugh: '笑',
                            like: '點贊',
                            question: '問號',
                            shy: '害羞',
                            sleep: '睡覺',
                            sweat: '汗'
                        }
                    }
                }
            }
        },
        'zho-Hant-HK': {
            extension: {
                sheep_realms_emotelab: {
                    title: '綿羊的動態表情包',
                    description: '使用 EmoteLab 生成的綿羊動態表情包'
                }
            },
            emoji: {
                sheep_realms: {
                    emotelab: {
                        emoji: {
                            angry: '生氣',
                            angry_typing: '生氣地打字',
                            arrive: '到達',
                            cry: '哭',
                            die: '死亡',
                            dislike: '反向點贊',
                            dull: '呆',
                            electric_baton: '電棍',
                            exclamation: '歎號',
                            fright: '驚嚇',
                            hammer: '敲頭',
                            heart: '愛心',
                            knife: '刀',
                            knife_and_fork: '饞',
                            laugh: '笑',
                            like: '點贊',
                            question: '問號',
                            shy: '害羞',
                            sleep: '睡覺',
                            sweat: '汗'
                        }
                    }
                }
            }
        }
    }
});