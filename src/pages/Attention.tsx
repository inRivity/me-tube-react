import React from 'react';

export function Attention(props: {
  isDisplay: boolean;
  onGameStart: (muted: boolean) => () => void;
}) {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        zIndex: 999,
        backgroundColor: 'white',
        display: props.isDisplay ? 'block' : 'none'
      }}
    >
      <h1>MeTube</h1>
      <h2>注意事項</h2>
      <p>ソースコード見るな</p>
      <p>次のページに進むと音が出るよ</p>
      <p>ネタバレ禁止だよ</p>
      <p>他色々</p>
      <h2>以下のボタンを押してスタート</h2>
      <button onClick={props.onGameStart(false)}>音がでるよすたあと</button>
      <button onClick={props.onGameStart(true)}>音がでないよすたあと</button>
    </div>
  );
}

export default Attention;
