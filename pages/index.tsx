import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <Script src="https://kit.fontawesome.com/be21ccce28.js" />
        <div className="mx-auto text-white">

          <title>Resume</title>
          <div className='bg-gray-800 shadow-2xl max-w-screen-xl font-sans md:mx-auto'>
            <div
              className='hidden box-border w-auto px-4 md:flex items-center flex-col h-full fixed bg-slate-900'>
              <Image className='mx-10 my-20 h-48 border border-black' src='/images/profile_pic.jpg' alt="profile picture" width={140} height={130}></Image>
              <span className="text-2xl font-semibold mb-2">Lim Tau Jun</span>
              <span className={styles.nav_bar_text}><a href='#about'>About</a></span>
              <span className={styles.nav_bar_text}><a href='#education'>Education</a></span>
              <span className={styles.nav_bar_text}><a href='#skills'>Skills</a></span>
              <span className={styles.nav_bar_text}><a href='#experience'>Experience</a></span>

              <div className='m-5 flex-col absolute bottom-0 space-x-3 justify-between'>
                <a href='https://www.facebook.com/profile.php?id=100001151920145'><span
                  className='text-3xl text-gray-400 hover:text-black transition-colors duration-600'><i
                    className="fab fa-facebook"></i></span></a>
                <a href='https://www.linkedin.com/in/junlim2804/'><span
                  className='text-3xl text-gray-400 hover:text-black transition-colors duration-600'><i
                    className="fab fa-linkedin"></i></span></a>
                <a href='https://www.github.com/junlim2804'><span
                  className='text-3xl text-gray-400 hover:text-black transition-colors duration-600'><i
                    className="fab fa-github "></i></span></a>
              </div>
            </div>
            <div className="md:ml-56 ">
              <section id="about" className='flex flex-col w-full p-10'>
                <span className='text-5xl font-semibold mb-5'>About</span>
                <div className="bg-indigo-700 rounded-lg flex flex-col p-4">
                  <span className="text-white text-xl">Name : <span className='text-2xl'>Lim Tau Jun</span></span>
                  <span className="text-white text-xl">Age : <span className='text-2xl'>25</span></span>
                  <span className="text-white text-xl">Email : <a href="mailto:junlim2804@gmail.com"><span
                    className='text-2xl'>junlim2804@gmail.com</span></a></span>
                </div>

                <div className='text-lg text-blacks mt-5'>
                  <h3 className="font-bold">Career Objective</h3>
                  Seeking position in full stack developer that will allow me to explore career option in the IT sector
                  and further my knowledge in the IT domain and utilize my skills.
                </div>

              </section>
              <section id="education" className='flex flex-col px-10 justify-center '>
                <span className='text-5xl font-semibold mb-5'>Education</span>
                <div className="grid grid-cols-3 border-2">
                  <div className="border-r-2 flex auto-cols-min items-center justify-center"><span>2018-2020</span></div>
                  <div className="px-2 col-span-2">Tunku Abdul Rahman University College KL Branch,Malaysia</div>
                  <div className="col-span-3 border-y-2 p-2 justify-center"> Completed Bachelor’s in software
                    engineering. Courses include AI programming, android
                    development, web development and software engineering. Obtain a CGPA of 3.90.
                  </div>
                  <div className="border-r-2 flex items-center justify-center"><span>2016-2018</span></div>
                  <div className="px-2 col-span-2">Tunku Abdul Rahman University College Penang Branch,Malaysia</div>
                  <div className="col-span-3 border-y-2 p-2 justify-center">Completed Diploma in Computer Science
                    (Computer Science and
                    Computer Mathematics). Courses
                    include Database system, HTML development, Java Web and Object-Oriented programming.
                    Obtained a
                    CGPA of 3.89.
                  </div>
                  <div className="border-r-2 flex items-center justify-center"><span>2015</span></div>
                  <div className="px-2 col-span-2">Sekolah Menengah Kebangsaan Bukit Mertajam</div>
                  <div className="col-span-3 border-y-2 p-2 justify-center">
                    Have 7As in Sijil Pelajaran Malaysia 2015.
                  </div>
                </div>
              </section>
              <section id="skills" className='flex flex-col p-10 '>
                <span className='text-5xl font-semibold mb-5'>Skills</span>
                <div className="flex w-full flex-col md:flex-row items-baseline ">
                  <div className="flex-1 flex-col space-y-3 m-10">
                    <h2 className="font-semibold text-3xl">Language</h2>
                    <div className="mb-1 text-base font-medium ">Chinese</div>
                    <div className=" bg-gray-200 rounded-full h-1.5">
                      <div className="bg-blue-600 h-1.5 rounded-full w-4/5"></div>
                    </div>
                    <div className="mb-1 text-base font-medium ">English</div>
                    <div className=" bg-gray-200 rounded-full h-1.5">
                      <div className="bg-blue-600 h-1.5 rounded-full w-8/12"></div>
                    </div>
                    <div className="mb-1 text-base font-medium ">Bahasa Melayu</div>
                    <div className="bg-gray-200 rounded-full h-1.5">
                      <div className="bg-blue-600 h-1.5 rounded-full w-3/5"></div>
                    </div>

                  </div>
                  <div className="flex-1 flex-col space-y-3 mx-10">

                    <h2 className="font-semibold text-3xl">Programming Skills</h2>
                    <div className="mb-1 text-base font-medium ">Vue</div>
                    <div className="bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-600 h-1.5 rounded-full w-3/5"></div>
                    </div>
                    <div className="mb-1 text-base font-medium ">Javascript</div>
                    <div className=" bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-600 h-1.5 rounded-full w-3/4" ></div>
                    </div>
                    <div className="mb-1 text-base font-medium ">CSS</div>
                    <div className=" bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-600 h-1.5 rounded-full w-8/12"></div>
                    </div>
                    <div className="mb-1 text-base font-medium ">MySQL</div>
                    <div className="bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-600 h-1.5 rounded-full w-8/12"></div>
                    </div>
                    <div className="mb-1 text-base font-medium ">C# .Net Framework</div>
                    <div className="bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-600 h-1.5 rounded-full w-8/12"></div>
                    </div>
                    <div className="mb-1 text-base font-medium ">PHP Laravel</div>
                    <div className="bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-600 h-1.5 rounded-full w-1/2"></div>
                    </div>
                    <div className="mb-1 text-base font-medium ">Python</div>
                    <div className="bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-600 h-1.5 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </section>
              <section id='experience' className='flex flex-col p-10 space-y-10 '>
                <span className='text-5xl font-semibold mb-5'>Work Experience</span>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-4">
                    <div
                      className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <time className="mb-1 text-xl font-normal leading-none">May 2021 to Present</time>
                    <h3 className="text-lg font-semibold  ">Togl Technology Sdn Bhd
                    </h3>
                    <div className="text-base font-normal ">
                      <ul className="list-disc ml-2 gap-2">
                        <li>Being a front-end web developer for web development and mini program developement.
                        </li>
                        <li>Experience in using Vue Js and wechat mini program</li>
                        <li>Using Alibaba cloud service for the development in backend</li>
                        <li>Being a backend develop in Laravel to provide API for front end mini program</li>
                      </ul>
                    </div>
                  </li>
                  <li className="ml-4">
                    <div
                      className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <time className="mb-1 text-xl font-normal leading-none">Feb 2020</time>
                    <h3 className="text-lg font-semibold ">Webbytes Sdn Bhd</h3>
                    <p className="text-base font-normal">
                      <ul className="list-disc ml-2 gap-2">
                        <li>Being a backend developer in REST API to provide access to third party and another team.
                        </li>
                        <li>Experience in using .Net Framework and SQL Database.</li>
                        <li>Responsible to migrate old system and refactor it to new system.</li>
                        <li>Modify and update backend API to provide support to mobile team.</li>
                      </ul>

                    </p>
                  </li>
                </ol>
              </section>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
