# Laravel Auth SPA

## 概要

Laravel Fortify + Sanctum で認証機能を作成したプロジェクトです。

## 環境

- PHP 8.2
- Laravel 10
- Vue 3
- TailwindCSS

## 開始手順

### 各種ライブラリのインストール

```powershell
cd laravel-auth-spa
composer install
npm install
```

### 環境設定

```powershell
cp .env.example .env
php artisan key:generate
```

.env の以下の箇所を変更

```
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

### データベース準備

```powershell
php artisan migrate
```

### 起動

```powershell
npm run build
php artisan serve
```
