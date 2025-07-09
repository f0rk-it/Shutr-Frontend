import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LoadingProvider } from './context/LoadingContext'
import { useLoading } from './context/useLoading'
import LoadingScreen from './components/LoadingScreen'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'

function AppContent() {
  const { isLoading, completeLoading } = useLoading()

  return (
    <>
      {isLoading && <LoadingScreen onComplete={completeLoading} />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  )
}

export default App
