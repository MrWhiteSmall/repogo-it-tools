# 来源、许可与重新构建

上游：https://github.com/CorentinTh/it-tools
固定提交：`d505845f918e946ec300af7b36efc107e2f66e9e`。
项目 GPLv3 完整原文位于根目录 `LICENSE`；源码与原署名保留在 `source/`，可随运行包获得对应源码，不需另购或索取。

## 本地版改动（2026-11-05）

默认语言改为上游已有的中文；复用 Naive UI 原生中文区域设置；补齐二维码、清单和统计的操作文案、复制/搜索提示；只注册这三项工具页面。原算法未重写。停用网页应用缓存注册，关闭统计和推广横幅的构建配置。加入依赖模块清单构建钩子（只有设置 `REPOGO_MODULE_INVENTORY` 时才输出文件）、独立回环静态服务与中文启动/停止/重启脚本。

上游其他工具的源文件仍随 `source/` 提供。它们没有进入本运行版菜单和打包依赖路径，未声称实际验收。二维码示例文字、清单和原生操作截图由 RepoGo 本次原创制作。

## 重新构建

开发构建需自行安装 Node 与锁定的包管理器，不属于会员首次使用前置要求。进入 `source/` 后，按 `package.json` 的 `pnpm@9.11.0` 与 `pnpm-lock.yaml` 安装：`pnpm install --frozen-lockfile --ignore-scripts`。使用 `VITE_VERCEL_ENV=production VITE_TRACKER_ENABLED=false pnpm build` 构建。把生成的 `dist/` 放到根目录 `app/dist/`，再运行启动脚本。

本轮安装和构建已完成；指定的清单转换、文本统计、下载类型识别三组上游单测共7项通过。根目录 `app/server.js` 为可修改的独立静态服务源码。

## 随包 Node

来自官方 https://nodejs.org/dist/v22.21.1/node-v22.21.1-darwin-arm64.tar.gz ，原始完整归档 SHA256：`c170d6554fba83d41d25a76cdbad85487c077e51fa73519e41ac885aa429d8af`。

随包归档仅重新打包官方未修改的 `bin/node` 和完整 `LICENSE`，精简归档 SHA256：`e4173c79b3053e13def36f354c08983e4442d65672bdc08ec9df25d591d744d0`。完整许可另放 `licenses/NODE-LICENSE.txt`。这不是完整官方发行归档。

`licenses/packages/` 保留浏览器构建所用第三方库和图标的原许可证、声明及版本。DOMPurify 按双许可中的 Apache-2.0 选项使用；其原始许可一并保留。
