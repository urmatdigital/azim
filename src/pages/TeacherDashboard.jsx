import { useState } from 'react'
    import Calendar from '../components/teacher/Calendar'
    import StudyPlan from '../components/teacher/StudyPlan'
    import Schedule from '../components/teacher/Schedule'
    import StudentsList from '../components/teacher/StudentsList'
    import Homework from '../components/teacher/Homework'

    export default function TeacherDashboard() {
      const [activeTab, setActiveTab] = useState('calendar')

      const tabs = [
        { id: 'calendar', label: '📅 Календарь', icon: '📅' },
        { id: 'study-plan', label: '📚 Учебный план', icon: '📚' },
        { id: 'schedule', label: '⏰ Расписание', icon: '⏰' },
        { id: 'students', label: '👥 Ученики', icon: '👥' },
        { id: 'homework', label: '📝 Домашние задания', icon: '📝' }
      ]

      const renderContent = () => {
        switch (activeTab) {
          case 'calendar':
            return <Calendar />
          case 'study-plan':
            return <StudyPlan />
          case 'schedule':
            return <Schedule />
          case 'students':
            return <StudentsList />
          case 'homework':
            return <Homework />
          default:
            return null
        }
      }

      return (
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900">👨‍🏫 Кабинет педагога</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex-1 px-4 py-4 text-center border-b-2 font-medium text-sm
                      ${activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                    `}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span className="text-xl">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      )
    }
