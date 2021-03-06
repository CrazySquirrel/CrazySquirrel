new CSTiles(
        document.body,
        {
            gridSize: 8,
            tileMargin: 5,
            tilePadding: 5,
            tileContent: {
                type: 'none'
            },
            adaptiveMedia: {
                'imac': '2560-',
                'desktops-huge': '1920-2560',
                'desktops-big': '1600-1920',
                'desktops': '1440-1600',
                'base': '1280-1440',
                'tablet-landscape': '1024-1280',
                'tablet': '768-1024',
                'phone-landscape': '480-768',
                'phone': '320-480',
                'small': '-320'
            }
        },
        [
            {
                tileSize: [2, 2],
                tileContent: {
                    type: 'tiles',
                    params: {
                        grid: {
                            gridSize: 8,
                            tileMargin: 0,
                            tilePadding: 0,
                            tileContent: {
                                type: 'none'
                            },
                            adaptiveMedia: {
                                'imac': '2560-',
                                'desktops-huge': '1920-2560',
                                'desktops-big': '1600-1920',
                                'desktops': '1440-1600',
                                'base': '1280-1440',
                                'tablet-landscape': '1024-1280',
                                'tablet': '768-1024',
                                'phone-landscape': '480-768',
                                'phone': '320-480',
                                'small': '-320'
                            }
                        },
                        tiles: [
                            {
                                tileSize: [2, 2],
                                tileContent: {
                                    type: 'image',
                                    src: './images/1.jpg'
                                },
                            },
                            {
                                tileSize: [2, 2],
                                tileContent: {
                                    type: 'iframe',
                                    src: 'https://www.youtube.com/embed/w1I-HWAP6N8?controls=0&showinfo=0'
                                },
                            },
                            {
                                tileSize: [2, 2],
                                tileContent: {
                                    type: 'video',
                                    src: [
                                        './videos/index.mp4'
                                    ],
                                    poster: './images/3.jpg'
                                },
                            },
                            {
                                tileSize: [2, 2],
                                tileContent: {
                                    type: 'audio',
                                    src: [
                                        './audios/index.mp4'
                                    ],
                                    poster: './images/4.jpg'
                                },
                            },
                            {
                                tileSize: [2, 2],
                                tileContent: {
                                    type: 'image',
                                    src: './images/5.jpg'
                                },
                            },
                            {
                                tileSize: [2, 2],
                                tileContent: {
                                    type: 'image',
                                    src: './images/8.jpg'
                                },
                            },
                            {
                                tileSize: [2, 2],
                                tileContent: {
                                    type: 'image',
                                    src: './images/9.jpg'
                                },
                            }
                        ]
                    }
                }
            },
            {
                tileSize: [2, 2],
                tileContent: {
                    type: 'image',
                    src: './images/1.jpg'
                },
            },
            {
                tileSize: [2, 2],
                tileContent: {
                    type: 'iframe',
                    src: 'https://www.youtube.com/embed/w1I-HWAP6N8?controls=0&showinfo=0'
                },
            },
            {
                tileSize: [2, 2],
                tileContent: {
                    type: 'video',
                    src: [
                        './videos/index.mp4'
                    ],
                    poster: './images/3.jpg'
                },
            },
            {
                tileSize: [2, 2],
                tileContent: {
                    type: 'audio',
                    src: [
                        './audios/index.mp4'
                    ],
                    poster: './images/4.jpg'
                },
            },
            {
                tileSize: [2, 2],
                tileContent: {
                    type: 'html',
                    html: 'Text',
                    poster: './images/5.jpg'
                },
            },
            {
                tileSize: [2, 2],
                tileContent: {
                    type: 'dom',
                    query: '#dfgdfhdhfghf',
                    poster: './images/6.jpg'
                },
            },
            {
                tileSize: [2, 2],
                tileContent: {
                    type: 'image',
                    src: './images/7.jpg'
                },
            },
            {
                tileSize: [2, 2],
                tileContent: {
                    type: 'image',
                    src: './images/8.jpg'
                },
            },
            {
                tileSize: [2, 2],
                tileContent: {
                    type: 'image',
                    src: './images/9.jpg'
                },
            }
        ]
);