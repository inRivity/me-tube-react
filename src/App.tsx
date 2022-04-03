import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd'
import { Advertisement1 } from './advertisement/Advertisement1';
import { Advertisement2 } from './advertisement/Advertisement2';
import { Advertisement3 } from './advertisement/Advertisement3';
import { Advertisement4 } from './advertisement/Advertisement4';
import { Advertisement5 } from './advertisement/Advertisement5';
import { Advertisement6 } from './advertisement/Advertisement6';
import { Advertisement7 } from './advertisement/Advertisement7';
import ReactPlayer from 'react-player'
import { CustomDragLayer } from './components/dragLayer';

function App() {
  const isSmartPhone = !!navigator.userAgent.match(/iPhone|Android.+Mobile/)
  const [stage, setStage] = useState(0)
  const [displayAdvertisementNumber, setDisplayAdvertisementNumber] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [playedSeconds, setPlayedSeconds] = useState(0)
  const [playedRate, setPlayedRate] = useState(0)
  const [loadedSeconds, seLoadedSeconds] = useState(0)
  const [loadedRate, setLoadedRate] = useState(0)
  const clearAdvertisement = (stage: number) => () => {
    setPlaying(true);
    setDisplayAdvertisementNumber(0);
    setStage(stage);
  }
  // const video = 'https://www.youtube.com/watch?v=uUvthLpSHrQ';
  const video = require('./video/video_for_dev.mp4');
  const onProgress = (state: {playedSeconds: number,played:number,loadedSeconds:number,loaded:number}) => {
      // console.log(state)
      setPlayedSeconds(state.playedSeconds)
      setPlayedRate(state.played)
      seLoadedSeconds(state.loadedSeconds)
      setLoadedRate(state.loaded)
  }
  useEffect(()=>{
    if(Math.floor(playedSeconds) === 5 && stage===0) {setDisplayAdvertisementNumber(1);setPlaying(false);}
    if(Math.floor(playedSeconds) === 10 && stage===1) {setDisplayAdvertisementNumber(2);setPlaying(false);}
    if(Math.floor(playedSeconds) === 15 && stage===2) {setDisplayAdvertisementNumber(3);setPlaying(false);}
    if(Math.floor(playedSeconds) === 20 && stage===3) {setDisplayAdvertisementNumber(4);setPlaying(false);}
    if(Math.floor(playedSeconds) === 25 && stage===4) {setDisplayAdvertisementNumber(5);setPlaying(false);}
    if(Math.floor(playedSeconds) === 30 && stage===5) {setDisplayAdvertisementNumber(6);setPlaying(false);}
    if(Math.floor(playedSeconds) === 35 && stage===6) {setDisplayAdvertisementNumber(7);setPlaying(false);}
    if(Math.floor(playedSeconds) === 0 && stage===7) {setStage(8);}
  },[playedSeconds,stage])
  const toMinutes = (seconds: number) => {
    console.log(seconds)
    const isLoaded = !isNaN(seconds)
    return isLoaded ? `${Math.floor(Math.floor(seconds)/60)}:${('0'+Math.floor(seconds)%60).slice(-2)}` : '0:00'
  }
  return (
    <DndProvider backend={isSmartPhone ? TouchBackend: HTML5Backend}>
    <div className="App">
      <div style={{position:'absolute',color:'#fff', backgroundColor:'#000', opacity: 0.3, padding: '16px', bottom:0}}>
        <p>for debug</p>
        <p>stage: {stage}</p>
        <p>displayAdvertisementNumber: {displayAdvertisementNumber}</p>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='bg-slate-400'>
          header
        </div>
        <div className='mx-auto relative bg-slate-200' style={{height: 'calc(100vw*0.56)', width: '100vw',}}>
          <div className='bg-white min-w-full min-h-full' style={{
            display: displayAdvertisementNumber!==0 ? 'block' : 'none',
          }}>
            
            {displayAdvertisementNumber=== 1 ? <Advertisement1 clearAdvertisement={clearAdvertisement(1)}/> : <></> }
            {displayAdvertisementNumber=== 2 ? <Advertisement2 clearAdvertisement={clearAdvertisement(2)}/> : <></> }
            {displayAdvertisementNumber=== 3 ? <Advertisement3 clearAdvertisement={clearAdvertisement(3)}/> : <></> }
            {displayAdvertisementNumber=== 4 ? <Advertisement4 clearAdvertisement={clearAdvertisement(4)}/> : <></> }
            {displayAdvertisementNumber=== 5 ? <Advertisement5 clearAdvertisement={clearAdvertisement(5)}/> : <></> }
            {displayAdvertisementNumber=== 6 ? <Advertisement6 clearAdvertisement={clearAdvertisement(6)}/> : <></> }
            {displayAdvertisementNumber=== 7 ? <Advertisement7 clearAdvertisement={clearAdvertisement(7)}/> : <></> }
          </div>
          <div className='bg-white min-w-full min-h-full w-full h-full' style={
            {display: displayAdvertisementNumber!==0 ? 'none' : 'block'}
          }>
            <ReactPlayer url={video} playing={playing} controls={true} onProgress={onProgress} progressInterval={200} width='100%' height='100%'/>
            <div className='flex flex-row absolute bottom-0 z-10 bg-white'>
              <button onClick={()=>setPlaying(!playing)}>{playing?'pause':'play'}</button>
              <div>
                {toMinutes(playedSeconds)}/ {toMinutes(Math.floor(loadedSeconds/loadedRate))}
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
    {isSmartPhone ? <CustomDragLayer /> : undefined}
    </DndProvider>
  );
}

export default App;
