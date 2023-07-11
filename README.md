# essentials

## 프로젝트 생성
```
nvm user 18
yarn create vuetify
```
1. 프로젝트명 : 
2. Essentials (Vuetify, VueRouter, Pinia) 선택
3. Typescript 선택
4. npm 선택
```
uccess Installed "create-vuetify@x.x.x" with binaries:
    - create-vuetify

? Project name: ❯ vuetify-project // the folder to generate your application
? Which preset would you like to install? › - Use arrow-keys. Return to submit.
    Default (Vuetify)
    Base (Vuetify, VueRouter)
❯   Essentials (Vuetify, VueRouter, Pinia)
    Custom (Choose your features)
? Use TypeScript? › No / Yes    
? Would you like to install dependencies with yarn, npm, or pnpm? › - Use arrow-keys. Return to submit.
    yarn
❯   npm
    pnpm
    none
```

## 언어팩 설치
```
cd 프로젝트명
npm install --save @babel/types
vue add vue-i18n
```