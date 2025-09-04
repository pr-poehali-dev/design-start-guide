import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Icon name="GraduationCap" size={32} className="text-violet-600" />
                <h1 className="ml-2 text-xl font-semibold text-gray-900">EduSaaS</h1>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-900 hover:text-violet-600 transition-colors font-medium">Главная</a>
                <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">Ученики</a>
                <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">Финансы</a>
                <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors">О проекте</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <Button size="sm">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить урок
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Управляй обучением
              <span className="text-violet-600"> эффективно</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Современная SaaS-платформа для репетиторов и образовательных центров. 
              Управляй учениками, расписанием и финансами в одном месте.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Button size="lg" className="px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать урок
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Расписание
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-3">
                <div className="mx-auto w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-violet-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">124</CardTitle>
                <CardDescription className="text-base">Активных учеников</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-3">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-green-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">₽285k</CardTitle>
                <CardDescription className="text-base">Доход за месяц</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-3">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Clock" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">1,240</CardTitle>
                <CardDescription className="text-base">Часов преподавания</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Financial Overview */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Финансовая аналитика</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Сегодня</p>
                      <p className="text-2xl font-bold text-gray-900">₽12,500</p>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <Icon name="TrendingUp" size={12} className="mr-1" />
                        +8.2%
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon name="Wallet" size={24} className="text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Этот месяц</p>
                      <p className="text-2xl font-bold text-gray-900">₽285,000</p>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <Icon name="TrendingUp" size={12} className="mr-1" />
                        +12.5%
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon name="BarChart3" size={24} className="text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Ожидается</p>
                      <p className="text-2xl font-bold text-gray-900">₽45,200</p>
                      <p className="text-xs text-orange-600 flex items-center mt-1">
                        <Icon name="Clock" size={12} className="mr-1" />
                        Этот месяц
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Icon name="Timer" size={24} className="text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Задолженность</p>
                      <p className="text-2xl font-bold text-gray-900">₽8,750</p>
                      <p className="text-xs text-red-600 flex items-center mt-1">
                        <Icon name="AlertTriangle" size={12} className="mr-1" />
                        Требует внимания
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Icon name="AlertCircle" size={24} className="text-red-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Today's Schedule */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold">Сегодня, 5 сентября</CardTitle>
                      <CardDescription>6 запланированных уроков</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <Icon name="CheckCircle" size={14} className="mr-1" />
                      Активный день
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b">
                        <TableHead className="font-semibold">Время</TableHead>
                        <TableHead className="font-semibold">Ученик</TableHead>
                        <TableHead className="font-semibold">Предмет</TableHead>
                        <TableHead className="font-semibold">Статус</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-slate-50">
                        <TableCell className="font-medium">10:00</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-sm font-medium text-violet-700">АП</span>
                            </div>
                            Анна Петрова
                          </div>
                        </TableCell>
                        <TableCell>Математика</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                            В процессе
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            <Icon name="MessageCircle" size={14} className="mr-1" />
                            Связаться
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-slate-50">
                        <TableCell className="font-medium">11:30</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-sm font-medium text-green-700">ИС</span>
                            </div>
                            Иван Смирнов
                          </div>
                        </TableCell>
                        <TableCell>Физика</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-gray-50 text-gray-600">
                            Запланировано
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm">
                            <Icon name="Play" size={14} className="mr-1" />
                            Начать
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-slate-50">
                        <TableCell className="font-medium">14:00</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-sm font-medium text-pink-700">МК</span>
                            </div>
                            Мария Козлова
                          </div>
                        </TableCell>
                        <TableCell>Химия</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-gray-50 text-gray-600">
                            Запланировано
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            <Icon name="Calendar" size={14} className="mr-1" />
                            Перенести
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <Icon name="Zap" size={20} className="mr-2 text-violet-600" />
                    Быстрые действия
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Добавить ученика
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Создать отчёт
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    Добавить платёж
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Students */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <Icon name="Users" size={20} className="mr-2 text-violet-600" />
                    Недавние ученики
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-medium text-violet-700">АП</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Анна Петрова</p>
                          <p className="text-xs text-gray-500">Математика</p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="MoreHorizontal" size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-medium text-green-700">ИС</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Иван Смирнов</p>
                          <p className="text-xs text-gray-500">Физика</p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="MoreHorizontal" size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm font-medium text-pink-700">МК</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Мария Козлова</p>
                          <p className="text-xs text-gray-500">Химия</p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="MoreHorizontal" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;