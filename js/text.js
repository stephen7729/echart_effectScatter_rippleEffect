/**
 * Created by PC on 2017/2/13.
 */
var chart = echarts.init(document.getElementById('main'));
var option = {
    tooltip: {
        trigger: 'item'
    },
    geo : {
        map: 'china',
        //selectedMode : 'multiple',
        itemStyle: {
            normal: {
                areaColor: "rgba(68, 158, 192, 0)",
                borderColor: '#0B2B20',
                borderWidth: .3
                /*shadowColor: 'rgba(0, 0, 0, 0.5)',
                 shadowBlur: 10*/
            },
            emphasis: {
                areaColor : "rgba(68, 158, 192, 0)"
            }
        },
        zoom: 1.2
    },
    series: [
        {
            type: 'map',
            mapType: 'china',
            roam: false,
            zoom: 1.2,
            zlevel: 0,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#dddddd',
                        fontWeight: "bold",
                        fontSize: 14
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#B31F1E',
                        fontWeight: "bold",
                        fontSize: 14
                    }
                }
            },
            itemStyle: {
                normal: {
                    areaColor: "rgba(68, 158, 192, .5)",
                    borderColor: '#0B2B20',
                    borderWidth: .3
                },
                emphasis: {
                    areaColor: "rgba(68, 158, 192, .8)"
                }
            },
            data: []
        },
        {
            name: '已接入系统的地区',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 5,
            silent: true,
            rippleEffect: {
                num: 2,
                period: 2,
                scale: 10,
                brushType: 'fill'
            },
            symbol: 'circle',
            itemStyle: {
                normal: {
                    shadowBlur: 0,
                    opacity: 0
                }
            },
            data: [
                {
                    name: "河北",
                    value: [114.502461,38.04547]
                }
            ]
        }
    ]
};
chart.setOption(option);
