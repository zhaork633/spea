import Toy1Png from '@/assets/Product/toy-1.png';
import Toy2Png from '@/assets/Product/toy-2.png';
import Toy3Png from '@/assets/Product/toy-3.png';
import Talkie1Png from '@/assets/Product/talkie-1.png';
import Base1Png from '@/assets/Product/base-1.png';
import Toy11Png from '@/assets/Product/toy-1-1.png';
import Toy21Png from '@/assets/Product/toy-2-1.png';
import Toy31Png from '@/assets/Product/toy-3-1.png';
import Toy32Png from '@/assets/Product/toy-3-2.png';
import Toy33Png from '@/assets/Product/toy-3-3.png';
import Toy34Png from '@/assets/Product/toy-3-4.png';
import Toy35Png from '@/assets/Product/toy-3-5.png';
import Toy36Png from '@/assets/Product/toy-3-6.png';
import Toy37Png from '@/assets/Product/toy-3-7.png';
import Toy38Png from '@/assets/Product/toy-3-8.png';
import Toy39Png from '@/assets/Product/toy-3-9.png';
import Talkie11Png from '@/assets/Product/talkie-1-1.png';
import Talkie12Png from '@/assets/Product/talkie-1-2.png';
import Talkie13Png from '@/assets/Product/talkie-1-3.png';
import Talkie14Png from '@/assets/Product/talkie-1-4.png';
import Base11Png from '@/assets/Product/base-1-1.png';
import Base12Png from '@/assets/Product/base-1-2.png';
import Base13Png from '@/assets/Product/base-1-3.png';
import Base14Png from '@/assets/Product/base-1-4.png';

export type ProductType = 'toy' | 'talkie' | 'base';
export const products = [
    {
        type: 'toy',
        enName: 'AI plush toy',
        zhName: 'AiSpea毛绒玩具',
        enDesc: 'Our interactive plush toy, perfect for children aged 3 to 6, sparks curiosity, entertains, and provides comforting companionship, enriching play and learning moments.',
        zhDesc: '我们的精心设计的互动式毛绒玩具，专为3至6岁这个充满好奇与探索欲望的年龄段儿童打造。它不仅拥有柔软舒适的触感，能够给予孩子最温暖的拥抱，更是孩子们成长道路上的智慧伙伴，能够激发孩子的好奇心，带来娱乐，并提供安慰的陪伴，丰富他们的玩耍和学习时光。',
        groups: [
            {
                groupId: 'toy-1',
                retailPrice: 49.6,
                wholesalePrice: 21.6,
                icon: Toy1Png,
                list: [
                    {
                        id: 'toy-1-1',
                        enName: 'Smart panda',
                        zhName: '小熊猫',
                        icon: Toy11Png,
                    },
                ]
            },
            {
                groupId: 'toy-2',
                retailPrice: 49,
                wholesalePrice: 21.5,
                icon: Toy2Png,
                list: [
                    {
                        id: 'toy-2-1',
                        enName: 'Smart penguin',
                        zhName: '小企鹅',
                        icon: Toy21Png,
                    },
                ]
            },
            {
                groupId: 'toy-3',
                retailPrice: 49,
                wholesalePrice: 21,
                icon: Toy3Png,
                list: [
                    {
                        id: 'toy-3-1',
                        enName: 'Smart dog',
                        zhName: '小狗',
                        icon: Toy31Png,
                    },
                    {
                        id: 'toy-3-2',
                        enName: 'Smart coffee color penguin',
                        zhName: '咖啡色小企鹅',
                        icon: Toy32Png,
                    },
                    {
                        id: 'toy-3-3',
                        enName: 'Smart koala',
                        zhName: '小考拉',
                        icon: Toy33Png,
                    },
                    {
                        id: 'toy-3-4',
                        enName: 'Smart coffee color panda',
                        zhName: '咖啡色小熊猫',
                        icon: Toy34Png,
                    },
                    {
                        id: 'toy-3-5',
                        enName: 'Smart monkey',
                        zhName: '小猴子',
                        icon: Toy35Png,
                    },
                    {
                        id: 'toy-3-6',
                        enName: 'Smart colt',
                        zhName: '小马驹',
                        icon: Toy36Png,
                    },
                    {
                        id: 'toy-3-7',
                        enName: 'Smart rabbit',
                        zhName: '小兔子',
                        icon: Toy37Png,
                    },
                    {
                        id: 'toy-3-8',
                        enName: 'Smart pig',
                        zhName: '小猪',
                        icon: Toy38Png,
                    },
                    {
                        id: 'toy-3-9',
                        enName: 'Smart dinosaur',
                        zhName: '小恐龙',
                        icon: Toy39Png,
                    }
                ]
            },
        ]
    },
    {
        type: 'talkie',
        enName: 'AI walkie - talkie',
        zhName: 'AiSpea对讲机',
        enDesc: 'Our smart walkie-talkie features press-to-talk mode with an AI for instant, intelligent responses. Just pick it up, press the button, and your AI buddy is ready to engage.',
        zhDesc: 'AiSpea智能对讲机采用一键通话模式，内置AI系统，可即时提供智能回复。只需拿起对讲机，按下按钮，您的AI伙伴即可随时与您互动。此外，我们的智能对讲机还具备强大的学习和适应能力，能够随着使用次数的增加，不断优化自身的回复逻辑和语音语调，以更好地满足您的个性化需求。',
        groups: [
            {
                groupId: 'talkie-1',
                retailPrice: 39,
                wholesalePrice: 19,
                icon: Talkie1Png,
                list: [
                    {
                        id: 'talkie-1-1',
                        enName: 'Orange version',
                        zhName: '橙色AI对讲机',
                        icon: Talkie11Png,
                    },
                    {
                        id: 'talkie-1-2',
                        enName: 'Gray version',
                        zhName: '灰色AI对讲机',
                        icon: Talkie12Png,
                    },
                    {
                        id: 'talkie-1-3',
                        enName: 'Gray wink version',
                        zhName: '灰色眨眼款对讲机',
                        icon: Talkie13Png,
                    },
                    {
                        id: 'talkie-1-4',
                        enName: 'Green version',
                        zhName: '绿色对讲机',
                        icon: Talkie14Png,
                    }
                ]
            }
        ]
    },
    {
        type: 'base',
        enName: 'AI figure base',
        zhName: 'AiSpea智能角色硬件',
        enDesc: 'Place and Chat: A new way for anime and figurine fans to interact. Place your character on the stand to access its story, speech habits, and voice. Chat with your favorite character today!',
        zhDesc: '重塑动漫与手办世界的互动新纪元！对于所有热爱动漫文化的你，以及那些精心收藏手办模型的粉丝而言，这不仅仅是一个产品，而是一次跨越次元的梦幻邂逅。想象一下，当你轻轻地将那些承载着你无数梦想与回忆的手办放置在特制的智能底座上时，一个全新的世界悄然开启。将您的角色放置在底座上，即可了解其故事背景、语言习惯及语音。立即与您喜爱的角色展开对话吧！',
        groups: [
            {
                groupId: 'base-1',
                retailPrice: 89,
                wholesalePrice: 33,
                icon: Base1Png,
                list: [
                    {
                        id: 'base-1-1',
                        enName: 'Creamy yellow version',
                        zhName: '奶油橙色智能底座',
                        icon: Base11Png,
                    },
                    {
                        id: 'base-1-2',
                        enName: 'Green version',
                        zhName: '绿色智能底座',
                        icon: Base12Png,
                    },
                    {
                        id: 'base-1-3',
                        enName: 'White version',
                        zhName: '白色智能底座',
                        icon: Base13Png,
                    },
                    {
                        id: 'base-1-4',
                        enName: 'Closed beta model',
                        zhName: '测试款智能底座',
                        icon: Base14Png,
                    },
                ]
            }
        ]
    }
]