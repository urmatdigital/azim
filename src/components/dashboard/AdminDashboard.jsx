export default function AdminDashboard() {
      return (
        <div className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Управление пользователями */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">👥 Управление пользователями</h2>
              <div className="space-y-2">
                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
                  Добавить пользователя
                </button>
                <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">
                  Управление ролями
                </button>
              </div>
            </div>

            {/* Аналитика */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">📊 Аналитика</h2>
              <div className="space-y-2">
                <button className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition">
                  Отчеты
                </button>
                <button className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition">
                  Статистика
                </button>
              </div>
            </div>

            {/* Управление контентом */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">📝 Управление контентом</h2>
              <div className="space-y-2">
                <button className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition">
                  Новости
                </button>
                <button className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition">
                  Объявления
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
