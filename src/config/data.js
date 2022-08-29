let data = [
  {
    name: 'granulation',
    date: '2021-03-20 22:23:32',
    title: '颗粒化控制可控性组件',
    from: '「react进阶」年终送给react开发者的八条优化建议',
    url: 'https://juejin.cn/post/6908895801116721160#heading-14',
    desc: '目的就是避免因自身的渲染更新或是副作用带来的全局重新渲染。不一定要将数据放到state'
  },
  {
    name: 'PureComponent',
    date: '2021-03-21 11:58:04',
    title: 'PureComponent',
    from: '「react进阶」年终送给react开发者的八条优化建议',
    url: 'https://juejin.cn/post/6908895801116721160#heading-19',
    desc: 'React.PureComponent 与 React.Component 几乎完全相同，但 React.PureComponent 通过props和state的浅对比来实现 shouldComponentUpate()。如果对象包含复杂的数据结构，它可能会因深层的数据不一致而产生错误的否定判断 无论组件是否是 PureComponent，如果定义了 shouldComponentUpdate()，那么会调用它并以它的执行结果来判断是否 update。'
  },
  {
    name: 'hooks-useMemo',
    date: '2021-03-21 14:16:31',
    title: '无状态组件hooks-useMemo 避免重复声明',
    from: '「react进阶」年终送给react开发者的八条优化建议',
    url: 'https://juejin.cn/post/6908895801116721160#heading-19',
    desc: '对于无状态组件，数据更新就等于函数上下文的重复执行。那么函数里面的变量，方法就会重新声明'
  },
  {
    name: 'suspense',
    date: '2021-03-21 14:55:27',
    title: '懒加载 Suspense 和 lazy',
    from: '「react进阶」年终送给react开发者的八条优化建议',
    url: 'https://juejin.cn/post/6908895801116721160#heading-30',
    desc: 'Suspense 和 lazy 可以实现 dynamic import 懒加载效果，原理和上述的路由懒加载差不多。在 React 中的使用方法是在 Suspense 组件中使用 <LazyComponent> 组件。'
  },
  {
    name: 'useMemo',
    date: '2021-03-21 20:09:41',
    title: 'useMemo隔离单元',
    from: '「react进阶」年终送给react开发者的八条优化建议',
    url: 'https://juejin.cn/post/6908895801116721160#heading-39',
    desc: '通过使用useMemo进行隔离，形成独立的渲染单元，每次更新上一个状态会被缓存，循环不会再执行，子组件也不会再次被渲染'
  },
  {
    name: 'classMemo',
    date: '2021-03-22 00:16:03',
    title: 'React.memo隔离单元',
    from: '「react进阶」年终送给react开发者的八条优化建议',
    url: 'https://juejin.cn/post/6908895801116721160#heading-39',
    desc: '在class声明的组件中，没有像 useMemo 的API ，但是也并不等于束手无策，我们可以通过 react.memo 来阻拦来自组件本身的更新。我们可以写一个组件，来控制react 组件更新的方向。我们通过一个 <NotUpdate> 组件来阻断更新流。'
  },
  {
    name: 'timeSplit',
    date: '2021-03-22 00:45:54',
    title: '时间分片',
    from: '「react进阶」年终送给react开发者的八条优化建议',
    url: 'https://juejin.cn/post/6908895801116721160#heading-52',
    desc: '时间分片的概念，就是用setTimeout把任务分割，分成若干次来渲染。一共40000个数据，我们可以每次渲染100个， 分次400渲染。对于列表来说，最佳方案是虚拟列表，而时间分片，更适合热力图，地图点位比较多的情况'
  },
  {
    name: 'virtualList',
    date: '2021-03-22 01:06:18',
    title: '虚拟列表',
    from: '「react进阶」年终送给react开发者的八条优化建议',
    url: 'https://juejin.cn/post/6908895801116721160#heading-54',
    desc: '虚拟列表是按需显示的一种技术，可以根据用户的滚动，不必渲染所有列表项，而只是渲染可视区域内的一部分列表元素的技术。正常的虚拟列表分为 渲染区，缓冲区 ，虚拟列表区。'
  },
  {
    name: 'batchUpdate',
    date: '2021-03-22 13:35:49',
    title: 'batchUpdate策略',
    from: '深入 react 细节之 - batchUpdate',
    url: 'https://zhuanlan.zhihu.com/p/78516581',
    desc: '同步的多次 setState 会被 batch 为一次更新。在一个异步的事件循环里面多次 setState，react 不会 batch。使用 ReactDOM.unstable_batchedUpdates 来强制 batch'
  }, {
    name: 'hooks',
    date: '2022-08-26 16:24:00',
    title: 'hook 集合',
    from: '',
    url: '',
    desc: '各种 hook 集合',
  }, {
    name: 'ahooks',
    date: '2022-08-26 11:52:06',
    title: 'ahooks demo',
    from: 'ahooks官网',
    url: 'https://ahooks.js.org/zh-CN',
    desc: '一套高质量可靠的 React Hooks 库',
  }
]

export default data