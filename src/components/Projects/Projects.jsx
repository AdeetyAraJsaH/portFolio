import React from 'react'
import ProjectItem from './ProjectItem'
import ToDo from '../../assets/ToDo.png'
import QuickTrivia from '../../assets/QuickTrivia.png'
import BookReview from '../../assets/BookReview.png'
import moneyconvertor from '../../assets/Money-convertor.png'
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb } from 'react-icons/si'

function Projects() {
  return (
    <section id='projects' className='fade-in-animation max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='montserrat tracking-wider text-4xl text-center font-bold text-white'>PROJECTS</h1>
      <p className='text center py-4 montserrat montserrat-light'>
        <span className='text-2xl'>W</span>elcome to my projects section! Here, you'll find a collection of my work showcasing my expertise in web development, backend development, and programming languages such as JavaScript, Python, and C++. I have experience with technologies like
        <span className='text-xl text-[#4DB33D]'> MongoDB</span>,
        <span className='text-xl text-[#a5a0a0]'> Express.js</span>,
        <span className='text-xl text-[#61DBFB]'> React</span> and
        <span className='text-xl text-[#3C873A]'> Node.js</span>.
        Each project demonstrates my ability to integrate systems, solve complex problems, and stay updated with the latest technologies. Explore my projects to see how I bring ideas to life through code and innovation.

        <span className='block text-lg'>
          Feel free to customize it further to match your style and specific projects!
        </span>
      </p>
      <div className='montserrat grid sm:grid-cols-2 gap-12'>
        <ProjectItem src={ToDo} title='ToDo' url={'https://todoodler.netlify.app/'} git={'https://github.com/AdeetyAraJsaH/toDo'}>
          <SiExpress size={25} color='white' />
          <FaReact size={25} color="#61DAFB" />
          <FaNodeJs size={25} color="#68A063" />
        </ProjectItem>
        <ProjectItem src={QuickTrivia} title='QuickTrivia' url={'https://quick-e-trivia.netlify.app/'} git={'https://github.com/AdeetyAraJsaH/QuickTrivia'} >
          <SiMongodb size={25} color="#47A248" />
          <SiExpress size={25} color='white' />
          <FaReact size={25} color="#61DAFB" />
          <FaNodeJs size={25} color="#68A063" />
        </ProjectItem>
        <ProjectItem src={BookReview} title='Book Review (Backend)' url={'https://github.com/AdeetyAraJsaH/bookReviewsWithExpress'} git={'https://github.com/AdeetyAraJsaH/bookReviewsWithExpress'} >
          <SiExpress size={25} color='white' />
          <FaNodeJs size={25} color="#68A063" />
        </ProjectItem>
        <ProjectItem src={moneyconvertor} title='Money Convertor' url={'https://money-convertor001.netlify.app/'} git={'https://github.com/AdeetyAraJsaH/currencyConvertor'} >
          <SiExpress size={25} color='white' />
          <FaReact size={25} color="#61DAFB" />
          <FaNodeJs size={25} color="#68A063" />
        </ProjectItem>
      </div>
    </section>
  )
}

export default Projects