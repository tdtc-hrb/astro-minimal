---
layout: ../../layouts/MarkdownPostLayout.astro
title: "top / right / bottom / left"
description: "Utilities for controlling the placement of positioned elements."
date: 2025-04-15
author: "tdtc"
---

|Class|Style|
|-|-|
|`inset-<number>`|`inset: calc(var(--spacing) * <number>);`|
|`-inset-<number>`|`inset: calc(var(--spacing) * -<number>);`|
|`inset-<fraction>`|`inset: calc(<fraction> * 100%);`|
|`-inset-<fraction>`|`inset: calc(<fraction> * -100%);`|
|inset-px|inset: 1px;|
|-inset-px|inset: -1px;|
|inset-full|inset: 100%;|
|-inset-full|inset: -100%;|
|inset-auto|inset: auto;|
|`inset-(<custom-property>)`|`inset: var(<custom-property>);`|
|`inset-[<value>]`|`inset: <value>;`|
|`inset-x-<number>`|`inset-inline: calc(var(--spacing) * <number>);`|
|`-inset-x-<number>`|`inset-inline: calc(var(--spacing) * -<number>);`|
|`inset-x-<fraction>`|`inset-inline: calc(<fraction> * 100%);`|
|`-inset-x-<fraction>`|`inset-inline: calc(<fraction> * -100%);`|
|inset-x-px|inset-inline: 1px;|
|-inset-x-px|inset-inline: -1px;|
|inset-x-full|inset-inline: 100%;|
|-inset-x-full|inset-inline: -100%;|
|inset-x-auto|inset-inline: auto;|
|`inset-x-(<custom-property>)`|`inset-inline: var(<custom-property>);`|
|`inset-x-[<value>]`|`inset-inline: <value>;`|
|`inset-y-<number>`|`inset-block: calc(var(--spacing) * <number>);`|
|`-inset-y-<number>`|`inset-block: calc(var(--spacing) * -<number>);`|
|`inset-y-<fraction>`|`inset-block: calc(<fraction> * 100%);`|
|`-inset-y-<fraction>`|`inset-block: calc(<fraction> * -100%);`|
|inset-y-px|inset-block: 1px;|
|-inset-y-px|inset-block: -1px;|
|inset-y-full|inset-block: 100%;|
|-inset-y-full|inset-block: -100%;|
|inset-y-auto|inset-block: auto;|
|`inset-y-(<custom-property>)`|`inset-block: var(<custom-property>);`|
|`inset-y-[<value>]`|`inset-block: <value>;`|
|`start-<number>`|`inset-inline-start: calc(var(--spacing) * <number>);`|
|`-start-<number>`|`inset-inline-start: calc(var(--spacing) * -<number>);`|
|`start-<fraction>`|`inset-inline-start: calc(<fraction> * 100%);`|
|`-start-<fraction>`|`inset-inline-start: calc(<fraction> * -100%);`|
|start-px|inset-inline-start: 1px;|
|-start-px|inset-inline-start: -1px;|
|start-full|inset-inline-start: 100%;|
|-start-full|inset-inline-start: -100%;|
|start-auto|inset-inline-start: auto;|
|`start-(<custom-property>)`|`inset-inline-start: var(<custom-property>);`|
|`start-[<value>]`|`inset-inline-start: <value>;`|
|`end-<number>`|`inset-inline-end: calc(var(--spacing) * <number>);`|
|`-end-<number>`|`inset-inline-end: calc(var(--spacing) * -<number>);`|
|`end-<fraction>`|`inset-inline-end: calc(<fraction> * 100%);`|
|`-end-<fraction>`|`inset-inline-end: calc(<fraction> * -100%);`|
|end-px|inset-inline-end: 1px;|
|-end-px|inset-inline-end: -1px;|
|end-full|inset-inline-end: 100%;|
|-end-full|inset-inline-end: -100%;|
|end-auto|inset-inline-end: auto;|
|`end-(<custom-property>)`|`inset-inline-end: var(<custom-property>);`|
|`end-[<value>]`|`inset-inline-end: <value>;`|
|`top-<number>`|`top: calc(var(--spacing) * <number>);`|
|`-top-<number>`|`top: calc(var(--spacing) * -<number>);`|
|`top-<fraction>`|`top: calc(<fraction> * 100%);`|
|`-top-<fraction>`|`top: calc(<fraction> * -100%);`|
|top-px|top: 1px;|
|-top-px|top: -1px;|
|top-full|top: 100%;|
|-top-full|top: -100%;|
|top-auto|top: auto;|
|`top-(<custom-property>)`|`top: var(<custom-property>);`|
|`top-[<value>]`|`top: <value>;`|
|`right-<number>`|`right: calc(var(--spacing) * <number>);`|
|`-right-<number>`|`right: calc(var(--spacing) * -<number>);`|
|`right-<fraction>`|`right: calc(<fraction> * 100%);`|
|`-right-<fraction>`|`right: calc(<fraction> * -100%);`|
|right-px|right: 1px;|
|-right-px|right: -1px;|
|right-full|right: 100%;|
|-right-full|right: -100%;|
|right-auto|right: auto;|
|`right-(<custom-property>)`|`right: var(<custom-property>);`|
|`right-[<value>]`|`right: <value>;`|
|`bottom-<number>`|`bottom: calc(var(--spacing) * <number>);`|
|`-bottom-<number>`|`bottom: calc(var(--spacing) * -<number>);`|
|`bottom-<fraction>`|`bottom: calc(<fraction> * 100%);`|
|`-bottom-<fraction>`|`bottom: calc(<fraction> * -100%);`|
|bottom-px|bottom: 1px;|
|-bottom-px|bottom: -1px;|
|bottom-full|bottom: 100%;|
|-bottom-full|bottom: -100%;|
|bottom-auto|bottom: auto;|
|`bottom-(<custom-property>)`|`bottom: var(<custom-property>);`|
|`bottom-[<value>]`|`bottom: <value>;`|
|`left-<number>`|`left: calc(var(--spacing) * <number>);`|
|`-left-<number>`|`left: calc(var(--spacing) * -<number>);`|
|`left-<fraction>`|`left: calc(<fraction> * 100%);`|
|`-left-<fraction>`|`left: calc(<fraction> * -100%);`|
|left-px|left: 1px;|
|-left-px|left: -1px;|
|left-full|left: 100%;|
|-left-full|left: -100%;|
|left-auto|left: auto;|
|`left-(<custom-property>)`|`left: var(<custom-property>);`|
|`left-[<value>]`|`left: <value>;`|

### Basic example
Use <code>top-<number></code>, 
<code>right-<number></code>, <code>bottom-<number></code>, 
<code>left-<number></code>, and <code>inset-<number></code> utilities like 
<code>top-0</code> and <code>bottom-4</code> to set the horizontal or vertical position of a [positioned element](https://tailwindcss.com/docs/position):
```
<!-- Pin to top left corner -->
<div class="relative size-32 ...">
  <div class="absolute top-0 left-0 size-16 ...">01</div>
</div>
<!-- Span top edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-x-0 top-0 h-16 ...">02</div>
</div>
<!-- Pin to top right corner -->
<div class="relative size-32 ...">
  <div class="absolute top-0 right-0 size-16 ...">03</div>
</div>
<!-- Span left edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-y-0 left-0 w-16 ...">04</div>
</div>
<!-- Fill entire parent -->
<div class="relative size-32 ...">
  <div class="absolute inset-0 ...">05</div>
</div>
<!-- Span right edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-y-0 right-0 w-16 ...">06</div>
</div>
<!-- Pin to bottom left corner -->
<div class="relative size-32 ...">
  <div class="absolute bottom-0 left-0 size-16 ...">07</div>
</div>
<!-- Span bottom edge -->
<div class="relative size-32 ...">
  <div class="absolute inset-x-0 bottom-0 h-16 ...">08</div>
</div>
<!-- Pin to bottom right corner -->
<div class="relative size-32 ...">
  <div class="absolute right-0 bottom-0 size-16 ...">09</div>
</div>
```

### Using negative values
To use a negative top/right/bottom/left value, prefix the class name with a dash to convert it to a negative value:
```
<div class="relative size-32 ...">
  <div class="absolute -top-4 -left-4 size-14 ..."></div>
</div>
```

### Using logical properties
Use <code>start-<number></code> or <code>end-<number></code> utilities like 
<code>start-0</code> and <code>end-4</code> to set the <code>inset-inline-start</code> 
and <code>inset-inline-end</code> [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts), 
which map to either the left or right side based on the text direction:
```
<div dir="ltr">
  <div class="relative size-32 ...">
    <div class="absolute start-0 top-0 size-14 ..."></div>
  </div>
  <div>
    <div dir="rtl">
      <div class="relative size-32 ...">
        <div class="absolute start-0 top-0 size-14 ..."></div>
      </div>
      <div></div>
    </div>
  </div>
</div>
```
For more control, you can also use the [LTR and RTL modifiers](https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support) 
to conditionally apply specific styles depending on the current text direction.

### Using a custom value
Use utilities like <code>inset-[<value>]</code> and <code>top-[<value>]</code> to set the position based on a completely custom value:
```
<div class="inset-[3px] ...">
  <!-- ... -->
</div>
```

## Ref
- [inset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inset)
- [top](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top)
- [right](https://developer.mozilla.org/zh-CN/docs/Web/CSS/right)
- [bottom](https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom)
- [left](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left)
- [top / right / bottom / left](https://tailwindcss.com/docs/top-right-bottom-left)
- [Responsive design](https://tailwindcss.com/docs/top-right-bottom-left#responsive-design)
