# back3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
back3
├─ .browserslistrc
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 09
│  │  │  └─ 53ae88904927244df0c8ac39511cdd649f8a2b
│  │  ├─ 1a
│  │  │  └─ dee56bc6788b9e06a1d3fa7e5c58aeb99f7104
│  │  ├─ 21
│  │  │  └─ 4388fe43cdfd7ce1c29cd3e401541ded620dba
│  │  ├─ 24
│  │  │  └─ 0acf47af142f37a7b9b81d6de05058e2afdf14
│  │  ├─ 3e
│  │  │  └─ 5a13962197105f2078d2a224cc57dfa09b4893
│  │  ├─ 3f
│  │  │  └─ a28070de24f2055171ca2e20543881cb7fdf1c
│  │  ├─ 40
│  │  │  └─ 3adbc1e527906a4aa59558cd582c20bcd1d738
│  │  ├─ 4a
│  │  │  └─ afc5f6ed86fe6dff8d4b6be59290cbdeb61656
│  │  ├─ 65
│  │  │  └─ 10c6a45035b6573151ff6196e4bdea78deb75d
│  │  ├─ 66
│  │  │  └─ d8dae1845d932ff8c16b201c278f7bcd77ec76
│  │  ├─ 7a
│  │  │  └─ f7a16e32050aa7c8510c1da14e28376b20c7ea
│  │  ├─ 90
│  │  │  └─ c49b7ca5a2a335d57abdeb9affc35f579d24ec
│  │  ├─ 91
│  │  │  └─ 0e297e0f53483455d2aa432887c3b7975d6c11
│  │  ├─ 92
│  │  │  └─ 4624515c356231d01060e82a207c50fdaed7c2
│  │  ├─ 99
│  │  │  └─ bf960e214e73e5513e054ac34c331b6d4b1a46
│  │  ├─ ac
│  │  │  └─ e78bbb8d1a6efa9ba173986b1150b46abfc296
│  │  ├─ b7
│  │  │  └─ 0b55a8861f1457c72d849c5153d412efde70bf
│  │  ├─ b9
│  │  │  └─ f3c7da7e1614bf5df82f62537e792c39448279
│  │  ├─ be
│  │  │  └─ da1694111fbe3c2e1272368eda1e8152c0f963
│  │  ├─ c9
│  │  │  └─ 37ad98847dff3495703ee9b42359c78406164e
│  │  ├─ ce
│  │  │  └─ ffa8e3acbd629064905827e0192b19c42ad254
│  │  ├─ df
│  │  │  └─ 36fcfb72584e00488330b560ebcf34a41c64c2
│  │  ├─ e1
│  │  │  └─ 2791b96c1a1feda351bfae7790a2d90a990467
│  │  ├─ e8
│  │  │  └─ d96d7a7049d1ddda2073b5bed757935fc35fbc
│  │  ├─ e9
│  │  │  └─ 558405fdcc02f12d757acb308e02937a7444f1
│  │  ├─ f2
│  │  │  └─ 5345696713d1bf0ab7b359da6ec17acf417b2d
│  │  ├─ f3
│  │  │  └─ d2503fc2a44b5053b0837ebea6e87a2d339a43
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ babel.config.js
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  └─ imgs
│  │     ├─ google.png
│  │     ├─ logo.png
│  │     └─ openai.png
│  ├─ components
│  │  ├─ nav-top.vue
│  │  └─ nav.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ store
│  │  └─ index.js
│  └─ views
│     ├─ centre.vue
│     ├─ editor.vue
│     ├─ layout.vue
│     ├─ login
│     │  └─ index.vue
│     ├─ order.vue
│     ├─ pre
│     │  └─ index.vue
│     ├─ profile
│     │  ├─ personcentre.vue
│     │  └─ setting.vue
│     ├─ register
│     │  └─ index.vue
│     ├─ test
│     │  ├─ test3_1.vue
│     │  ├─ test3_2.vue
│     │  ├─ test3_3.vue
│     │  └─ test3_4.vue
│     └─ user.vue
└─ vue.config.js

```