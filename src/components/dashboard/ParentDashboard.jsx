export default function ParentDashboard() {
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">👋 Кабинет родителя</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Успеваемость детей */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">📊 Успеваемость</h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium">Иван Иванов</div>
                  <div className="text-sm text-gray-600">9А класс</div>
                  <div className="mt-2">
                    <span className="text-blue-600 font-bold">Средний балл: 4.5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Уведомления */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">🔔 Уведомления</h3>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">Родительское собрание</div>
                  <p className="text-sm text-gray-600">Четверг, 18:00</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">Новая оценка</div>
                  <p className="text-sm text-gray-600">Математика: 5</p>
                </div>
              </div>
            </div>

            {/* Сообщения */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">💬 Сообщения</h3>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">От: Классный руководитель</div>
                  <p className="text-sm text-gray-600">Добрый день! Хотела обсудить...</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">От: Учитель математики</div>
                  <p className="text-sm text-gray-600">Успехи вашего ребенка...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
