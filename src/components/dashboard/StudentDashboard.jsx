export default function StudentDashboard() {
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">👋 Кабинет ученика</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Оценки */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">📊 Мои оценки</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Математика</span>
                  <span className="font-bold text-green-600">5, 4, 5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Физика</span>
                  <span className="font-bold text-blue-600">4, 4, 5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>История</span>
                  <span className="font-bold text-purple-600">5, 5, 5</span>
                </div>
              </div>
            </div>

            {/* Расписание */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">📅 Расписание на сегодня</h3>
              <div className="space-y-3">
                <div className="p-2 bg-blue-50 rounded">
                  <div className="font-medium">1. Математика</div>
                  <div className="text-sm text-gray-600">8:30 - 9:15</div>
                </div>
                <div className="p-2 bg-green-50 rounded">
                  <div className="font-medium">2. Физика</div>
                  <div className="text-sm text-gray-600">9:25 - 10:10</div>
                </div>
                <div className="p-2 bg-purple-50 rounded">
                  <div className="font-medium">3. История</div>
                  <div className="text-sm text-gray-600">10:20 - 11:05</div>
                </div>
              </div>
            </div>

            {/* Домашние задания */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">📚 Домашние задания</h3>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">Математика</div>
                  <p className="text-sm text-gray-600">№123-125 из учебника</p>
                  <div className="mt-2 text-xs text-red-600">Сдать до 20.03.2024</div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="font-medium">Физика</div>
                  <p className="text-sm text-gray-600">Подготовить доклад</p>
                  <div className="mt-2 text-xs text-red-600">Сдать до 21.03.2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
