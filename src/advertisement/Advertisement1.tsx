import React, { Dispatch, SetStateAction, useState } from 'react';
import ReactPlayer from 'react-player';

interface Props {
  clearAdvertisement: () => void;
}

/**
 * スポイトの広告
 * 5回クリックでスキップさせる
 * 内容は動画垂れ流しでOK
 * 最後まで言ったら静止
 */
export function Advertisement1(props: Props) {
  const [waitCount, setWaitCount] = useState(5);
  const { clearAdvertisement } = props;
  const [playing, setPlaying] = useState(true);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [playedRate, setPlayedRate] = useState(0);
  const [loadedSeconds, seLoadedSeconds] = useState(0);
  const [loadedRate, setLoadedRate] = useState(0);
  const video = require('../video/video_for_dev.mp4');
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

  const onClick = () => {
    if (waitCount === 0) {
      clearAdvertisement();
    } else {
      setWaitCount(waitCount - 1);
    }
  };
  return (
    <>
      <div>
        <ReactPlayer
          url={video}
          playing={true}
          playsinline={true}
          muted={true}
          controls={false}
          onProgress={onProgress}
          progressInterval={200}
          width="100%"
          height="100%"
        />
      </div>
      <div>
        <button onClick={onClick}>
          {waitCount === 0 ? 'スキップ' : `${waitCount}回後にスキップ`}
        </button>
      </div>
    </>
  );
}
