---
title: AppContainer
order: 1
group: 容器组件
demo:
  cols: 2
---

# AppContainer

用于包裹应用的实例对象，基于 antd 的 [`App`](https://ant.design/components/app-cn) 组件 和 [`ThemeProvider`](/usage/theme-provider) 进行封装。

因此该组件提供一键切换亮暗色主题、自定义主题、应用级作用域样式的统一入口。

## 使用说明

AppContainer 容器组件从应用级消费场景出发，在 ThemeProvider 基础上额外提供了两大功能：

1. 基础样式重置；
2. 注入作用域级别的样式；

### 1. 基础样式重置

如果没有包裹，在 dumi 文档中 a 节点的默认效果如下所示。

<code src="../demos/AppContainer/demo.tsx"></code>

而通过 antd App 组件的样式重置，可以保证不在 antd 组件中的原生标签（`<a>` 等）也能符合 antd 的默认样式（左下）。

<code src="../demos/AppContainer/WithContainer.tsx"></code>
<code src="../demos/AppContainer/WithProvider.tsx"></code>

### 2. 消费静态实例方法

<code src="../demos/AppContainer/staticMethod.tsx"></code>

### 3. 主题切换

AppContainer 默认集成亮暗色主题切换能力，通过 `appearance` props 即可快速完成亮暗色的主题切换。如需详细了解 `antd-style` 的主题切换能力，可以参阅 [主题切换](/guide/switch-theme) 这一部分。

<code src="../demos/AppContainer/SwitchTheme.tsx"></code>

### 4. 添加容器作用于样式

如果需要只影响 AppContainer 下的样式，可以使用 `className` 的 props 结合 css 或 [createStyles](/usage/create-styles) 方法，即可添加局部作用域样式。

<code src="../demos/AppContainer/AppGlobalStyle.tsx"></code>

:::info{title=全局样式作用域}
在 css-in-js 的世界中，局部作用域非常容易实现。因此，除非必要，应该尽量减少全局作用域的使用。 这也是 antd v5 中推荐的用法。
但如果仍然需全局作用域层面的样式注入，可以使用 [createGlobalStyles](/usage/global-styles)
:::

## 与 ThemeProvider 的区别？

`ThemeProvider` 和 `AppContainer` 看起来都是给应用提供主题消费场景的容器组件，但是在定位和使用上还是有很大区别的：

### ThemeProvider

ThemeProvider 本质上是一个 React Context 的数据容器，用于为子级应用提供主题消费的相关数据，因此：

- 集成了亮暗色主题切换的基础状态；
- 提供 antd 单一实例的静态对象消费方法（该静态方法能响应主题）；
- 该组件不具有真实的 DOM 节点，只有虚拟节点，因此无法通过节点样式来限制自定义样式的范围；

### AppContainer

AppContainer 在定位上，期望能作为应用的根节点的角色，因此：

- 基于 antd `<App />` 组件封装，有真实的 DOM 节点，可以把样式覆盖范围扩展到到不在 antd 组件内部的原生节点（例如 `a` 节点）；
- 重置基础样式；

## AppContainer API

在 [ThemeProvider](/api/theme-provider#themeprovider-api) 的 API 上扩充。

| name      | type   | default | description |
| --------- | ------ | ------- | ----------- |
| className | string | `n/a`   |             |