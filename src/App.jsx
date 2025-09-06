import { Suspense, lazy, useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Login from "./components/Login";

const MusicLibrary = lazy(() => import("music_library/MusicLibrary"));

function AppContent() {
  const { user, logout } = useContext(AuthContext);
  if (!user) {
    return <Login />;
  }

  return (
    <div className="items-center justify-center min-h-screen bg-black text-white">
        <div className="max-w-fit mx-auto p-4 shadow-md rounded-lg border border-green-500">
          <h1 className="text-3xl font-bold text-green-400 mb-4">Music App</h1>
          <p className="text-gray-300 mb-4">Logged in as: {user.role}</p>

          <Suspense fallback={<div className="text-gray-300">Loading Music Library...</div>}>
            <MusicLibrary role={user.role} />
          </Suspense>
          <br />
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mb-6"
          >
            Logout
          </button>
        </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
