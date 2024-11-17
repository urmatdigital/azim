export default function Reports() {
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">📊 Отчеты</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Успеваемость</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Отличники</span>
                    <span className="font-bold text-blue-600">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Хорошисты</span>
                    <span className="font-bold text-blue-600">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Средний балл</span>
                    <span className="font-bold text-blue-600">4.2</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Посещаемость</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Присутствовало</span>
                    <span className="font-bold text-green-600">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Пропуски</span>
                    <span className="font-bold text-green-600">8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>По болезни</span>
                    <span className="font-bold text-green-600">5%</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Активность</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Выполнение ДЗ</span>
                    <span className="font-bold text-purple-600">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Участие</span>
                    <span className="font-bold text-purple-600">76%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Мероприятия</span>
                    <span className="font-bold text-purple-600">12</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Экспорт отчетов</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="btn-secondary">
                  📊 Успеваемость (Excel)
                </button>
                <button className="btn-secondary">
                  📅 Посещаемость (PDF)
                </button>
                <button className="btn-secondary">
                  📈 Статистика (Word)
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
