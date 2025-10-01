import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
      <div className="flex gap-12 flex-wrap justify-center">
        <ProfileCard variant="withExpBar" />
        <ProfileCard variant="withColorRing" />
      </div>
    </div>
  );
}

export default App;
