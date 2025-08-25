export default function WorkspaceSidebar() {
  const sidebarItems = [
    { icon: "🎨", label: "Design", active: true },
    { icon: "📄", label: "Elements" },
    { icon: "📝", label: "Text" },
    { icon: "🏷️", label: "Brand" },
    { icon: "📁", label: "Uploads" },
    { icon: "🔧", label: "Tools" },
    { icon: "📋", label: "Projects" },
    { icon: "📱", label: "Apps" },
  ];

  return (
    <aside className="w-20 bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Sidebar Navigation */}
      <nav className="flex-1 py-4">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            className={`w-full p-4 flex flex-col items-center gap-1 text-xs font-medium transition-all hover:bg-gray-50 ${item.active
                ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
              }`}
            title={item.label}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 p-4">
        <button
          className="w-full p-3 flex flex-col items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-all"
          title="Magic Media"
        >
          <span className="text-lg">✨</span>
          <span>Magic Media</span>
        </button>
      </div>
    </aside>
  );
}