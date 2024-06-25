import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
  
    const {onSent, recentPrompt, showResult, loading, resultData, setInput,input} = useContext(Context)
  
    return (
    <>
      <div className='main'>
      <div className='nav'>
       <p> Shanu's AI</p>
        <img src={assets.user_icon} alt='' />
      </div>
      <div className='main-container'>
            
            {!showResult?
          <>
            <div className='greet'>
                <p>How may I help you!?</p>
        </div>
       <div className='cards'>
        <div className='card'>
            <a>Book flight tickets</a>
            <img src={assets.compass_icon} alt='' />
        </div>
        <div className='card'>
            <a>Search anything across globe</a>
            <img src={assets.globe} alt='' />
        </div>
        <div className='card'>
            <a>Want help in your homework!?</a>
            <img src={assets.clg} alt='' />
        </div>
       </div>
</>
: <div className='result'>
<div className='result-title'>
    <img src={assets.user_icon} alt='' />
    <p>{recentPrompt}</p>
    </div><div className='result-data'>
        <img src={assets.ailogo} alt='' />
        {loading
        ?<div className='loader'>
            <hr/>
            <hr/>
            <hr/> 
            <hr/>
            <hr/> 
            <hr/>
            <hr/> 
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            
            </div>     
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
}
</div>
</div>
}

       <div className='main-bottom'>
        <div className='search-box'>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter your prompt here'/>
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
        </div>
        <p className='bottom-info'>
WARNING: This AI is a demo version, Information provided may be inacurate
</p>
       </div>
            </div>
        </div>
        
    </>
  )
}

export default Main
