import { useState } from 'react'
    import { useNavigate, Link, useLocation } from 'react-router-dom'
    import { supabase } from '../lib/supabaseClient'
    import { useAuth } from '../context/AuthContext'

    function Layout({ children }) {
      const navigate = useNavigate()
      const location = useLocation()
      const { user } = useAuth()
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

      const handleLogout = async () => {
        await supabase.auth.signOut()
        navigate('/auth')
      }

      // Определяем доступные пункты меню в зависимости от роли
      const getMenuItems = () => {
        const baseItems = [
          { path: '/', label: '🏠 Главная', roles: ['*'] },
          { path: '/profile', label: '👤 Профиль', roles: ['*'] }
        ]

        const adminItems = [
          { path: '/users', label: '👥 Пользователи', roles: ['super_admin', 'director'] },
          { path: '/analytics', label: '📊 Аналитика', roles: ['super_admin', 'analyst', 'director'] },
          { path: '/reports', label: '📋 Отчеты', roles: ['super_admin', 'analyst', 'director'] }
        ]

        const commonItems = [
          { path: '/schedule', label: '📅 Расписание', roles: ['*'] },
          { path: '/grades', label: '📝 Оценки', roles: ['*'] },
          { path: '/news', label: '📰 Новости', roles: ['*'] }
        ]

        return [...baseItems, 
                ...(user?.profile?.role === 'super_admin' ? adminItems : []),
                ...commonItems]
      }

      const menuItems = getMenuItems()

      return (
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      ISIT TRUDIT
                    </span>
                  </div>
                  
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {menuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`${
                          location.pathname === item.path
                            ? 'border-blue-500 text-gray-900'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                      {user?.profile?.role}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      🚪 Выйти
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      )
    }

    export default Layout
