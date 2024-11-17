import { useState } from 'react'
    import { useAuth } from '../context/AuthContext'
    import { supabase } from '../lib/supabaseClient'

    export default function Profile() {
      const { user } = useAuth()
      const [loading, setLoading] = useState(false)
      const [fullName, setFullName] = useState(user?.profile?.full_name || '')
      const [phone, setPhone] = useState(user?.profile?.phone || '')

      const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        
        try {
          const { error } = await supabase
            .from('profiles')
            .update({
              full_name: fullName,
              phone: phone,
              updated_at: new Date()
            })
            .eq('id', user.id)

          if (error) throw error
          alert('Профиль обновлен!')
        } catch (error) {
          alert('Ошибка при обновлении профиля!')
        } finally {
          setLoading(false)
        }
      }

      return (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Профиль пользователя</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  disabled
                  value={user?.email}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Полное имя
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Роль
                </label>
                <input
                  type="text"
                  disabled
                  value={user?.profile?.role}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                >
                  {loading ? 'Сохранение...' : 'Сохранить изменения'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    }
