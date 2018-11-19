export default  
[
    {
        title:"Sign up with Facebook",
        platform:"ios",
        devices:["iPhone 7 iOS 12.1","iPhone 8 iOS 12.0","iPad 5th Gen iOS 11.4"],
        type:"manual",
        priority:"high",
        status:{
            not_tested:4,
            blocked:1,
            passed:13,
            failed:3
        },
        estimated_time:45,
        step_count:17
    },
    {
        title:"Identity verification flow",
        platform:"android",
        devices:["Pixel XL 2 Android 7.4","Samsung Galaxy S7 Android 7.4","Samsung Galaxy Tab A 10.1\" Android 6.0.1"],
        type:"accessibility",
        priority:"medium",
        status:{
            not_tested:0,
            blocked:10,
            passed:1,
            failed:3
        },
        estimated_time:45,
        step_count:17
    },
    {
        title:"Identity verification flow",
        platform:"web",
        devices:["MacOS 10.1 Chrome 70","MacOS 10.X Safari","Windows 10 Firefox 68"],
        type:"accessibility",
        priority:"medium",
        status:{
            not_tested:0,
            blocked:1,
            passed:7,
            failed:3
        },
        estimated_time:45,
        step_count:11
    },
    {
        title:"Carousel verification flow",
        platform:"moweb",
        devices:["iPhone 7 iOS 11.4","iPhone X iOS 12"],
        type:"manual",
        priority:"low",
        status:{
            not_tested:17,
            blocked:0,
            passed:0,
            failed:0
        },
        estimated_time:45,
        step_count:17
    }
]