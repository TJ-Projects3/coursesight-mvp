'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { ChevronDown, Star, Book, Users, Trophy } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useRouter } from 'next/navigation';
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/courses-page');
  };

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">

      <Navbar></Navbar>
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 gutterBottom">
        <motion.div
          className="absolute inset-0 -z-10 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-20 left-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-40 right-20 w-60 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        </motion.div>
        <motion.h1 
          className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text pb-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Coursesight
        </motion.h1>
        <div className="relative inline-block">
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 300 20" preserveAspectRatio="none">
            <path d="M0,0 Q150,40 300,0" fill="none" stroke="black" strokeWidth="4" />
          </svg>
        </div>
        <motion.p 
          className="text-xl mt-8 mb-12 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Your one-stop platform for course reviews, study resources, and campus life insights. You are currently on the <em>demo</em> version.
        </motion.p>
        <div className="flex space-x-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleRedirect}>Get Started</Button>
          <Link href="/chatbot" passHref><Button size="lg" variant="outline">Study Buddy</Button></Link>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={40} />
        </motion.div>
      </header>

      <main>
        <section className="py-20 px-4 bg-white">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrollY > 100 ? 1 : 0, y: scrollY > 100 ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Coursesight?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Star className="mr-2" /> Expert Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Access thousands of course reviews from fellow students to make informed decisions.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Book className="mr-2" /> Study Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Find comprehensive study materials, guides, and practice tests for your courses.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Users className="mr-2" /> Community Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Connect with peers, join study groups, and get help from experienced students.
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        <section id="about" className="py-20 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrollY > 500 ? 1 : 0, y: scrollY > 500 ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
            <p className="text-lg mb-8 text-center">
              Coursesight is dedicated to empowering students with the information and resources they need to make the most of their academic journey. We believe in the power of shared experiences and peer-to-peer support to enhance the college experience.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Course Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  Get honest, detailed reviews from fellow students to help you choose the right courses.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Study Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  Access a wealth of study materials, guides, and tips contributed by successful students.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Campus Life</CardTitle>
                </CardHeader>
                <CardContent>
                  Discover events, clubs, and activities to make the most of your time on campus.
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        <section className="py-20 px-4 bg-white">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrollY > 1000 ? 1 : 0, y: scrollY > 1000 ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"Coursesight has been a game-changer for my college experience. The course reviews helped me choose classes that align with my learning style and interests."</p>
                  <p className="font-semibold">- Sarah J., Junior</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"The study resources on Coursesight are incredible. I've improved my grades significantly thanks to the practice tests and study guides available here."</p>
                  <p className="font-semibold">- Mike T., Sophomore</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-100 to-green-100">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrollY > 1500 ? 1 : 0, y: scrollY > 1500 ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={6} />
              <Button type="submit" size="lg" className="w-full md:w-auto">Send Message</Button>
            </form>
          </motion.div>
        </section>

        <section id='resources' className="py-20 px-4 bg-white">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrollY > 2000 ? 1 : 0, y: scrollY > 2000 ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Achieve Your Academic Goals</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Trophy className="mr-2" /> Top Grades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Access study materials and strategies used by top-performing students.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Users className="mr-2" /> Networking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Connect with peers and alumni to build valuable relationships.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Book className="mr-2" /> Skill Building
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Develop crucial skills through our curated resources and workshops.
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Star className="mr-2" /> Career Prep
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Get a head start on your career with internship and job resources.
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer></Footer>
      </div>
  )
}