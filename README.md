# echart_effectScatter_rippleEffect
为图标插件echart添加ripple的涟漪数量的配置项
#ChangeLog
增加可改变大小的涟漪数量配置项
#API
```javascript
series: [
  {
    type: 'effectScatter',
    rippleEffect: {
    period: 4,
    scale: 2.5,
    brushType: 'fill',
    num: 3 //扩展后的涟漪数目
    }
  }  
]
```
