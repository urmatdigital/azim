export default function News() {
      return (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">📰 Новости школы</h2>
            
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border-b pb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Новость {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>01.03.2024</span>
                    <button className="text-blue-600 hover:text-blue-800">
                      Читать далее
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
