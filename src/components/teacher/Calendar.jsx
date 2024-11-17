import { useState } from 'react'

    export default function Calendar() {
      const [currentMonth, setCurrentMonth] = useState(new Date())
      const [selectedDate, setSelectedDate] = useState(new Date())

      const daysInMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        0
      ).getDate()

      const firstDayOfMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        1
      ).getDay()

      const weeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7)

      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Календарь учебного года</h2>
            <div className="flex space-x-2">
              <button className="btn-secondary">Предыдущий месяц</button>
              <button className="btn-secondary">Следующий месяц</button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
              <div key={day} className="text-center font-medium py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: weeks * 7 }).map((_, index) => {
              const day = index - firstDayOfMonth + 1
              const isCurrentMonth = day > 0 && day <= daysInMonth
              
              return (
                <button
                  key={index}
                  className={`
                    p-4 rounded-lg text-center
                    ${isCurrentMonth 
                      ? 'hover:bg-blue-50' 
                      : 'text-gray-400 cursor-not-allowed'}
                    ${day === selectedDate.getDate() && isCurrentMonth
                      ? 'bg-blue-100 text-blue-600'
                      : ''}
                  `}
                  disabled={!isCurrentMonth}
                  onClick={() => isCurrentMonth && setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                >
                  {isCurrentMonth ? day : ''}
                </button>
              )
            })}
          </div>

          {/* Учебные недели */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Учебные недели</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium">Неделя {index + 1}</h4>
                  <p className="text-sm text-gray-600">1-7 сентября</p>
                  <div className="mt-2 text-sm">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800">
                      Учебная
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
