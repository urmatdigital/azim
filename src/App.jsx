import { useEffect } from 'react'
    import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
    import { AuthProvider, useAuth } from './context/AuthContext'
    import Auth from './components/Auth'
    import DashboardLayout from './components/dashboard/DashboardLayout'
    import Layout from './components/Layout'
    import Profile from './pages/Profile'
    import Analytics from './pages/Analytics'
    import News from './pages/News'
    import Schedule from './pages/Schedule'
    import Grades from './pages/Grades'
    import Users from './pages/Users'
    import Reports from './pages/Reports'

    const PrivateRoute = ({ children }) => {
      const { user } = useAuth()
      
      if (!user) {
        return <Navigate to="/auth" />
      }
      
      return children
    }

    function AppRoutes() {
      const { user } = useAuth()

      return (
        <Router>
          <Routes>
            <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/" />} />
            
            <Route path="/" element={
              <PrivateRoute>
                <Layout>
                  <DashboardLayout />
                </Layout>
              </PrivateRoute>
            } />
            
            <Route path="/profile" element={
              <PrivateRoute>
                <Layout>
                  <Profile />
                </Layout>
              </PrivateRoute>
            } />
            
            <Route path="/analytics" element={
              <PrivateRoute>
                <Layout>
                  <Analytics />
                </Layout>
              </PrivateRoute>
            } />
            
            <Route path="/news" element={
              <PrivateRoute>
                <Layout>
                  <News />
                </Layout>
              </PrivateRoute>
            } />

            <Route path="/schedule" element={
              <PrivateRoute>
                <Layout>
                  <Schedule />
                </Layout>
              </PrivateRoute>
            } />

            <Route path="/grades" element={
              <PrivateRoute>
                <Layout>
                  <Grades />
                </Layout>
              </PrivateRoute>
            } />

            <Route path="/users" element={
              <PrivateRoute>
                <Layout>
                  <Users />
                </Layout>
              </PrivateRoute>
            } />

            <Route path="/reports" element={
              <PrivateRoute>
                <Layout>
                  <Reports />
                </Layout>
              </PrivateRoute>
            } />
          </Routes>
        </Router>
      )
    }

    function App() {
      return (
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      )
    }

    export default App
