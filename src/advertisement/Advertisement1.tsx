import React, { Dispatch, SetStateAction, useState } from 'react';
import { AdverticementProps } from './interface';
import SkipNextIcon from '@mui/icons-material/SkipNext';
// https://github.com/cookpete/react-player/issues/1436#issuecomment-1098551225
import { default as _ReactPlayer } from 'react-player';
import { ReactPlayerProps } from 'react-player/types/lib';
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

/**
 * # スポイトの広告
 * ## 仕様
 * - 5回クリックでスキップさせる
 * - 内容は動画垂れ流しでOK
 *     - 最後まで言ったら静止
 */
export function Advertisement1(props: AdverticementProps) {
  const [waitCount, setWaitCount] = useState(5);
  const { clearAdvertisement, isDisplay, muted } = props;
  const [playing, setPlaying] = useState(true);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [playedRate, setPlayedRate] = useState(0);
  const [loadedSeconds, seLoadedSeconds] = useState(0);
  const [loadedRate, setLoadedRate] = useState(0);
  const video = require('../video/1.mov');
  // const video = 'https://www.youtube.com/watch?v=uUvthLpSHrQ'

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
      <div
        style={{ display: isDisplay ? 'block' : 'none', position: 'relative' }}
      >
        <ReactPlayer
          url={video}
          playing={isDisplay}
          muted={muted}
          controls={false}
          onProgress={onProgress}
          progressInterval={200}
          width="100%"
          height="100%"
        />
        <div
          onClick={onClick}
          className="flex justify-center"
          style={{
            position: 'absolute',
            right: '0px',
            top: '80%',
            height: '10%',
            width: '20%',
            backgroundColor: 'black',
            opacity: 0.6,
            userSelect: 'none',
            cursor: 'pointer'
          }}
        >
          <div
            className="flex justify-center"
            style={{
              margin: 'auto',
              color: 'white'
            }}
          >
            {waitCount === 0 ? (
              <>
                広告をスキップ
                <SkipNextIcon />
              </>
            ) : (
              <>{waitCount}ここにサムネ</>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
