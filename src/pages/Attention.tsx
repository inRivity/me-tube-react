import React from 'react';

export function Attention(props: {
  isDisplay: boolean;
  onGameStart: (muted: boolean) => () => void;
}) {
  return (
    <div
      className='flex flex-col items-center gap-4 p-4'
      style={{
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        zIndex: 999,
        backgroundColor: 'white',
        display: props.isDisplay ? 'flex' : 'none' // ここのせいでflexじゃなくなっていたスマン
      }}
    >
      <div className='text-3xl m-4'>MeTube</div>

      <div className='leading-10'>注意事項
      <p>・ソースコードは見ないでください。</p>
      <p>・次に進むと音がでるよ。鼓膜破らないように注意してくださいね。</p>
      <p>・このゲームの目的はとある人達のお願いを叶えることです。</p>
      <p>・ネタバレは禁止です</p></div>

      <div className='m-1.5 items-center flex flex-col gap-2'><div>下のボタンを押してスタート！</div>

      <div className='text-3xl'><button onClick={props.onGameStart(false)}>START</button></div>
    </div>
    </div>
  );
}

export default Attention;
