import CustomPage from '../../base/CustomPage'

const {
    GRID_DEMO_URL
} = getApp().globalData
const app = getApp()

CustomPage({
    data: {
        grids: [{
                imgUrl: app.globalData.iconTabbar,
                url: GRID_DEMO_URL,
                text: '7'
            },
            {
                imgUrl: app.globalData.iconTabbar,
                url: GRID_DEMO_URL,
                text: 'Grid'
            },
            {
                imgUrl: app.globalData.iconTabbar,
                url: GRID_DEMO_URL,
                text: 'Grid'
            },
            {
                imgUrl: app.globalData.iconTabbar,
                url: GRID_DEMO_URL,
                text: 'Grid'
            },
            {
                imgUrl: app.globalData.iconTabbar,
                url: GRID_DEMO_URL,
                text: 'Grid'
            },
            {
                imgUrl: app.globalData.iconTabbar,
                url: GRID_DEMO_URL,
                text: 'Grid'
            },
            {
                imgUrl: app.globalData.iconTabbar,
                url: GRID_DEMO_URL,
                text: 'Grid'
            },
            {
                imgUrl: app.globalData.iconTabbar,
                url: GRID_DEMO_URL,
                text: 'Grid'
            },
            {
                imgUrl: app.globalData.iconTabbar,
                url: GRID_DEMO_URL,
                text: 'Grid'
            }
        ]
    },

    CaiDan: function () {
        wx.showActionSheet({
            itemList: ['全部任务', '排行榜'],
            success(res) {
                console.log(res)
                if (res.tapIndex == 0) {
                    wx.navigateTo({
                        url: '../page3/page3'
                    })
                }
                else if (res.tapIndex == 1) {
                    wx.navigateTo({
                        url: '../paiming/paiming'
                    })
                }
            }
        })
    }
})