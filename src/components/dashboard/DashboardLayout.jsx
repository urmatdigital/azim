import { useAuth } from '../../context/AuthContext'
    import AdminDashboard from './AdminDashboard'
    import TeacherDashboard from './TeacherDashboard'
    import StudentDashboard from './StudentDashboard'
    import ParentDashboard from './ParentDashboard'

    export default function DashboardLayout() {
      const { user } = useAuth()
      const userRole = user?.profile?.role || 'super_admin' // Временно установим роль super_admin по умолчанию

      const getDashboardByRole = () => {
        switch (userRole) {
          case 'super_admin':
          case 'director':
          case 'analyst':
            return <AdminDashboard />
          case 'teacher':
            return <TeacherDashboard />
          case 'student':
            return <StudentDashboard />
          case 'parent':
            return <ParentDashboard />
          default:
            return <AdminDashboard /> // По умолчанию показываем админ панель
        }
      }

      return (
        <div className="space-y-6">
          {/* Role Information Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {userRole === 'super_admin' ? '👑 Администратор системы' : '👤 Пользователь'}
              </h1>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                {userRole}
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Добро пожаловать в систему управления учебным процессом
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Ваши возможности:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  Управление пользователями и ролями
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  Доступ к аналитике и отчетам
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  Управление расписанием и оценками
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-2">✓</span>
                  Модерация контента и новостей
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Пользователи</h3>
                <span className="text-2xl">👥</span>
              </div>
              <p className="text-3xl font-bold text-blue-600 mt-2">150</p>
              <p className="text-sm text-gray-600">Активных пользователей</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Классы</h3>
                <span className="text-2xl">🏫</span>
              </div>
              <p className="text-3xl font-bold text-green-600 mt-2">12</p>
              <p className="text-sm text-gray-600">Учебных классов</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Учителя</h3>
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <p className="text-3xl font-bold text-purple-600 mt-2">45</p>
              <p className="text-sm text-gray-600">Преподавателей</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Предметы</h3>
                <span className="text-2xl">📚</span>
              </div>
              <p className="text-3xl font-bold text-yellow-600 mt-2">15</p>
              <p className="text-sm text-gray-600">Учебных предметов</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Последние действия</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-3">📝</span>
                  <div>
                    <p className="font-medium">Добавлен новый учитель</p>
                    <p className="text-sm text-gray-600">Математика, 9 класс</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">5 минут назад</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">📊</span>
                  <div>
                    <p className="font-medium">Обновлено расписание</p>
                    <p className="text-sm text-gray-600">На следующую неделю</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">1 час назад</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-purple-500 mr-3">📰</span>
                  <div>
                    <p className="font-medium">Опубликована новость</p>
                    <p className="text-sm text-gray-600">Школьные мероприятия</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">2 часа назад</span>
              </div>
            </div>
          </div>

          {/* Main Dashboard Content */}
          {getDashboardByRole()}
        </div>
      )
    }
