import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react"
import react from 'react';
function App() {
  const [data,setData] = useState([])
  const [year,setYear] = useState("1960")
  const [name,setName] = useState([])
  const [tenData,setTen] =useState([])
  const getdata=async()=>{
    try{
      let res= await fetch("https://codejudge-question-artifacts.s3.ap-south-1.amazonaws.com/poplution-countries-yearwise.json")
      let data = await res.json();
      setData(data)
      // data.sort((a,b)=>(b.Value-a.Value))
      const filteredData = data.filter((e)=>{
          return e.Year==year
      })
      let ten=[];
      for(let i=0;i<10;i++)
      {
        ten[i]=filteredData[i];
      }
      setTen(ten);
      setTimeout(()=>{
        data.sort((a,b)=>(b.Value-a.Value))
      const filteredData = data.filter((e)=>{
        return e.Year==year
    })
    let ten=[];
    for(let i=0;i<10;i++)
    {
      ten[i]=filteredData[i];
    }
    setTen(ten);
      },100)
    }
    catch(err){

    }
  } 
useEffect(()=>{
  getdata()
},[])
function handleChange(e){
 setYear(e.target.value)
 getdata();
}
console.log(year)
  console.log(tenData)
  return (
    <div className="App">
     <div>
       <select className='chart-select' onChange={handleChange}>
        {data.map((e)=>(
          <option value={e.Year}>{e.Year}</option>
        ))}
       </select>
     </div>
          <div className='bar-chart' style={{display:"flex"}}>
              <div>
                {tenData.map((e)=>(
                  <div>{e['Country Name']}</div>
                ))}
              </div>
              <div></div>
              <div>
              {tenData.map((e)=>(
                  <div>{e['Value']}</div>
                ))}
              </div>
          </div>
    </div>
  );
}

export default App;
