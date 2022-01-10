type PriceType = {
    date: string
    eth: string
    reserves: string
    tokenAddress: string
    tokenDate: string
   }
  
type FarmType={
    balance?: number
    marketAddress: string
  }
      
type PoolHistoryDataType = {
    timestamp:string 
    aggBalance:number 
    tvl:number
  }
  
export type HistoryItemType = {
  balance: string,
  blockNumber: string,
  farms: FarmType[]
  price: PriceType,
  timestamp: string,
  transactions: any[]
}

export interface PoolsDataType{
    [key:string]:{historyData:PoolHistoryDataType[]}
  }

export type StreamEventDataType = Partial<{
  LP:{
    details?: {
      name?: string
      outputToken?:{
        decimals?: number
      }
    }
    history?: HistoryItemType[]
  }
  farming: any[]
  holdings: any[]
  protocol: any[]
}>


export type MainStoreType = {pools:PoolsDataType} & {selectedPool:string}

export type ActionType = {
  type: symbol
  payload?: any
}

export type MainStoreContextType = {
  state: MainStoreType,
  dispatch: React.Dispatch<any>
}