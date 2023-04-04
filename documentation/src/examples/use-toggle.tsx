import React from 'react';
import { useToggle } from 'react-power-ups';

export function DemoPassword() {
  const [isShowPassword, toggleShowPassword] = useToggle(true);

  return (
    <>
      <input
        type={isShowPassword ? 'text' : 'password'}
        defaultValue="abc123"
        className="mr-2 px-4 py-2 rounded-lg border border-solid text-base"
      />
      <button onClick={toggleShowPassword} className="btn">
        {isShowPassword ? 'Hide' : 'Show'} Password
      </button>
    </>
  );
}

export function DemoModal() {
  const [isOpen, toggleModal] = useToggle();

  return (
    <>
      <button onClick={toggleModal} className="btn">
        Open modal
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} fixed z-[999] inset-0 bg-slate-900/70`}>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl">
          <div className="p-16">Hello 👋</div>
          <button onClick={toggleModal} className="btn">
            Close
          </button>
        </div>
      </div>
    </>
  );
}
