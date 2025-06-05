---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Microsoft Visual C++ 及 Windows SDK"
description: "After vs2022 17.12, the main productivity for VC"
date: 2025-02-24
author: xiaobin
tags: ["faq2", "Microsoft Visual C++", "Windows SDK"]
---
These options are available in [Visual Studio 2017 及以上版本的在线下载](https://tdtc-hrb.github.io/ops-win/posts/post-6)

## VC
```
--add Microsoft.VisualStudio.Component.VC.CoreIde `
--add Microsoft.VisualStudio.Component.VC.Tools.x86.x64 `
--add Microsoft.VisualStudio.Component.VC.Redist.14.Latest `
```
- MFC
```
--add Microsoft.VisualStudio.Component.VC.ATLMFC `
```
- ATL
```
--add Microsoft.VisualStudio.ComponentGroup.NativeDesktop.Core `
--add Microsoft.VisualStudio.Component.VC.ATL `
--add Microsoft.VisualStudio.Workload.NativeDesktop `
```

## Windows SDK
Windows LTS:
- Windows 8.1
- Windows 10 1607
> OS build 14393
- Windows 10 1809
> OS build 17763
- Windows 10 21H2
> OS build 19044
- Windows 11 24H2
> OS build 26100

### [previous versions](https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2017/install/workload-component-id-vs-build-tools?view=vs-2017)
```
Microsoft.VisualStudio.Component.Windows81SDK
Microsoft.VisualStudio.Component.Windows10SDK.14393
```
### [current versions]
- [Visual Studio 2019](https://learn.microsoft.com/en-us/visualstudio/install/workload-component-id-vs-build-tools?view=vs-2019)
```
Microsoft.VisualStudio.Component.Windows10SDK.19041
```
- [Visual Studio 2022](https://learn.microsoft.com/en-us/visualstudio/install/workload-component-id-vs-build-tools?view=vs-2022)
```
Microsoft.VisualStudio.Component.Windows11SDK.26100
```
