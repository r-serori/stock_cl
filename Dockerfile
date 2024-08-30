# ベースイメージ
FROM node:22-alpine

# 作業ディレクトリの設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピーしてnpm install
COPY package*.json ./
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# Reactアプリケーションをビルド
RUN npm run build

# アプリケーションをサーブする
EXPOSE 3000
CMD ["npm", "start"]
