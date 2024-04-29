import Mock from "mockjs";

Mock.mock('/api/login', 'post',  //用戶的假資料
    {
        "name": '@cname',
        "uId": 1,
        "uEmail": '@email',
        "userPicture": 1
    }
)

Mock.mock('/api/getWordToUById','post',
    [
        {
            year: 2023,
            comment: '我也不知道大哥要說怎麼，但反正我就隨便亂打，你們就隨便亂看'
        },
        {
            year: 2024,
            comment: '感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次,感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次,感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次'
        },
        {
            year: 2025,
            comment: '但反正就是亂打，只要有內容可以測試我就很滿意了'
        }
    ]

)