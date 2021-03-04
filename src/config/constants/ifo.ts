import {Ifo} from './types'

const ifos: Ifo[] = [
  {
    id: 'watch',
    address: '0x55344b55C71Ad8834C397E6e08dF5195cF84fe6d',
    isActive: true,
    name: 'Yieldwatch (WATCH)',
    subTitle: 'A smart yield farming dashboard on BSC',
    description:
      'Yieldwatch is a smart yield farming dashboard on Binance Smart Chain that lets you monitor your liquidity pools, yield farming and token staking performance with fast and casual UI. The $WATCH token is a membership token, which is required to access advanced PRO features.',
    launchDate: 'Mar. 4',
    launchTime: '5PM SGT',
    saleAmount: '8,000,000 WATCH',
    raiseAmount: '$800,000',
    cakeToBurn: '$400,000',
    projectSiteUrl: 'https://yieldwatch.net/',
    currency: 'CAKE-BNB LP',
    currencyAddress: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    tokenDecimals: 18,
    //  tokenSymbol: 'WATCH',
    releaseBlockNumber: 5294924,
    //  campaignId: '511070000',
  },
  {
    id: 'ditto',
    address: '0x570c9eB19553526Fb35895a531928E19C7D20788',
    isActive: false,
    name: 'Ditto (DITTO)',
    subTitle: 'Next-gen elastic supply token',
    description:
      'Ditto is the first elastic supply token on the Binance Smart Chain. Its goal is to maintain a stable price of $1, where its supply will adapt to changes in demand. All supply changes will apply equally to every wallet holding Ditto, and holders should always have the same % of the total supply',
    launchDate: 'Dec. 23',
    launchTime: '3PM SGT',
    saleAmount: '700,000 DITTO',
    raiseAmount: '$630,000',
    cakeToBurn: '$315,000',
    projectSiteUrl: 'https://ditto.money/',
    currency: 'CAKE-BNB LP',
    currencyAddress: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    tokenDecimals: 9,
    releaseBlockNumber: 3279767,
  },
]

export default ifos
