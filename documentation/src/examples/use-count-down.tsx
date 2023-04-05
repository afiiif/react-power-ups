import React from 'react';
import { useCountDown } from 'react-power-ups';

export function DemoTimer() {
  const [timeLeft, actions] = useCountDown({ defaultDuration: 10_000, interval: 100 });

  return (
    <>
      <div className="text-5xl font-semibold">{(timeLeft / 1000).toFixed(2)}</div>

      <div className="flex flex-wrap gap-x-2 gap-y-1 pt-5">
        <button className="btn bg-[--ifm-color-success-light]" onClick={() => actions.start()}>
          Start
        </button>
        <button className="btn bg-[--ifm-color-success-light]" onClick={() => actions.start(4_200)}>
          Start for 4.2s
        </button>
        <div className="w-full" />
        <button className="btn" onClick={() => actions.pause()}>
          Pause
        </button>
        <button className="btn" onClick={() => actions.resume()}>
          Resume
        </button>
        <button className="btn" onClick={() => actions.reset()}>
          Reset
        </button>
        <button className="btn" onClick={() => actions.stop()}>
          Stop
        </button>
      </div>
    </>
  );
}

export function DemoOTP() {
  const [timeLeft, { start }] = useCountDown({ defaultDuration: 10_000, startOnMount: true });

  const sendOTP = () => {
    console.info('Resending OTP...');
    start();
  };

  return (
    <>
      <p className="italic font-medium">OTP sent, check your phone!</p>

      <button className="btn" onClick={sendOTP} disabled={timeLeft > 0}>
        {timeLeft ? '🚫' : '🟢'} Send OTP
      </button>

      {timeLeft > 0 && <span className="ml-3"> Resend OTP in {timeLeft / 1000}s</span>}
    </>
  );
}
