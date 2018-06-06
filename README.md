## 資料夾結構:
|-- app: 後端server程式  
> |-- route: server router  
> |-- db: 後端資料庫schema  

|-- dist: 由src編譯產出的前端資源檔案  
|-- src: 前端程式  
> |-- js: 前端javacript  
> |-- vue: vue元件  

|-- static: 前端資源檔案  
|-- view: html樣版  
|-- config-template.json: config.json 樣版，將此檔案複製成config.json並填入你的設定資料  
|-- webpack.config.js: webpack設定檔  

## cmd:
npm install: 安裝執行需要的npm package  
npm install --only=dev: 安裝npm開發工具  
npm run start: 啟動server  
npm run start-watch: 啟動server並監控server程式更新自動重啟  
npm run build: 以webpack編譯src資料夾，產生dist資料夾  
npm run build-watch: 監控前端程式更新自動以webpack編譯  
npm run test: 跑自動測試  
