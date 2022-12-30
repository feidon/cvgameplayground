# Computer Vision Game Playground

## Installation

- Clone this repo first

- Install frontend & backend packages

yarn

```
# in './Playground'
cd frontend && yarn

# in './Playground'
cd backend && yarn
```

npm

```
# in './Playground'
cd frontend && npm inatll

# in './Playground'
cd backend && npm install
```

## Run in localhost

1. Open two terminal windows
2. Go to './Playground/backend' and copy the `.env.defaults` file to `.env` file
3. Fill in the MONGO_URL in the `.env` file with your [MongoDB](https://www.mongodb.com) url and set SALT_ROUNDS

```
#.env
MONGO_URL= (your mongo url)
SALT_ROUNDS= (you can set SALT_ROUNDS=10)
```

4. Go to './Playground'
5. In one window run this script to start your backend

```
yarn backend
```

or

```
npm run start
```

6. In the other window run this script to start your frontend

```
yarn frontend
```

or

```
npm start
```

7. Make sure your backend connect to your [MongoDB](https://www.mongodb.com)
8. Open http://localhost:3000 with your browser and you should be able to start plaing our games!

## Test

- Sign Up / Sign In 功能正常
- 可正常從 Lobby 進入各個遊戲
- 可正常從左側 DashBoard 進入遊戲以及 LeaderBoard
- 各個遊戲可以合理的判斷手勢與姿勢
- 分數與時間計算無誤且反應於 LeaderBoard

## Teamwork

郭柏志：

- 前端整體畫面 Layout 的 UI/UX 設計
- Sign In, Sign Up Page 功能與畫面設計
- Game Page 架構與畫面設計
- Pose Flappy Bird Game 遊戲開發
- 各頁面的 Routes 安排與 path 處理

費聿暄:

- Finger Exercise 遊戲開發
- 後端 graphql 開發與 mongodb 串連
- 成果部署

蔡予謙:

- Rock-Paper-Scissores Game 遊戲開發

## Reference

- [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html)
- [andypotato/fingerpse](https://github.com/andypotato/fingerpose)
