import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Icon name="BookOpen" size={32} className="text-blue-600" />
                <h1 className="ml-2 text-2xl font-bold text-gray-900">РепБлокнот</h1>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Главная</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Ученики</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Финансы</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">О проекте</a>
              </nav>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить урок
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-50 border-b">
                <CardTitle className="text-xl text-gray-900">Сегодня, 5 сентября</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold text-gray-700">Время</TableHead>
                      <TableHead className="font-semibold text-gray-700">Ученик</TableHead>
                      <TableHead className="font-semibold text-gray-700">Предмет</TableHead>
                      <TableHead className="font-semibold text-gray-700">Статус</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-gray-50">
                      <TableCell className="font-medium">10:00</TableCell>
                      <TableCell>Анна Петрова</TableCell>
                      <TableCell>Математика</TableCell>
                      <TableCell>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Завершить
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50">
                      <TableCell className="font-medium">12:00</TableCell>
                      <TableCell>Петр Иванов</TableCell>
                      <TableCell>Физика</TableCell>
                      <TableCell>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Завершить
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50">
                      <TableCell className="font-medium">14:00</TableCell>
                      <TableCell>Мария Сидорова</TableCell>
                      <TableCell>Химия</TableCell>
                      <TableCell>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Завершить
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-gray-50">
                      <TableCell className="font-medium">16:00</TableCell>
                      <TableCell>Алексей Козлов</TableCell>
                      <TableCell>История</TableCell>
                      <TableCell>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Завершить
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Reminders */}
            <Card className="shadow-lg">
              <CardHeader className="bg-yellow-50 border-b">
                <CardTitle className="text-lg text-gray-900 flex items-center">
                  <Icon name="Bell" size={20} className="mr-2 text-yellow-600" />
                  Напоминания
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Подготовить материалы для урока с Анной</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Проверить домашнее задание Петра</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Отправить счет за занятия Марии</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Перенести урок с Алексеем на завтра</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* My Students */}
            <Card className="shadow-lg">
              <CardHeader className="bg-green-50 border-b">
                <CardTitle className="text-lg text-gray-900 flex items-center">
                  <Icon name="Users" size={20} className="mr-2 text-green-600" />
                  Мои ученики
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Анна Петрова</span>
                    <Button size="sm" variant="outline" className="h-7 px-3">
                      История
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Петр Иванов</span>
                    <Button size="sm" variant="outline" className="h-7 px-3">
                      История
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Мария Сидорова</span>
                    <Button size="sm" variant="outline" className="h-7 px-3">
                      История
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Алексей Козлов</span>
                    <Button size="sm" variant="outline" className="h-7 px-3">
                      История
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Елена Морозова</span>
                    <Button size="sm" variant="outline" className="h-7 px-3">
                      История
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payments */}
            <Card className="shadow-lg">
              <CardHeader className="bg-purple-50 border-b">
                <CardTitle className="text-lg text-gray-900 flex items-center">
                  <Icon name="CreditCard" size={20} className="mr-2 text-purple-600" />
                  Платежи
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="text-xs font-semibold">Ученик</TableHead>
                      <TableHead className="text-xs font-semibold">Сумма</TableHead>
                      <TableHead className="text-xs font-semibold">Статус</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-xs">Анна П.</TableCell>
                      <TableCell className="text-xs">2000₽</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          Оплачено
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-xs">Петр И.</TableCell>
                      <TableCell className="text-xs">1800₽</TableCell>
                      <TableCell>
                        <Badge className="bg-red-100 text-red-800 text-xs">
                          Ожидает
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-xs">Мария С.</TableCell>
                      <TableCell className="text-xs">2200₽</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          Оплачено
                        </Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm">© 2023 Репетиторский Блокнот</p>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">VK</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">TG</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;