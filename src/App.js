import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [activity,setActivity]=useState('');
  var [items,setItems]=useState([]);
  const [isUpdate,setUpdate]=useState(false);
  const [id,setId]=useState(-1);
  const addItems=()=>{
    //asynchronous
    //setItems([...items,activity]);
    //console.log(items);
    //synchronous
    if(!activity){
      console.log('field is empty');
    }else{
      if(isUpdate===false){
        setItems((items)=>{
          const newData=[...items,activity]
          setActivity("")//for clearing input field
          return newData
        });
      }else{
        //console.log(items[id]);
        items[id]=activity;
        setItems(items);
        setId(-1);
        setUpdate(false);
        setActivity('')
      }
    }
    
  }

  const removeItem=(ind)=>{
    const updatedData=items.filter((ele,i)=>{
    return i!==ind
  });
    setItems(updatedData);
}

const updateItem=(ind)=>{
  const item=items[ind];
  setActivity(item);
  setUpdate(true);
  setId(ind);
}

const removeAllItem=()=>{
  setItems([]);
}
  return(
    <>
    <br></br>
    <center><h2 className='btn-lg bg-primary btn btn-center'>TODO List In React JS</h2></center><br></br><br></br>
    <div className='row'>
    <div className='col-sm-4'></div>
    <div className='col-sm-3'>
      <input type='text' autoFocus='true' placeholder='Name' className='form-control' name='nm' value={activity} onChange={(e)=>setActivity(e.target.value)}/> <br></br>
      {items.map((item,ind)=><h3 className=' text-white bg-primary btn' style={{float:'left',width:'100%',fontSize:'20px'}}>{item} <button style={{float:'right'}} className='btn btn-danger' onClick={()=>removeItem(ind)}>remove</button><button style={{float:'right'}} className='btn btn-success' onClick={()=>updateItem(ind)}>update</button></h3>)}
    </div>
    <div className='col-sm-3'>
      <input type='button' value='Add' className='btn btn-success' onClick={addItems}/> <br></br>
      {items.length > 0 &&
        <h2>
          <input type='button' value='Remove all' className='btn btn-danger' onClick={removeAllItem}/> <br></br>
        </h2>
      }
      
    </div>
    <div className='col-sm-3'></div>
    </div>
    <br></br>
    </>
  );
}