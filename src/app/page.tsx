import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "FinanceTracker - Control Inteligente de Gastos",
};

export default async function Home() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  } else {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                FinanceTracker
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Iniciar Sesión</Button>
              </Link>
              <Link href="/register">
                <Button>Registrarse</Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              ✨ Control total de tus finanzas
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Gestiona tus gastos con
              <span className="text-blue-600 block">
                inteligencia y simplicidad
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Toma el control de tus finanzas personales con nuestra plataforma
              intuitiva. Visualiza, analiza y optimiza tus gastos como nunca
              antes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Comenzar Gratis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              {/* <Link href="/dashboard">
                <Button size="lg" variant="outline">
                  Ver Demo
                </Button>
              </Link> */}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Todo lo que necesitas para controlar tus finanzas
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Herramientas poderosas y fáciles de usar para que tengas una
                visión completa de tu situación financiera
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Análisis Inteligente</CardTitle>
                  <CardDescription>
                    Gráficos interactivos y reportes detallados para entender
                    tus patrones de gasto
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>Seguimiento en Tiempo Real</CardTitle>
                  <CardDescription>
                    Monitorea tus ingresos y gastos al instante con
                    actualizaciones automáticas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>Seguridad Garantizada</CardTitle>
                  <CardDescription>
                    Tus datos están protegidos con encriptación de nivel
                    bancario
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Beneficios que transformarán tu relación con el dinero
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Ahorra tiempo y esfuerzo
                      </h3>
                      <p className="text-gray-600">
                        Automatiza el seguimiento de tus gastos y genera
                        reportes en segundos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Mejora tus finanzas
                      </h3>
                      <p className="text-gray-600">
                        Identifica oportunidades de ahorro y optimiza tus gastos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Acceso desde cualquier lugar
                      </h3>
                      <p className="text-gray-600">
                        Diseño responsive que funciona perfectamente en todos
                        tus dispositivos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Dashboard Intuitivo
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Visualiza toda tu información financiera de un vistazo
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-green-800 font-medium">
                      Ingresos este mes
                    </span>
                    <span className="text-green-600 font-bold">$3,250</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-red-800 font-medium">
                      Gastos este mes
                    </span>
                    <span className="text-red-600 font-bold">$2,180</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-800 font-medium">Balance</span>
                    <span className="text-blue-600 font-bold">$1,070</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lo que dicen nuestros usuarios
              </h2>
              <p className="text-gray-600">
                Miles de personas ya controlan mejor sus finanzas con nosotros
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-900">
                        María González
                      </h4>
                      <p className="text-sm text-gray-600">Freelancer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    &quot;Desde que uso FinanceTracker, he logrado ahorrar un
                    30% más cada mes. La visualización de gastos me ayudó a
                    identificar gastos innecesarios. &quot;
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-900">
                        Carlos Ruiz
                      </h4>
                      <p className="text-sm text-gray-600">Empresario</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    &quot;La interfaz es increíblemente intuitiva. En minutos
                    pude configurar todas mis categorías y comenzar a trackear
                    mis gastos empresariales. &quot;
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-900">
                        Ana Martínez
                      </h4>
                      <p className="text-sm text-gray-600">Estudiante</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    &quot;Como estudiante, necesitaba controlar cada peso. Esta
                    app me ha ayudado a mantener mi presupuesto y planificar
                    mejor mis gastos.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para tomar el control de tus finanzas?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Únete a miles de usuarios que ya están mejorando su situación
              financiera. Comienza gratis hoy mismo.
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Comenzar Ahora - Es Gratis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">FinanceTracker</span>
              </div>
              <p className="text-gray-400">
                © 2024 FinanceTracker. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
