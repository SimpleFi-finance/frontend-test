import React, {useEffect} from 'react';
import {FULL_URL, GET_DATA} from '../helpers/constants'
import { StreamEventDataType, HistoryItemType } from '../types'
import {ContextApp} from "../store/context";
import { initialState } from '../store/state';
import { mainReducer } from '../store/reducer';

const App:React.FC = ({children}) =>{
    const [state, dispatch] = React.useReducer(mainReducer, initialState);
  
    useEffect(() => {
      const serverStreamEvent = new EventSource(FULL_URL);
      serverStreamEvent.addEventListener('open', ()=>{
        console.log('stream was opened')
      });
      serverStreamEvent.addEventListener('userPosition', getStreamedData);
      return () => serverStreamEvent.close();
    },[]);
  
  
    const getStreamedData = (e: Event)=>{
      const messageEvent = (e as MessageEvent)
      const dataToJson:StreamEventDataType = JSON.parse(messageEvent.data);
      const nameLp = dataToJson?.LP?.details?.name;
      const decimals = dataToJson?.LP?.details?.outputToken?.decimals || 18;
      const history = dataToJson?.LP?.history;
    
      if (nameLp && history){
        const historyData = history.map((el:HistoryItemType)=>{ 
          const { timestamp, balance:userBalance, price, farms } = el;
          let farmsBalance = 0;
          for (let farm of farms){
            farmsBalance += (farm.balance || 0)/ Math.pow(10,decimals)
          }
         
          const aggBalance = (parseInt(userBalance) / Math.pow(10, decimals) + farmsBalance)
          const tvl = aggBalance * parseInt(price?.eth) || 0
    
          return {timestamp, aggBalance, tvl}
        })
      
        dispatch({ type: GET_DATA, payload: {name:nameLp, historyData:historyData }});
      } 
    } 
  
    return <ContextApp.Provider value={{state, dispatch}}>
      {children}
    </ContextApp.Provider>
  }


  export default App;