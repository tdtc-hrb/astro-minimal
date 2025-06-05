---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Visual Studio 2017 及以上版本的在线下载"
description: "down format and Common"
date: 2025-02-24
author: xiaobin
tags: ["faq2", "Visual Studio Online"]
---
- x86([vs2019](https://aka.ms/vs/16/release/vs_Community.exe)) and x64([vs2022](https://aka.ms/vs/17/release/vs_Community.exe))
- [down options](https://learn.microsoft.com/en-us/visualstudio/install/workload-component-id-vs-build-tools)

Note: 由于微软的支持策略，在v17（偶数为LTS）中有时候需要下载预览版

Due to Microsoft's support policy, you may need to download [preview](https://visualstudio.microsoft.com/vs/preview) versions in v17 (even numbers are LTS)

## format
- target directory
```
--layout TARGET
```
- components
```
--add NAME(Component)
```
- language
```
--lang en-US
```

exec:
```
.\vs_Community.exe --layout D:\win10soft\vs20xx `
--add <Component Name>
--lang en-US
```
所有的行尾(最后行除外) + 空格 + <code> `</code>

## Common
- Core
```
--add Microsoft.VisualStudio.Component.CoreEditor `
--add Microsoft.VisualStudio.Workload.CoreEditor `
--add Microsoft.VisualStudio.Component.Roslyn.Compiler `
--add Microsoft.VisualStudio.Component.TextTemplating `
```
- Microsoft Build Tools
```
--add Microsoft.Component.MSBuild `
```
- JIT
```
--add Microsoft.VisualStudio.Component.Debugger.JustInTime `
```
- IntelliCode
```
--add Microsoft.VisualStudio.Component.IntelliCode `
```
