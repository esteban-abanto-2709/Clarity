export default function WorkspaceHeader() {
  return (
    <header className="h-14 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-between px-4 text-white shadow-md">
      {/* Left Section - Menu & File */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <button className="px-3 py-1.5 hover:bg-white/10 rounded text-sm font-medium transition-colors">
          File
        </button>

        <button className="px-3 py-1.5 hover:bg-white/10 rounded text-sm font-medium transition-colors flex items-center gap-1">
          <span className="text-xs">📏</span>
          Resize
        </button>

        <button className="px-3 py-1.5 hover:bg-white/10 rounded text-sm font-medium transition-colors flex items-center gap-1">
          <span className="text-xs">✏️</span>
          Editing
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Center Section - Actions */}
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Undo">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </button>

        <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Redo">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6-6m6 6l-6 6" />
          </svg>
        </button>

        <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Reset">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Right Section - Project Info & User */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex flex-col items-end">
          <span className="text-sm font-medium">Clarity Board</span>
          <span className="text-xs opacity-75">Público • Guardado • 15:26 atrás</span>
        </div>

        <button className="bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded font-medium text-sm hover:bg-yellow-300 transition-colors">
          ✨ Try Pro for 30 days
        </button>

        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-sm font-bold">
          E
        </div>

        <button className="p-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>

        <button className="bg-blue-500 text-white px-4 py-1.5 rounded font-medium text-sm hover:bg-blue-600 transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
          Share
        </button>
      </div>
    </header>
  );
}