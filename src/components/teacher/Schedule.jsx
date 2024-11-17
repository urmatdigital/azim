export default function Schedule() {
      const timeSlots = [
        '8:30 - 9:15',
        '9:25 - 10:10',
        '10:20 - 11:05',
        '11:25 - 12:10',
        '12:20 - 13:05'
      ]

      const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']

      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Расписание и нагрузка</h2>
            <div className="flex space-x-2">
              <button className="btn-secondary">
                📥 Экспорт
              </button>
              <button className="btn-primary">
                ✏️ Редактировать
              </button>
            </div>
          </div>

          {/* Расписание */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Время
                  </th>
                  {days.map(day => (
                    <th key={day} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {timeSlots.map((time, index) => (
                  <tr key={time}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {time}
                    </td>
                    {days.map(day => (
                      <td key={`${day}-${index}`} className="px-6 py-4 whitespace-nowrap">
                        <div className="bg-blue-50 rounded p-2">
                          <div className="font-medium text-blue-800">Математика</div>
                          <div className="text-sm text-blue-600">9А класс</div>
                          <div className="text-xs text-blue-500">Кабинет 201</div>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Нагрузка */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Учебная нагрузка</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-900">9А класс</h4>
                <p className="text-sm text-gray-600">Математика</p>
                <p className="mt-2 text-lg font-bold text-blue-600">5 часов/неделя</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-900">9Б класс</h4>
                <p className="text-sm text-gray-600">Математика</p>
                <p className="mt-2 text-lg font-bold text-blue-600">5 часов/неделя</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-900">10А класс</h4>
                <p className="text-sm text-gray-600">Математика</p>
                <p className="mt-2 text-lg font-bold text-blue-600">6 часов/неделя</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
