export default function Analytics() {
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">📊 Аналитика</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Успеваемость</h3>
                <p className="text-3xl font-bold text-blue-600">4.5</p>
                <p className="text-sm text-gray-600">Средний балл</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Посещаемость</h3>
                <p className="text-3xl font-bold text-green-600">98%</p>
                <p className="text-sm text-gray-600">За текущий месяц</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Активность</h3>
                <p className="text-3xl font-bold text-purple-600">89%</p>
                <p className="text-sm text-gray-600">Выполнение заданий</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
