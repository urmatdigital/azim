export default function Homework() {
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Домашние задания</h2>
            <button className="btn-primary">
              + Добавить задание
            </button>
          </div>

          {/* Список заданий */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">Домашнее задание #{index + 1}</h3>
                    <p className="text-gray-600 text-sm mt-1">Математика • 9А класс</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    До 20.03.2024
                  </span>
                </div>
                <p className="mt-3 text-gray-700">
                  Решить задачи №123-125 из учебника
                </p>
                <div className="mt-4 flex items-center space-x-4">
                  <span className="text-sm text-gray-500">📚 Учебник стр. 45</span>
                  <span className="text-sm text-gray-500">📝 15 сдали</span>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="btn-secondary">
                    ✏️ Изменить
                  </button>
                  <button className="btn-primary">
                    👁️ Проверить
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Документация */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Документация</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">📋</span>
                    <div>
                      <h4 className="font-medium">План работы</h4>
                      <p className="text-sm text-gray-600">На 2024 год</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    Скачать
                  </button>
                </div>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h4 className="font-medium">Отчеты</h4>
                      <p className="text-sm text-gray-600">Текущий семестр</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    Открыть
                  </button>
                </div>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">📚</span>
                    <div>
                      <h4 className="font-medium">Материалы</h4>
                      <p className="text-sm text-gray-600">Методические</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    Просмотр
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
