import { useState } from 'react';
import IconLupa from '../../icons/IconLupa';

function Search() {
  const [show, setShow] = useState(false);

  return (
    <div className="mr-3">
      <form className="relative">
        {show && (
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <IconLupa className="w-5 h-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block p-2 pl-10 pr-8 w-full text-sm text-slate-900 bg-white rounded-3xl outline-0 border border-slate-300"
              placeholder="Buscar..."
            />
          </div>
        )}
        {show ? (
          <button
            type="button"
            className="text-slate-400 absolute inset-y-0 right-0 pr-3 hover:text-slate-600 transition-colors"
            onClick={() => setShow(false)}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShow(true)}
            className="flex absolute inset-y-0 right-0 items-center pr-3"
          >
            <IconLupa className="w-5 h-5 hover:text-slate-400 transition-colors" />
          </button>
        )}
      </form>
    </div>
  );
}

export default Search;
