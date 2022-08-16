import React, { useState, useEffect } from 'react';
import '../App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';
import { Advertisement1 } from '../advertisement/Advertisement1';
import { Advertisement2 } from '../advertisement/Advertisement2';
import { Advertisement3 } from '../advertisement/Advertisement3';
import { Advertisement4 } from '../advertisement/Advertisement4';
import { CustomDragLayer } from '../components/CustomDragLayer';
import Attention from './Attention';
// https://github.com/cookpete/react-player/issues/1436#issuecomment-1098551225
import { default as _ReactPlayer } from 'react-player';
import { ReactPlayerProps } from 'react-player/types/lib';
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

function Main() {
  const isSmartPhone = !!navigator.userAgent.match(/iPhone|Android.+Mobile/);
  const [stage, setStage] = useState(-1);
  const [isDisplayAttention, setIsDisplayAttention] = useState(true);
  const [displayAdvertisementNumber, setDisplayAdvertisementNumber] =
    useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [playedRate, setPlayedRate] = useState(0);
  const [loadedSeconds, seLoadedSeconds] = useState(0);
  const [loadedRate, setLoadedRate] = useState(0);
  const clearAdvertisement = (stage: number) => () => {
    setPlaying(true);
    setDisplayAdvertisementNumber(0);
    setStage(stage);
  };
  const video = 'https://www.youtube.com/watch?v=uUvthLpSHrQ';
  // const video = require('../video/video_for_dev.mp4');

  const onProgress = (state: {
    playedSeconds: number;
    played: number;
    loadedSeconds: number;
    loaded: number;
  }) => {
    // console.log(state)
    setPlayedSeconds(state.playedSeconds);
    setPlayedRate(state.played);
    seLoadedSeconds(state.loadedSeconds);
    setLoadedRate(state.loaded);
  };
  const onClickGameStart = (muted: boolean) => () => {
    setPlaying(false);
    setDisplayAdvertisementNumber(1);
    setStage(0);
    setIsDisplayAttention(false);
    setMuted(muted);
  };

  useEffect(() => {
    if (Math.floor(playedSeconds) === 0 && stage === 0) {
      setDisplayAdvertisementNumber(1);
      setPlaying(false);
    }
    if (Math.floor(playedSeconds) === 1 && stage === 1) {
      setDisplayAdvertisementNumber(2);
      setPlaying(false);
    }
    if (Math.floor(playedSeconds) === 2 && stage === 2) {
      setDisplayAdvertisementNumber(3);
      setPlaying(false);
    }
    if (Math.floor(playedSeconds) === 3 && stage === 3) {
      setStage(8);
    }
  }, [playedSeconds, stage]);

  const toMinutes = (seconds: number) => {
    console.log(seconds);
    const isLoaded = !isNaN(seconds);
    return isLoaded
      ? `${Math.floor(Math.floor(seconds) / 60)}:${(
          '0' +
          (Math.floor(seconds) % 60)
        ).slice(-2)}`
      : '0:00';
  };

  return (
    <DndProvider backend={isSmartPhone ? TouchBackend : HTML5Backend}>
      <CustomDragLayer />
      <Attention
        isDisplay={isDisplayAttention}
        onGameStart={onClickGameStart}
      />
      <div className="App">
        <div
          style={{
            position: 'absolute',
            color: '#fff',
            backgroundColor: '#000',
            opacity: 0.3,
            padding: '16px',
            bottom: 0
          }}
        >
          <p>for debug</p>
          <p>stage: {stage}</p>
          <p>displayAdvertisementNumber: {displayAdvertisementNumber}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-slate-400">header</div>
          <div
            className="mx-auto relative bg-slate-200"
            style={{
              height: 'calc(856px*0.56)',
              width: '856px',
              maxHeight: 'calc(856px*0.56)',
              maxWidth: '856px',
              minHeight: 'calc(856px*0.56)',
              minWidth: '856px',
              overflow: 'hidden'
            }}
          >
            <div
              className="bg-white min-w-full min-h-full w-full h-full"
              style={{
                display: displayAdvertisementNumber !== 0 ? 'block' : 'none',
                border: '1px solid'
              }}
            >
              <Advertisement1
                clearAdvertisement={clearAdvertisement(1)}
                isDisplay={displayAdvertisementNumber === 1}
                muted={muted}
              />
              <Advertisement2
                clearAdvertisement={clearAdvertisement(2)}
                isDisplay={displayAdvertisementNumber === 2}
                muted={muted}
              />
              <Advertisement3
                clearAdvertisement={clearAdvertisement(3)}
                isDisplay={displayAdvertisementNumber === 3}
                muted={muted}
              />
              <Advertisement4
                clearAdvertisement={clearAdvertisement(4)}
                isDisplay={displayAdvertisementNumber === 4}
                muted={muted}
              />
            </div>
            <div
              className="bg-white min-w-full min-h-full w-full h-full"
              style={{
                display: displayAdvertisementNumber !== 0 ? 'none' : 'block',
                border: '1px solid'
              }}
            >
              <ReactPlayer
                url={video}
                playing={playing}
                controls={true}
                muted={muted}
                onProgress={onProgress}
                progressInterval={200}
                width="100%"
                height="100%"
              />
              <div className="flex flex-row absolute bottom-0 z-10 bg-white">
                <button onClick={() => setPlaying(!playing)}>
                  {playing ? 'pause' : 'play'}
                </button>
                <div>
                  {toMinutes(playedSeconds)}/{' '}
                  {toMinutes(Math.floor(loadedSeconds / loadedRate))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default Main;
