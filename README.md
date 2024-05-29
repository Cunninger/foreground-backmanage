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
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ f70ce69804176588bd9152bcf2e68d11e0fbc2
│  │  ├─ 01
│  │  │  └─ 0b48dfe1f0a3cf8e5029c51f875ca037953e26
│  │  ├─ 03
│  │  │  └─ 5cd6b09f9685269e1a1a9030a1b77a6be9003d
│  │  ├─ 05
│  │  │  └─ a37b18e68f14790ca3f5fd8d0e79d947609316
│  │  ├─ 08
│  │  │  └─ dafa70e85623969d4e7dfef6b77f2424cf932c
│  │  ├─ 09
│  │  │  └─ 53ae88904927244df0c8ac39511cdd649f8a2b
│  │  ├─ 0d
│  │  │  └─ 117b6923f3df52e2ee5a2fce58c061017e253e
│  │  ├─ 0e
│  │  │  └─ 78943d95240989f841f0e29007f24dfeb7a1da
│  │  ├─ 0f
│  │  │  └─ d613bfd8754c69913c5345afdb7961e3127023
│  │  ├─ 13
│  │  │  ├─ 1f82b9977dad2367232e2a50dff9502b55317b
│  │  │  └─ 2162ba4e061fbd9bf92ede8372234feb8c9c62
│  │  ├─ 17
│  │  │  ├─ 4446cd6c63fb60fa17caa212ad76cbf6ee2228
│  │  │  └─ 66f670cebbbf932d3406a8262ccfd58cb9bdff
│  │  ├─ 18
│  │  │  ├─ 14ce5eb13ab3d8aff19a07f2cf103e879ac006
│  │  │  ├─ 463d0b428c6a6c83217811022d2f94938ef732
│  │  │  └─ 5112c8674a96c26e90d8ec9532f064405b6dfa
│  │  ├─ 1a
│  │  │  ├─ 2e84ed9338f2a09550bc3577c945c2721c67bb
│  │  │  └─ dee56bc6788b9e06a1d3fa7e5c58aeb99f7104
│  │  ├─ 1e
│  │  │  ├─ 3fa21f3390869cad7970989615b821ca4dca4b
│  │  │  └─ d8f8e55356adaeeb8b16a23c7afec82bad0d3d
│  │  ├─ 1f
│  │  │  └─ 588697de32cf626c907b55577c04d43ac2316b
│  │  ├─ 20
│  │  │  └─ 7f9327d3f15a3482011c6cfa9ad86a4a085b0e
│  │  ├─ 21
│  │  │  └─ 4388fe43cdfd7ce1c29cd3e401541ded620dba
│  │  ├─ 22
│  │  │  └─ e8af9e32eb5d28d1a3266a36f8516f43cfc65e
│  │  ├─ 23
│  │  │  └─ 531a35c65ec577dac56c3ce215c70e111684cc
│  │  ├─ 24
│  │  │  ├─ 0acf47af142f37a7b9b81d6de05058e2afdf14
│  │  │  └─ 9571f1fd08644b947e8b009aa3fed313dffc51
│  │  ├─ 25
│  │  │  └─ a5e61d303ed04328e7016dda5d986e5f3f2dda
│  │  ├─ 26
│  │  │  └─ 58d6edb6919dd5d9fd5d1ceeb8a0b19d326ac8
│  │  ├─ 27
│  │  │  ├─ 05d8fb43ff51da6ebd79b80e2ed0d166940387
│  │  │  ├─ 47e5d0210e76c664ce3ef1cc1b17ea9e907b92
│  │  │  └─ cc9e0ccf83c2d4238873353e2022b9bd9bdd75
│  │  ├─ 29
│  │  │  ├─ 5b9646ccb6942050c274df10953f0ffc5bb72f
│  │  │  ├─ bd88e553ca641c908a51cec958ffaccf4d21dc
│  │  │  └─ f791093aaf5e403ae10a47753c2db57899e4f1
│  │  ├─ 2b
│  │  │  └─ 36a791fd42662ab768e5641ac789cb15a74d52
│  │  ├─ 2e
│  │  │  ├─ 2bf425dccebdcbbfd5d8e5c31bc29669b250f4
│  │  │  ├─ 4428a6dc0c9d5db24ce895edf76f616f0bc327
│  │  │  └─ c6fa62e03d09c22c8035bdfa62b7d72e27ccc9
│  │  ├─ 30
│  │  │  └─ d0c61fec8b8bd9a9cda3ccfbe40cd6d3d07a30
│  │  ├─ 34
│  │  │  ├─ 08f94ace8c696606121833e704a3076020dd29
│  │  │  └─ f2356c8fc0322cacce0988888e4b965f252556
│  │  ├─ 36
│  │  │  ├─ 50ed1b8dbac7bf65e4bfdd27610f438521aff1
│  │  │  └─ 99671f5b0dcb99c2568a9fa5c31bb63774a436
│  │  ├─ 37
│  │  │  └─ 6f95f0e1bdcc1433c920b28521b22d9aa5332e
│  │  ├─ 38
│  │  │  └─ 96649e5911551b12b688b9e87666637163dfd7
│  │  ├─ 39
│  │  │  └─ 9690048445a450a8d91d245628217ce643484a
│  │  ├─ 3d
│  │  │  └─ 47c3f22fa11a336a347b9e34b67aee360565d3
│  │  ├─ 3e
│  │  │  ├─ 5a13962197105f2078d2a224cc57dfa09b4893
│  │  │  └─ bcb4905f67959ad02dc9e29adb5c84c4ff3631
│  │  ├─ 3f
│  │  │  ├─ 0d8a56caab06d585cf596be5e79a6dc740d210
│  │  │  ├─ 5be88e032242a8cee300c0482f957255c9f7a0
│  │  │  └─ a28070de24f2055171ca2e20543881cb7fdf1c
│  │  ├─ 40
│  │  │  └─ 3adbc1e527906a4aa59558cd582c20bcd1d738
│  │  ├─ 43
│  │  │  └─ 348e547a24606a4ae629631d99588da3bd26f7
│  │  ├─ 44
│  │  │  └─ 8dad22cdc94c7be5230a9bd844750a1a5051ca
│  │  ├─ 45
│  │  │  └─ ae1985cb2c4b0c6bb161b3bf93b6ea0e45742c
│  │  ├─ 49
│  │  │  └─ 7974a1a069884bbc000ca51c8f99618e5160b8
│  │  ├─ 4a
│  │  │  └─ afc5f6ed86fe6dff8d4b6be59290cbdeb61656
│  │  ├─ 4e
│  │  │  ├─ 9e0e7ff4c358042f22113454fbc9f3bee13fb9
│  │  │  └─ cec8962a54d7e8409098f72fede33630c346d7
│  │  ├─ 55
│  │  │  └─ 83f38df53aadd05930e5d98ef85817bbbaa5d7
│  │  ├─ 56
│  │  │  └─ bf8c265c028f6efbca195cae6a654653710350
│  │  ├─ 57
│  │  │  └─ 397292f36c790c0aaab30a3d8ec432917e3dbc
│  │  ├─ 59
│  │  │  └─ 2967828ff6c8d3d13a807f8811d64b4febeb2f
│  │  ├─ 5d
│  │  │  └─ f9da3f978f576dc308fdb916869afc25e32152
│  │  ├─ 60
│  │  │  ├─ 22a76b412dff781a9744571f930dd284a509ca
│  │  │  └─ 46ccaeafa4568bb61a6a7e5281f13e655b4049
│  │  ├─ 65
│  │  │  ├─ 10c6a45035b6573151ff6196e4bdea78deb75d
│  │  │  └─ 9c6f7432b9eb3fb489c1d660917b1e58c4a68e
│  │  ├─ 66
│  │  │  └─ d8dae1845d932ff8c16b201c278f7bcd77ec76
│  │  ├─ 68
│  │  │  └─ 6b59f2f31570fd0605b914884f925c00b02559
│  │  ├─ 6a
│  │  │  └─ 6fe65c40167d972668e9849bf8d8aa88e97bd2
│  │  ├─ 6b
│  │  │  └─ 7c51b8c15f729a9c643228ca0e9f807b944822
│  │  ├─ 6d
│  │  │  └─ beece4d6df8143e82fe8a3738d410bca8cd172
│  │  ├─ 70
│  │  │  └─ 3edcd5f0b97f0782cfcf14d842f1df47696f3b
│  │  ├─ 72
│  │  │  └─ 0c688de74d3038d819c628c2bb928f70afd7dd
│  │  ├─ 73
│  │  │  └─ 499f1ba808a6cef39d8d23a1e703a1bb8ec000
│  │  ├─ 74
│  │  │  ├─ 23402b5b005c578d44a4a98e940083d8974a58
│  │  │  ├─ 806d2c63e9c16757ffc39bcea8e34546a55e66
│  │  │  └─ e2d3e95da64c2819904137b88c9876581db3fb
│  │  ├─ 75
│  │  │  └─ fd9b9745020982e029d7fa01edec1b2301c5d5
│  │  ├─ 76
│  │  │  └─ 9a5296d68b33169f51b2c5fdc7027b23e17faf
│  │  ├─ 78
│  │  │  ├─ cc20fad6939adcb860f05ff9e31a763f5a2692
│  │  │  └─ dba2b0fca717739a7164e6f0f2115169a6fb1a
│  │  ├─ 7a
│  │  │  └─ f7a16e32050aa7c8510c1da14e28376b20c7ea
│  │  ├─ 7b
│  │  │  └─ 258f4cde1be0427ee8e9fe7b2d5375bedeace0
│  │  ├─ 7c
│  │  │  ├─ 1433fdb8748ae1a826980e718f0e852b2bc8a4
│  │  │  └─ b8d219425c8ec2053a4a024a011ffb608e90f8
│  │  ├─ 7d
│  │  │  └─ 35d9d3b73a356212291c1b984c652298e5886f
│  │  ├─ 7e
│  │  │  └─ 73162c6d1aa83e8f656265e1007e921e4a272a
│  │  ├─ 81
│  │  │  ├─ ab25861ec0088ed78d8fb3c789d9e4dac47d93
│  │  │  └─ f98b33564e1551b2a21c7857b0bf98c5d92bef
│  │  ├─ 83
│  │  │  └─ bd5adf7ff0074f0e26b97395d7d2cdb9f56f3a
│  │  ├─ 84
│  │  │  ├─ 2cf2c7d04bf7e4e383880df64481458c0fa340
│  │  │  └─ 8575c4a457c5c3bf493029560cbf9c31714410
│  │  ├─ 86
│  │  │  └─ c1f1cc99729c10cc7f4a073ea9ad7e6ed6ddce
│  │  ├─ 8e
│  │  │  └─ f01d9d1b902a7d47c0624856a719a76b38dbff
│  │  ├─ 8f
│  │  │  ├─ 893aa6aaef22fe35857f14fe4c52e11965425c
│  │  │  └─ de885f0bcfa6db23ba57be8634c41c8558c45e
│  │  ├─ 90
│  │  │  ├─ 16069fd93749422fdba8d1475551ba730da5f1
│  │  │  ├─ 730be79ad0eac7ac687e9b693b75f8eeeaa0e3
│  │  │  └─ c49b7ca5a2a335d57abdeb9affc35f579d24ec
│  │  ├─ 91
│  │  │  └─ 0e297e0f53483455d2aa432887c3b7975d6c11
│  │  ├─ 92
│  │  │  └─ 4624515c356231d01060e82a207c50fdaed7c2
│  │  ├─ 93
│  │  │  ├─ 2e042a66b3b01a99caf6c9b6649bfd7a7b7f70
│  │  │  └─ 7c5d32f12ffe0550fdab591497585b54393987
│  │  ├─ 94
│  │  │  └─ e800f62198303207a28a39367e91657a00937e
│  │  ├─ 97
│  │  │  └─ 54a6510afb2ad7dd098ee1e1a88340547fb8ca
│  │  ├─ 98
│  │  │  ├─ 71bb273a1c52aa864a2c6bfef40018c77e5965
│  │  │  └─ eb78ea0180e1644905d88301b7bae45fb9f940
│  │  ├─ 99
│  │  │  ├─ bf960e214e73e5513e054ac34c331b6d4b1a46
│  │  │  └─ e98c788532cd5a77e940f78ca0cc73f67ab9d2
│  │  ├─ 9a
│  │  │  └─ 2443a008e684e4628eee405dbd2061abeaa999
│  │  ├─ 9d
│  │  │  └─ a1dc20908df70ac586a7bae09984bd1fd4f3b7
│  │  ├─ 9e
│  │  │  └─ 108f030b26b8397edcc69525fe8b4aec666780
│  │  ├─ a3
│  │  │  └─ 5609ab1bb70283c7c9f4382f656c4bf1966c74
│  │  ├─ a6
│  │  │  ├─ 57590efcb2b610cea06508e4074b956ebd3dd0
│  │  │  └─ fb5b22228a61196c95b9eeb455d4ad5c1c57ec
│  │  ├─ a8
│  │  │  └─ 77b3f74a0e3d15343d155dcaf2341529745efe
│  │  ├─ ab
│  │  │  ├─ 7925de2934095ae67931ffaa33900a3af4d0d2
│  │  │  └─ ec1dcdb985fdac76235b87cd2d2f1fc5a9c1bd
│  │  ├─ ac
│  │  │  └─ e78bbb8d1a6efa9ba173986b1150b46abfc296
│  │  ├─ ad
│  │  │  └─ 11a5e688584f57d7a92ca22a273a17a588099a
│  │  ├─ b1
│  │  │  └─ 578af2cff29ad25d63f0e4e6808b37c65da643
│  │  ├─ b4
│  │  │  └─ 3921d8a4bdaef58b7a8d0e61c74e9502d779f4
│  │  ├─ b5
│  │  │  └─ 52826171aa04ac0953ee7233e8453995e84a48
│  │  ├─ b7
│  │  │  ├─ 0b55a8861f1457c72d849c5153d412efde70bf
│  │  │  └─ cdf039470128754ca81866183f8a6ace8e8c87
│  │  ├─ b8
│  │  │  ├─ 5c3da3bc31ac03fbda19bcaa5f379b0fb4821b
│  │  │  └─ 73d40143e4a227cecba04f84d3744ced70dd85
│  │  ├─ b9
│  │  │  ├─ 42cf9fbcf5ffc4d029d81c964d27ffc4867689
│  │  │  └─ f3c7da7e1614bf5df82f62537e792c39448279
│  │  ├─ bb
│  │  │  └─ 200f1c07ce30b66c15a856c218326c3113a4ea
│  │  ├─ be
│  │  │  └─ da1694111fbe3c2e1272368eda1e8152c0f963
│  │  ├─ c1
│  │  │  └─ fa37ec73d1454c7e5902427819795448fa11ec
│  │  ├─ c5
│  │  │  └─ 7f038ffb936a9ae5f92445355bd35d8d46b837
│  │  ├─ c9
│  │  │  ├─ 37ad98847dff3495703ee9b42359c78406164e
│  │  │  ├─ b7edb4f305ec2928239f3a9f254cf69c6fdae7
│  │  │  └─ d62d09e8e69e7f6cf421a3800a3387e10651b6
│  │  ├─ cb
│  │  │  └─ 3b6eff762647e25468566b4c65a9f431ce649a
│  │  ├─ cc
│  │  │  └─ c527834602ef10d1a1e1d377de7eeedeec6023
│  │  ├─ ce
│  │  │  └─ ffa8e3acbd629064905827e0192b19c42ad254
│  │  ├─ d2
│  │  │  └─ a5b28ad3621c9dfe736baba35c5143a664e5e8
│  │  ├─ d4
│  │  │  └─ a8de6930ad2bb5fa8fff83c8b32067196379cf
│  │  ├─ d6
│  │  │  ├─ 1fc0b5722da92fb663122d303b48ea327b476d
│  │  │  └─ 39312e5696e1935e979acc2335bac51d1afaa4
│  │  ├─ d7
│  │  │  └─ 9c2976d224ec07f3231f66e03e088183208c9c
│  │  ├─ d8
│  │  │  ├─ af3eb56e4489371a0d8d0b3d5135eef91517dc
│  │  │  └─ e383d22b101cafa200f8784f529dd678cabd91
│  │  ├─ da
│  │  │  └─ 1d7f624af159022af91d8f1e1f12f14a90ef33
│  │  ├─ de
│  │  │  └─ 03b6155982dd0c6eb8c8447e80bc092c531660
│  │  ├─ df
│  │  │  └─ 36fcfb72584e00488330b560ebcf34a41c64c2
│  │  ├─ e1
│  │  │  └─ 2791b96c1a1feda351bfae7790a2d90a990467
│  │  ├─ e6
│  │  │  └─ fdbd534884ef45c9dae28eb1a6f85704893efd
│  │  ├─ e8
│  │  │  ├─ 74ab872cb501816ed54fb06296cd99c8ed9b0e
│  │  │  ├─ d96d7a7049d1ddda2073b5bed757935fc35fbc
│  │  │  └─ e115ae884dac047725759a9b27d751df2b92a9
│  │  ├─ e9
│  │  │  └─ 558405fdcc02f12d757acb308e02937a7444f1
│  │  ├─ ea
│  │  │  └─ e844982b6d779a537ce9d5783a78902f25c319
│  │  ├─ ee
│  │  │  └─ 11c71b3317fd66865a8c8c663d7f4d0b83581a
│  │  ├─ f0
│  │  │  └─ f6aefbe91bb7183f36a459c9190203e94aa35c
│  │  ├─ f2
│  │  │  └─ 5345696713d1bf0ab7b359da6ec17acf417b2d
│  │  ├─ f3
│  │  │  ├─ d2503fc2a44b5053b0837ebea6e87a2d339a43
│  │  │  └─ dc3af0a2e123f07825acae2204383a35bceef8
│  │  ├─ f4
│  │  │  └─ cb570e5a3c241b13b2404d63fe8db49c6a1a08
│  │  ├─ f5
│  │  │  ├─ 7e25d440e1891848da79062e78d412edfca130
│  │  │  └─ c070f2a38e2c7120c6cf9adafe5d1a9c728e0b
│  │  ├─ f7
│  │  │  └─ cd697d5c1f915b91df5a95869e27275b470751
│  │  ├─ fa
│  │  │  └─ a11da8e7e655433ff7be94ecf8e166047727bf
│  │  ├─ fc
│  │  │  └─ 9bf063c0b4fe9e0a7f4c9157989486dffab149
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ babel.config.js
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ quick.bat
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  └─ imgs
│  │     ├─ aabc.jpg
│  │     ├─ google.png
│  │     ├─ logo.png
│  │     └─ openai.png
│  ├─ components
│  │  ├─ nav-top.vue
│  │  └─ nav.vue
│  ├─ frontend
│  │  ├─ components
│  │  │  ├─ Footer.vue
│  │  │  └─ Header.vue
│  │  └─ views
│  │     ├─ aboutme
│  │     │  └─ index.vue
│  │     ├─ header
│  │     │  └─ discuss.vue
│  │     ├─ Home.vue
│  │     └─ Layout.vue
│  ├─ FrontendApp.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ store
│  │  └─ index.js
│  └─ views
│     ├─ aichat.vue
│     ├─ algoritms.vue
│     ├─ centre.vue
│     ├─ editor.vue
│     ├─ layout.vue
│     ├─ login
│     │  └─ index.vue
│     ├─ navtop
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
│     ├─ user.vue
│     └─ video.js
└─ vue.config.js

```