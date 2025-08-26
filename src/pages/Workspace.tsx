import InfiniteCanvas from "@/components/canvas/InfiniteCanvas";
import WorkspaceHeader from "@/components/workspace/WorkspaceHeader";
import WorkspaceSidebar from "@/components/workspace/WorkspaceSidebar";
import WorkspaceFooter from "@/components/workspace/WorkspaceFooter";

export default function Workspace() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <WorkspaceHeader />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <WorkspaceSidebar />
        
        {/* Canvas Area */}
        <main className="flex-1 relative">
          <InfiniteCanvas />
        </main>
      </div>
      
      {/* Footer */}
      <WorkspaceFooter />
    </div>
  );
}