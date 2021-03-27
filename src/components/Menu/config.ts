import {MenuEntry} from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.takoyakidefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.takoyakidefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Krypton',
    icon: 'TakoyakiIcon',
    href: '/restaurants',
  },
  {
    label: 'Stands',
    icon: 'PoolIcon',
    href: '/stands',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xe9e7cea3dedca5984780bafc599bd69add087d56',
      },
      //  {
      //  label: 'BscScan',
      //  href: 'https://bscscan.com/address/',
      //  },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/goose-finance',
      // },
      // // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/takoyakidefi/',
      },
      {
        label: 'Docs',
        href: 'https://docs.takoyakidefi.com',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@takoyakidefi',
      },
    ],
  },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  {
    label: 'Road Map',
    icon: 'RoadmapIcon',
    href: 'https://docs.takoyakidefi.com/road-map',
  },
  {
    label: 'Audit by TechRate',
    icon: 'AuditIcon',
    href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/Takoyaki%20Finance.pdf',
  },
]

export default config
