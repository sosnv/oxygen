"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Users,
  Trophy,
  Dumbbell,
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Calendar,
  Award,
  Shield,
  Zap,
  Heart,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OxygenFightClub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-blue-500/20' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <Image
                  src="/logo.png"
                  alt="Oxygen Fight Club Logo"
                  width={48}
                  height={48}
                  className="relative w-12 h-12 object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight">OXYGEN</span>
                <div className="text-xs text-blue-400 font-medium tracking-[0.3em] uppercase">Fight Club</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {["Start", "O nas", "Programy", "Harmonogram", "Trenerzy", "Cennik", "Kontakt"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-2.5 rounded-full shadow-lg shadow-blue-500/25">
                Dołącz teraz
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-50 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-black/95 backdrop-blur-xl border-l border-blue-500/20 lg:hidden"
          >
            <nav className="flex flex-col space-y-6 p-8 pt-24">
              {["Start", "O nas", "Programy", "Harmonogram", "Trenerzy", "Cennik", "Kontakt"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
              <Button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full">
                Dołącz teraz
              </Button>
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section id="start" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge className="px-6 py-2 text-sm font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                <Zap className="w-4 h-4 mr-2" />
                Profesjonalny Klub Bokserski
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                ODKRYJ SWOJĄ
              </span>
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                WEWNĘTRZNĄ SIŁĘ
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              Dołącz do elitarnego klubu bokserskiego, gdzie pasja spotyka się z profesjonalizmem. 
              Trenuj z najlepszymi i osiągnij swoje cele.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg px-10 py-6 rounded-full shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all">
                Rozpocznij swoją podróż
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button className="bg-transparent border-2 border-blue-500/50 hover:border-blue-400 text-white font-bold text-lg px-10 py-6 rounded-full hover:bg-blue-500/10 transition-all">
                Zobacz harmonogram
                <Calendar className="ml-3 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: "500+", label: "Członków", icon: Users },
                { number: "15+", label: "Lat doświadczenia", icon: Award },
                { number: "20+", label: "Trenerów", icon: Trophy },
                { number: "98%", label: "Zadowolonych", icon: Heart }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl group-hover:bg-blue-500/20 transition-colors"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-black border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-400/40 transition-all">
                    <stat.icon className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/30">
                <Shield className="w-4 h-4 mr-2" />
                O nas
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Więcej niż klub -{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  to styl życia
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Oxygen Fight Club to miejsce, gdzie transformujesz nie tylko swoje ciało, ale przede wszystkim 
                charakter. Od 2008 roku pomagamy ludziom odkrywać ich potencjał poprzez trening bokserski.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Certyfikowani trenerzy z międzynarodowym doświadczeniem",
                  "Nowoczesny sprzęt i przestronne sale treningowe",
                  "Programy dostosowane do każdego poziomu zaawansowania",
                  "Społeczność wspierająca twój rozwój"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="mt-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-blue-500/25">
                Poznaj naszą historię
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 p-2">
                  <div className="aspect-[4/5] bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                    <Dumbbell className="w-32 h-32 text-blue-500/30" />
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                    <div className="bg-black/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4">
                      <div className="text-3xl font-bold text-blue-400">15+</div>
                      <div className="text-sm text-gray-400">Lat doświadczenia</div>
                    </div>
                    <div className="bg-black/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4">
                      <div className="text-3xl font-bold text-blue-400">5000+</div>
                      <div className="text-sm text-gray-400">Wytrenowanych</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programy" className="py-32 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/30">
              <Dumbbell className="w-4 h-4 mr-2" />
              Nasze programy
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Programy treningowe{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                dla każdego
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Niezależnie od tego, czy jesteś początkującym, czy doświadczonym zawodnikiem, 
              mamy program idealnie dopasowany do Twoich potrzeb.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Boks klasyczny",
                description: "Profesjonalny trening bokserski z elementami techniki, taktyki i kondycji",
                features: ["Technika uderzeń", "Praca nóg", "Sparingi", "Przygotowanie do walk"],
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Zap,
                title: "Fitness Boxing",
                description: "Intensywny trening cardio z elementami boksu bez kontaktu fizycznego",
                features: ["Spalanie kalorii", "Poprawa kondycji", "Redukcja stresu", "Modelowanie sylwetki"],
                color: "from-purple-500 to-blue-600"
              },
              {
                icon: Users,
                title: "Treningi grupowe",
                description: "Motywujące zajęcia w grupie dla wszystkich poziomów zaawansowania",
                features: ["Różne poziomy", "Wspólna motywacja", "Plan treningowy", "Przyjazna atmosfera"],
                color: "from-blue-500 to-purple-600"
              },
              {
                icon: Trophy,
                title: "Personal Training",
                description: "Indywidualne sesje z trenerem dostosowane do Twoich celów",
                features: ["Plan personalny", "1 na 1 z trenerem", "Szybkie efekty", "Elastyczne godziny"],
                color: "from-green-500 to-blue-600"
              },
              {
                icon: Shield,
                title: "Samoobrona",
                description: "Praktyczne techniki samoobrony i pewności siebie",
                features: ["Techniki obronne", "Sytuacje realne", "Pewność siebie", "Bezpieczeństwo"],
                color: "from-red-500 to-blue-600"
              },
              {
                icon: Heart,
                title: "Kids Boxing",
                description: "Bezpieczne zajęcia dla dzieci rozwijające koordynację i dyscyplinę",
                features: ["Wiek 6-16 lat", "Rozwój motoryczny", "Dyscyplina", "Zabawa i nauka"],
                color: "from-yellow-500 to-blue-600"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <Card className="relative h-full bg-gradient-to-br from-gray-900/90 to-black border border-blue-500/20 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 blur-3xl`}></div>
                  
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <program.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                    <p className="text-gray-400 mb-6">{program.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 text-blue-400 border border-blue-500/30 hover:border-blue-400 font-semibold rounded-full transition-all">
                      Dowiedz się więcej
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="harmonogram" className="py-32 relative bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/30">
              <Calendar className="w-4 h-4 mr-2" />
              Harmonogram
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Plan{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                treningów
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Sprawdź nasz tygodniowy harmonogram zajęć i wybierz treningu idealne dla Ciebie.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto rounded-3xl"
          >
            <div className="min-w-[800px] bg-gradient-to-br from-gray-900/50 to-black border border-blue-500/20 rounded-3xl overflow-hidden backdrop-blur-sm">
              <div className="grid grid-cols-6 text-center">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 font-bold text-blue-400">
                  Godzina
                </div>
                {["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"].map((day) => (
                  <div key={day} className="p-4 bg-gradient-to-br from-blue-500/10 to-transparent font-semibold border-l border-blue-500/20">
                    {day}
                  </div>
                ))}
              </div>
              
              {[
                { time: "06:00", classes: ["Fitness Boxing", "Boks", "Fitness Boxing", "Boks", "Fitness Boxing"] },
                { time: "08:00", classes: ["Boks", "Personal", "Boks", "Personal", "Boks"] },
                { time: "10:00", classes: ["Personal", "Grupa", "Personal", "Grupa", "Personal"] },
                { time: "16:00", classes: ["Kids Boxing", "Samoobrona", "Kids Boxing", "Samoobrona", "Kids Boxing"] },
                { time: "18:00", classes: ["Boks", "Fitness Boxing", "Boks", "Fitness Boxing", "Boks"] },
                { time: "20:00", classes: ["Grupa", "Boks", "Grupa", "Boks", "Grupa"] }
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-6 border-t border-blue-500/10">
                  <div className="p-4 font-semibold text-blue-400 bg-gradient-to-r from-blue-500/5 to-transparent">
                    {row.time}
                  </div>
                  {row.classes.map((cls, index) => (
                    <div key={index} className="p-4 border-l border-blue-500/10 hover:bg-blue-500/5 transition-colors cursor-pointer">
                      <div className="text-sm font-medium text-gray-300">{cls}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-blue-500/25">
              Pobierz pełny harmonogram
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trenerzy" className="py-32 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/30">
              <Trophy className="w-4 h-4 mr-2" />
              Nasz zespół
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Poznaj naszych{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                mistrzów
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Trenuj z najlepszymi. Nasi trenerzy to doświadczeni zawodnicy z międzynarodowymi sukcesami.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michał Kowalski",
                role: "Główny trener",
                achievements: "Mistrz Polski 2018-2020",
                experience: "15 lat doświadczenia"
              },
              {
                name: "Anna Nowak",
                role: "Fitness Boxing",
                achievements: "Certyfikowany instruktor",
                experience: "10 lat doświadczenia"
              },
              {
                name: "Tomasz Wiśniewski",
                role: "Boks klasyczny",
                achievements: "Były zawodnik kadry",
                experience: "12 lat doświadczenia"
              },
              {
                name: "Karolina Lewandowska",
                role: "Kids Boxing",
                achievements: "Pedagog sportowy",
                experience: "8 lat doświadczenia"
              }
            ].map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <Card className="relative h-full bg-gradient-to-br from-gray-900/90 to-black border border-blue-500/20 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-blue-400/40 transition-all">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-1">
                        <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                          <Users className="w-16 h-16 text-blue-500/30" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-1/4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <Trophy className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                    <p className="text-blue-400 font-medium mb-3">{trainer.role}</p>
                    <p className="text-sm text-gray-400 mb-2">{trainer.achievements}</p>
                    <p className="text-sm text-gray-500">{trainer.experience}</p>
                    
                    <div className="flex justify-center space-x-3 mt-4">
                      <button className="w-8 h-8 bg-blue-500/20 hover:bg-blue-500/30 rounded-full flex items-center justify-center transition-colors">
                        <Facebook className="w-4 h-4 text-blue-400" />
                      </button>
                      <button className="w-8 h-8 bg-blue-500/20 hover:bg-blue-500/30 rounded-full flex items-center justify-center transition-colors">
                        <Instagram className="w-4 h-4 text-blue-400" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cennik" className="py-32 relative bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/30">
              <Star className="w-4 h-4 mr-2" />
              Cennik
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Wybierz swój{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                plan treningowy
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Elastyczne pakiety dostosowane do Twoich potrzeb i budżetu.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Podstawowy",
                price: "149",
                features: [
                  "Dostęp do siłowni",
                  "3 treningi grupowe/tydzień",
                  "Plan treningowy",
                  "Szatnia i prysznice"
                ],
                popular: false
              },
              {
                name: "Premium",
                price: "249",
                features: [
                  "Wszystko z Podstawowego",
                  "Nieograniczone treningi",
                  "2 treningi personal/miesiąc",
                  "Dostęp do sauny",
                  "Plan żywieniowy"
                ],
                popular: true
              },
              {
                name: "VIP",
                price: "449",
                features: [
                  "Wszystko z Premium",
                  "8 treningów personal/miesiąc",
                  "Dostęp 24/7",
                  "Osobista szafka",
                  "Masaż regeneracyjny"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 px-6 py-1">
                      Najpopularniejszy
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full bg-gradient-to-br from-gray-900/90 to-black border ${
                  plan.popular ? 'border-blue-400/50' : 'border-blue-500/20'
                } rounded-3xl overflow-hidden backdrop-blur-sm hover:border-blue-400/40 transition-all`}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">zł/miesiąc</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full font-semibold rounded-full transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 text-blue-400 border border-blue-500/30 hover:border-blue-400'
                    }`}>
                      Wybierz plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400">
              Nie jesteś pewien? Skorzystaj z{" "}
              <span className="text-blue-400 font-semibold">7-dniowego okresu próbnego za darmo</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/30">
              <Mail className="w-4 h-4 mr-2" />
              Kontakt
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Skontaktuj się{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                z nami
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Masz pytania? Chcesz rozpocząć treningi? Jesteśmy tutaj, aby Ci pomóc.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/90 to-black border border-blue-500/20 rounded-3xl overflow-hidden backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8">Napisz do nas</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Imię</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="Jan"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Nazwisko</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="Kowalski"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="jan@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Wiadomość</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                        placeholder="Jak możemy Ci pomóc?"
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 rounded-full shadow-lg shadow-blue-500/25">
                      Wyślij wiadomość
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Card className="bg-gradient-to-br from-gray-900/90 to-black border border-blue-500/20 rounded-3xl overflow-hidden backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Informacje kontaktowe</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Adres</p>
                        <p className="text-gray-400">ul. Sportowa 15, 00-001 Warszawa</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Telefon</p>
                        <p className="text-gray-400">+48 123 456 789</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <p className="text-gray-400">kontakt@oxygenfightclub.pl</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Godziny otwarcia</p>
                        <p className="text-gray-400">Pon-Pt: 6:00 - 22:00</p>
                        <p className="text-gray-400">Sob-Nd: 8:00 - 20:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900/90 to-black border border-blue-500/20 rounded-3xl overflow-hidden backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Śledź nas</h3>
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                      <Facebook className="w-6 h-6 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                      <Instagram className="w-6 h-6 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                      <Youtube className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-blue-500/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Oxygen Fight Club Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <span className="text-xl font-black">OXYGEN</span>
                  <div className="text-xs text-blue-400">FIGHT CLUB</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Profesjonalny klub bokserski z tradycją i pasją do sportu walki.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Szybkie linki</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#o-nas" className="hover:text-blue-400 transition-colors">O nas</Link></li>
                <li><Link href="#programy" className="hover:text-blue-400 transition-colors">Programy</Link></li>
                <li><Link href="#harmonogram" className="hover:text-blue-400 transition-colors">Harmonogram</Link></li>
                <li><Link href="#cennik" className="hover:text-blue-400 transition-colors">Cennik</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Pomoc</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Regulamin</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Polityka prywatności</Link></li>
                <li><Link href="#kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">
                Zapisz się i otrzymuj najnowsze informacje.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Twój email"
                  className="flex-1 px-4 py-2 bg-black/50 border border-blue-500/30 rounded-full text-sm focus:border-blue-400 focus:outline-none"
                />
                <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full px-4">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-blue-500/10 text-center text-sm text-gray-500">
            <p>&copy; 2024 Oxygen Fight Club. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 