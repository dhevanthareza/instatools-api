# Node TS Starter

## Instalasi

1. Install Yarn
2. Jalankan `yarn install`
3. Copy `.env.example` ke `.env`

    Ubah settingan database.

4. Buat `config/config.json.example` ke `config/config.json`.

    Ubah settingan database, khusunya yang `development` untuk keperluan development.

5. Jalankan `yarn start`

## Setup Development Environment

1. Gunakan `Visual Studio Code`
2. Install package `TSLint (deprecated)`, iya yang deprecated

## Best Practices Development

1. Ceritanya kaya develop HMVC tapi view nya masih tetep satu folder
2. Semua module di taro src/modules/namaModules
3. Didalam folder tersebut mungkin bisa dikasih folder controller, middleware, dan lainya
4. penamaan file sesuai type namafile.tipe.ts contoh namaservice.service.ts atau namacontroller.service.ts
