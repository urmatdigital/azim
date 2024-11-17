export default function StudyPlan() {
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Учебный план</h2>
            <button className="btn-primary">
              + Добавить тему
            </button>
          </div>

          {/* КТП */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    № урока
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Тема
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Часы
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Дата
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Статус
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Тема урока {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      01.09.2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Проведен
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Документы */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Документы</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📄</span>
                  <div>
                    <h4 className="font-medium">Рабочая программа</h4>
                    <p className="text-sm text-gray-600">PDF, 2.3 MB</p>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-medium">КТП</h4>
                    <p className="text-sm text-gray-600">XLSX, 1.1 MB</p>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📑</span>
                  <div>
                    <h4 className="font-medium">Методические материалы</h4>
                    <p className="text-sm text-gray-600">ZIP, 5.7 MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
