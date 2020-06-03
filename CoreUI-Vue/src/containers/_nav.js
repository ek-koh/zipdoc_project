export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: '개요',
        to: '/outline',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['인사이트']
      },
      {
        _name: 'CSidebarNavItem',
        name: '지역',
        to: '/insight/region',
        icon: 'cil-lightbulb'
      },
      {
        _name: 'CSidebarNavItem',
        name: '소비자',
        to: '/insight/consumer',
        icon: 'cil-lightbulb'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['상세 분석결과']
      },
      {
        _name: 'CSidebarNavItem',
        name: '시장공급규모',
        to: '/details/supply',
        icon: 'cil-calculator'
      },
      {
        _name: 'CSidebarNavItem',
        name: '시장수요규모',
        to: '/details/demand',
        icon: 'cil-calculator'
      },
      {
        _name: 'CSidebarNavItem',
        name: '견적 및 계약분석',
        to: '/details/estcontract',
        icon: 'cil-calculator'
      },
      {
        _name: 'CSidebarNavItem',
        name: '수요공급분석',
        to: '/details/difference',
        icon: 'cil-calculator'
      }
    ]
  }
]