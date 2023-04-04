import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  url?: string;
};

export default function BrowserWindow({
  children,
  className = 'p-4',
  url = 'http://localhost:3000/',
}: Props) {
  return (
    <div className="custom-browser-window border-[3px] border-[--ifm-color-emphasis-200] border-solid rounded-[--ifm-global-radius] mb-4">
      <div className="py-2 px-4 bg-[--ifm-color-emphasis-200] flex items-center">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[--ifm-color-danger]" />
          <div className="w-3 h-3 rounded-full bg-[--ifm-color-warning]" />
          <div className="w-3 h-3 rounded-full bg-[--ifm-color-success]" />
        </div>
        <div className="bg-[--ifm-background-color] rounded-full text-sm py-1 px-4 flex-1 mx-4">
          {url}
        </div>
        <div>
          <div className="h-[3px] w-[18px] bg-slate-400" />
          <div className="h-[3px] w-[18px] bg-slate-400 my-[3px]" />
          <div className="h-[3px] w-[18px] bg-slate-400" />
        </div>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
}
