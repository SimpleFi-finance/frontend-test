import React from 'react';
import './styles.css';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts';
import { W_ADDRESS, SET_SELECTED} from '../helpers/constants'
import {timestampToDate} from '../helpers/utils'
import {ContextApp} from "../store/context";
import { MainStoreContextType } from '../types';
 

export function ChartContainer() {

const {state, dispatch} = React.useContext<MainStoreContextType>(ContextApp);
const { pools, selectedPool} = state;

const poolsKeys = Object.keys(pools);
const selectedPoolObj = pools[selectedPool]; 
const isLoading = poolsKeys.length === 0;

  return (
  <div> 
    <b>Address: {W_ADDRESS}</b>
    { isLoading?
      <section>Loading data. Please wait...</section>
      :
      <section> 
        <b>Available LP's:</b>
        <ol>
          {poolsKeys.map((pool,i)=>{ 
            const isSelected = selectedPool===pool;
            return <li 
              className={`${isSelected? 'selected':''}`}
              onClick={()=>dispatch({type:SET_SELECTED, payload:pool}) } 
              key={i}> {pool}</li>
            })}
        </ol>
        {
          selectedPool? <ComposedChart
          width={1200}
          height={700}  
          data={selectedPoolObj.historyData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis  
            dataKey="timestamp"
            scale="point"
            tickFormatter={timestampToDate}  
            />
          <YAxis tickCount={5} />
          <Tooltip labelFormatter={(timestamp)=>`Date: ${timestampToDate(timestamp)}`} />
          <Legend />  
            <Area 
              type="monotone" 
              dataKey="tvl"
              name='Total Value Locked' 
              dot={false}
              strokeWidth={1.5} 
              fillOpacity={0.3} 
              stroke={'#9617b5'}  
              fill={'#9617b5'}  
            />
            <Area 
              type="monotone" 
              dataKey="aggBalance" 
              dot={false}
              strokeWidth={1.5} 
              fillOpacity={0.3} 
              name='Aggregated Balance' 
              stroke={'#1788b5'}  
              fill={'#1788b5'}  
            />
            
        </ComposedChart> :
        <div><i>Please select one of the LP above to see the data.</i></div>
        }
      </section>
      }
    </div>
  );
}



